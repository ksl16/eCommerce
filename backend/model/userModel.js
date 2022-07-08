const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({ 
    name:{
        type:String,
        required:[true, 'Please add a Name']
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
},
{
    timestamps:true
});

const User = mongoose.model('User', userSchema);

module.exports = User