import React, { useEffect, useState } from 'react'
import { getOnePostRequest } from '../requests/posts'
import Comment from '../components/comment'
import CreateComment from './createComment'

const Post = (props) => {

  const [state, setState] = useState({
    id: 0,
    title: '',
    text: '',
    likes: 0,
    dislikes: 0,
    comments: [{
      userId: 0,
      text: '',
      likes: 0,
      dislikes: 0,
    }]
  })

  const idPost = props.match.params.id

  React.useEffect(() => {
    getOnePostRequest(idPost)
    .then(post => setState({
      id: post[0].id,
      title: post[0].title,
      text: post[0].text,
      likes: post[0].likes,
      dislikes: post[0].dislikes,
      comments: post[0].Comments,
    }) )
  }, [])
  
console.log('staeeeeeeeeee:', state)
  return(
    <React.Fragment>
      <h2>Titlu post:{state.title}</h2>
      <div>Text post:{state.text}</div>
      <h4>Comments:</h4>
      {(state.comments || []).map((el) => <Comment key={`comment_${el.id}`} {...el}></Comment>) }
      <br/>
      <CreateComment id={state.id}></CreateComment>
    </React.Fragment>
  )
}

export default Post