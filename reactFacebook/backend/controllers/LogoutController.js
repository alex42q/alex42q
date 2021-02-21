exports.getLogout = (req, res, next)=>{
    if(req.session.loggedin){
        req.session.destroy(function(err,result){
            if(err){
                console.log(err)
            }else{
                res.send("Cookie destroy")
            }
        })
    }
}