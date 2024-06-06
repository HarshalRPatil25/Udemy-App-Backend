// Middleware for handling auth
const {Admin} =require('../db')
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username=req.headers.username;
    const password=req.headers.password;
    const respose=Admin.findOne({
        username:username,
        password:password
    })
    if(respose){
        next();

    }
    else{
        res.json({
            msg:"User not exists"
        })
    }
}

module.exports = adminMiddleware;