const models = require('../models/index')
const Post = models.Post
const Comment = models.Comment
const Reaction = models.Reaction
const User = models.User
const sequelize = models.sequelize

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

exports.show = async (req, res, next) => {
  const postId = req.params.postId

  const post = await Post.findAll({
    where: {
      id: postId
    },
    include: [{
      model: Comment,
     }]
  })

  res.status(200).json(post)
}

exports.like = async (res, req, next) => {
  //console.log(req, req.req.params)
  const postId = req.req.params.postId
  const post = await Post.findByPk(postId)
  const reactions = await Reaction.findAll({
    where: {
      userId: 1,
      postId,
    }
  })

  let updatedPost = {}
  if(reactions.length === 0 || reactions[0].reactionType !== 'like') {
    const t = await sequelize.transaction();
    try {
      await Reaction.create({userId: 1, postId, reactionType: 'like'})
      let updatePostParams = {likes: post.likes + 1}
      if(reactions.length !== 0 && reactions[0].reactionType === 'dislike') {
        await reactions[0].destroy()
        updatePostParams.dislikes = post.dislikes - 1
      }
      updatedPost = await post.update(updatePostParams)
      await t.commit()
    } catch (error) {
      console.log('THERE WAS AN ERROR CREATING LIKE', error)
      await t.rollback();
    }
  }
  else {

  }
  res.res.status(200).json(updatedPost)
}
