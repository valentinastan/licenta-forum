const models = require('../models/index')
const Comment = models.Comment

exports.index = async (req, res, next) => {

  const comments = await Comment.findAll({
    where: {
      postId: req.params.postId,
    }
  });

  res.status(200).json(comments)
}

exports.create = async (req, res, next) => {
  const { text } = req.body
  const { postId } = req.params

  const comment = await Comment.create({postId, userId: 1, text})

  res.status(200).json(comment)
}