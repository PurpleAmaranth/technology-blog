// Define dependencies for comments to route
const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

// Attempt to create new comment
router.post('/', withAuth, async (req, res) => {
  try {
    const createNewComment = await Comment.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(createNewComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;