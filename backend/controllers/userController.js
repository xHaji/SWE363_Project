const User = require('../models/User');
const mongoose = require('mongoose');

const userController = {
  getUserById: async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid user ID format' });
      }

      const user = await User.findById(req.params.id);
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Log the data being sent for debugging
      console.log('Fetched user:', user);

      res.json({
        userType: user.userType,
        profile: {
          firstName: user.profile.firstName,
          lastName: user.profile.lastName,
          phone: user.profile.phone,
          company: user.profile.company,
          position: user.profile.position,
          skills: user.profile.skills || [],
          experience: user.profile.experience || []
        }
      });

    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Failed to fetch user data', error: error.message });
    }
  }
};

module.exports = userController; 