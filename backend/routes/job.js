const express = require('express');
const router = express.Router();
const { createJob, getAllJobs, updateJob } = require('../controllers/jobController');

// Create Job Post route
router.post('/create', createJob);

// Get all Job Posts
router.get('/', getAllJobs);

// Update Job Post
router.put('/:id', updateJob);

module.exports = router;