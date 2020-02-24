import React from 'react'

const Comment = (props) => {

  return (
    <React.Fragment>
      <div>Nenea user: {props.userId}</div>
      <div>Text comm: {props.text}</div>
      <div>Likes: {props.likes}</div>
      <div>Dislikes: {props.dislikes}</div>
      <br/>
    </React.Fragment>
  )
}
export default Comment