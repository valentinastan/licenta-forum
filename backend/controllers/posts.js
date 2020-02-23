const models = require('../models/index')
const Post = models.Post

exports.index = async (req, res, next) => {
  const posts = await Post.findAll()

  res.status(200).json(posts)
}

exports.create = async (req, res, next) => {
  const {
    title,
    text,
  } = req.body

  const post = await Post.create({userId: 1, title, text})

  res.status(200).json(post)
}
