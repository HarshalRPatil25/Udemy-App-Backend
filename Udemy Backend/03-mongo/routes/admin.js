const { Router } = require("express");
const {Admin, Course}=require('../db')

const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup' ,async(req, res) => {
    // Implement admin signup logic
    const username=req.headers.username;
    const password=req.headers.password;
    const response= await Admin.findOne({
        username:username,
        password:password
    })
    if(response){
        res.json({
            msg:"Admin Already exists"
        })

    }
    else{
        const admin= await new Admin({
            username:username,
            password:password
        })
        admin.save();
            res.json({
                msg:"Admin created"
            })
        
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {

    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;
     
    const newcourse= await new Course({
        title:title,
        description:description,
        imageLink:imageLink,
        price:price
    })
    newcourse.save();
    res.send("New Course Added");

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const result= await Course.find();
    res.send(result);
});

module.exports = router;