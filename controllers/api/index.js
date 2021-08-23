// Define dependencies
const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

//Define 
router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;