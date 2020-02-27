import React, { useState } from 'react'
import { getOnePostRequest } from '../requests/posts'
import Comment from '../components/comment'
import CreateComment from './createComment'

const Post = (props) => {

  const [state, setState] = useState({})

  React.useEffect(() => {
    getOnePostRequest(props.match.params.id)
    .then(post => setState(post[0]) )
  }, [])
  
  console.log('state:', state)
  return(
    <React.Fragment>
      <h2>Titlu post:{state.title}</h2>
      <div>Text post:{state.text}</div>
      <h4>Comments:</h4>
      {(state.Comments || []).map((el) => <Comment key={`comment_${el.id}`} {...el}></Comment>) }
      <br/>
      <CreateComment id={state.id}></CreateComment>
    </React.Fragment>
  )
}

export default Post