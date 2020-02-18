import React from 'react'

const Comment = (props) => {

  return (
    <React.Fragment>
      <div>Id comm: {props.id}</div>
      <div>User id: {props.userID}</div>
      <div>Post id: {props.postId}</div>
      <div>Text comm: {props.text}</div>
    </React.Fragment>
  )
}
export default Comment