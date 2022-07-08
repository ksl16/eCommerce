const User = require('../model/userModel');
//const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs');
const getWebToken = require('../utils/genWebtoken');

exports.registerUser = async (req, res) => {
    //console.log("user register");

    let new_user = await User.findOne({email: req.body.email})
    if(new_user) return res.status(400).send({message:"email already exists"});
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);  
    
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        
    });
    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token: getWebToken(user._id)
        })
    }else{
        res.status(400).json({"Error": "User Not Register"})
    }
   
}

exports.loginUser = async  (req, res) => {
    //console.log("user login");
    const {email,password} = req.body;
    let new_user = await User.findOne({email})
    if(!new_user) return res.status(400).send({message:"User Not Present"});


    if(new_user && (await bcrypt.compare(password, new_user.password))){
        res.status(201).json({
            _id:new_user.id,
            name:new_user.name,
            email:new_user.email,
            token: getWebToken(new_user)
        })
    }else{
        res.status(400).json({"Error": "InValid Credentials"})
    }
}