// backend/routes/user.js

const express = require('express');
const router = express.Router();
const User = require('../models/User'); // This imports your User model

// Login Route
router.post('/login', async (req, res) => {
  // Your login logic here, which will authenticate the user and send back a response
});

// Logout Route
router.post('/logout', async (req, res) => {
  // Your logout logic here
});

module.exports = router;
