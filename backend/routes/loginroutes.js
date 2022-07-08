const express = require('express');
const router = express.Router();
const {  loginUser  } = require('../controllers/authcontroller');

router.post("/", loginUser);

module.exports = router;