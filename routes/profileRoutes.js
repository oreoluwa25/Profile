const express = require('express');
const router = express.Router();
const db = require('../models');

// Create Profile
router.post('/profile', async (req, res) => {
  try {
    const profile = await db.Profile.create(req.body);
    res.status(201).send(profile);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get Profiles
router.get('/profiles', async (req, res) => {
  try {
    const profiles = await db.Profile.findAll();
    res.status(200).send(profiles);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
