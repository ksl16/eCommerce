const express = require('express');
const router = express.Router();
const { registerUser  } = require('../controllers/authcontroller');

router.post("/", registerUser);


module.exports = router;