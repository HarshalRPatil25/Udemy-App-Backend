const mongoose = require('mongoose');

// Connect to MongoDB

mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.log("DataBase Connected");
}).catch(()=>{
    console.log("DataBase connection Failed");
})



// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String
    

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    imageLink:String,
    price:Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    
    Admin,
    User,
    Course
}