const express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
//const UserTable = require('./models/userModel');

const app = express();
app.use(express.json()); // for postman 
app.use(cors());
app.use(express.urlencoded({extended:false}));

const port = process.env.PORT || 4000;
const uri = process.env.DB_URI;

mongoose.connect(uri)
.then(() => console.log("Connection Succesfully"))
.catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

const user = require("./routes/authRoutes");
app.use('/register', user);

const loginUser = require('./routes/loginroutes');
app.use('/login', loginUser);

