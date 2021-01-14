const express = require('express')
const ejs = require("ejs")
const mongoose = require('mongoose')
require('mongoose-type-url');
const bodyParser = require("body-parser")
const session = require("express-session")
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")
const MongoDBStore = require("connect-mongodb-session")(session)
const auth = require('passport-local-authenticate');
const RegisterUser = require("./models/users")
const Posts = require("./models/posts")
const Feeds = require("./models/feed")
const Friends = require("./models/friends")
const Feed = require('./models/feed')
const { populate } = require('./models/users')
const Images =require('./models/images')
const dom = require("jsdom")
const multer = require("multer")
const fs = require("fs")
const path = require('path');
const { url } = require('inspector');
const app = express()
const PORT = 3000;
let user="";
let image="";



app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const storage = multer.diskStorage({
  destination:(req, file, cb) => {
    cb(null, "public/images")
  },
  filename:(req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({
  storage:storage
})

const store = new MongoDBStore({
uri:"mongodb://localhost:27017/fatsebook",
collection:"sessions"
})

app.use(session({
    secret:"fatsebook",
    resave:false,
    saveUninitialized:false,
    store:store,
    cookie: {maxAge: 1360000}
}))

mongoose.connect("mongodb://localhost:27017/fatsebook", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb error'))

app.use(passport.initialize());
app.use(passport.session())

passport.use(RegisterUser.createStrategy())

passport.serializeUser(RegisterUser.serializeUser())
passport.deserializeUser(RegisterUser.deserializeUser())

app.get("/index", function(req, res){
    res.render("pages/index")
})

app.get("/firstpost", function(req, res){
  if(req.isAuthenticated(user)){
    res.render("pages/firstpost")
  }else{
    res.redirect("index")
  }
})

app.get('/', function(req, res){
  if(req.isAuthenticated(user)){
    user = {
      firstname:req.user.firstname,
      lastname:req.user.lastname,
      address:req.user.address,
      month:req.user.month,
      day:req.user.day,
      year:req.user.year,
      postId:req.user.postId,
      url:image.url
    }
    Posts.find({}, req.body, function(err, post){
      if(err){
        console.log(err)
      }else if(post== null){
        res.redirect("firstpost")
      }else{
        RegisterUser.findOne({_id:req.user._id}, req.body, function(err,user){
          if(err){
            console.log(err)
          }else{
            Images.findOne({userId:req.user._id}, function(err, image){
              if(err){
                console.log(err)
              }else if(image == null){
                Images.create({userId:req.user._id, url:req.user.url}, function(err){
                  if(err){
                    console.log(err)
                  }else{
                    Images.findOne({userId:req.user._id}, function(err,image){
                      if(err){
                        console.log(err)
                      }else{
                        res.render("pages/home", { post: post, user:user, image:image})
                      }
                    })

                  }
                })

              }else if(image!==null){
                Images.findOne({userId:req.user._id}, function(err,image){
                  if(err){
                    console.log(err)
                  }else{
                        RegisterUser.findOneAndUpdate({_id:req.user._id}, req.body, {new:true, upsert:true}, function(err,user){
                          if(err){
                            console.log(err)
                          }else{
                            res.render("pages/home", { post: post, user:user, image:image})
                          }
                        })

                  }
                })
              }
            })
            
          }
        })
      }
    }).sort({date:-1})
  }else{ 
    res.redirect("index")
  }
})


app.get("/search", function(req, res){
  if(req.isAuthenticated(user)){
    RegisterUser.find({firstname: {$ne:req.user.firstname}}, function(err, user){
      if(err){
        console.log(err)
      }else{
        res.render("pages/searchpage", { users: user })
      }
    })
  }
})





app.get("/logout", function(req, res){
  req.session.destroy(function(err){
    if(err){
      console.log("Cookie has note been deleted")
    }else{
      res.redirect("/index")
      console.log("Cookie has been destroyed")
    }
  })
})


app.post('/register', function(req, res){
    RegisterUser.register({username: req.body.username, firstname: req.body.firstname,
    lastname: req.body.lastname, mobile:req.body.mobile, day:req.body.day, month:req.body.month,
year:req.body.year, gender:req.body.gender, address:req.body.address}, req.body.password, function(err, user){
        if(err){
            console.log(err)
        }else{
            RegisterUser.authenticate('local')(req, res, function(){
                res.redirect("/firstpost")
            })
        }
    })
})


app.post("/search", function(req, res){
  if(req.isAuthenticated(user)){
    searchFriend = req.body.search; 
    RegisterUser.find({firstname:searchFriend}, function(err, user){
      if(err){
        console.log(err)
      }else{
        console.log(user)
        res.render("pages/searchpage", {user:user})
      }
    })

  }

})


app.post('/login', function(req, res,next){
    passport.authenticate('local',
    (err, user, info) => {
      if (err) {
        return next(err);
      }
  
      if (!user) {
        return res.redirect('/index');
      }
  
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
  
        return res.redirect('/');
      });
  
    })(req, res, next);
    
})



app.post("/posts", function(req, res){
  if(req.isAuthenticated(user)){
  post = new Posts({
    description: req.body.description,
    userId:req.user._id,
    firstname:req.user.firstname
  })
    RegisterUser.findOne({userId: req.user._id}, function(err,user){
        if(err){
          console.log(err)
        }else if(!post){
          post.save(user, function(err){
            if(err){
              console.log(err)
            }else{
              console.log("Post added")
              res.redirect("/")
            }
          })
        }else if(post){
          Posts.findOne({userId: req.user._id}, req.body,  function(err,user){
            if(err){
              console.log(err)
            }else{
              res.redirect("/")
              post.save(user, function(err){
                if(err){
                  console.log(err)
                }else{
                  console.log("added")
                }
              })
              }
           })
         }
      })
    }
})

app.post("/firstpost", function(req, res){
  if(req.isAuthenticated(user)){
    FirstPost = new Posts({
      description: req.body.description,
      firstname:req.user.firstname,
      userId: req.user._id,
      postId:new mongoose.Types.ObjectId()
    })
    RegisterUser.findOne({userId: req.user._id}, function(err,user,post){
      if(err){
        console.log(err)
      }else{
    FirstPost.save(user, function(err){
      if(err){
        console.log(err)
      }else{
        console.log("First post created")
        console.log
        res.redirect("/")
      }
    })
      }
    })
  }
})

app.post("/upload", upload.single("photo"),(req, res, next) => {
  if(req.isAuthenticated(user)){
    image={
      photo:req.file.filename,
      url:req.file.originalname,
      name:req.file.fieldname,
      destination:req.file.originalname,
      userId:req.user._id,
      urlId:req.file.url
    }
    Images.findOneAndUpdate({userId:req.user._id}, image, {new: true,upsert:true}, function(err, doc){
      doc.save()
      res.redirect("/")
    })
}
})

app.listen(PORT, function(err){
    if(err) throw err
    console.log(`Server is up on port ${PORT}`)
})