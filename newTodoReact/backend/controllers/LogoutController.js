exports.getLogout = (req, res, next)=>{
    if(req.session.loggedin){
        req.session.destroy(function(err,cookie){
            if(err){
                console.log(err)
            }else{
                console.log("Cookie deleted!")
                res.send("Cookie deleted!")
            }
        })
    }
}