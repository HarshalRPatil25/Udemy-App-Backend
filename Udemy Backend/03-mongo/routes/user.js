const { Router } = require("express");
const Authentications=require('../Zod')
const router = Router();
const {User,Course}=require('../db')
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username=req.headers.username;
    const password=req.headers.password;
    const response= await User.findOne({
        username:username,
        password:password
    })
    if(response){
        res.json({
            msg:"User Already exists"
        })

    }
    else{
        const user= await new User({
            username:username,
            password:password
        })
        user.save();
            res.json({
                msg:"User created"
            })
        
    }

});

router.get('/courses',async(req, res) => {
    // Implement listing all courses logic
    const result=await Course.find({});
    res.send(result);
});

router.post('/courses/:courseId', userMiddleware,  (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    User.updateOne(
        { username: username },
        { $push: { purchasedCourses: courseId } }
    )
    .then(() => {
        res.json({ message: "Purchase complete!" });
    })
    .catch(error => {
        console.error("Error purchasing course:", error);
        res.status(500).json({ error: "An unexpected error occurred" });
    });
});


router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router