exports.getLogout = (req, res, next)=>{
    if(req.session.loggedin){
        req.session.destroy(function(err){
            if(err){
                console.log(err)
            }else{
                res.send("cookie destroyed")
            }
        })
    }else{
        res.send("gologin")
    }
}