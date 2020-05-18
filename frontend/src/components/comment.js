import React from 'react'

const Comment = (props) => {

  return (
    <React.Fragment>
      <div className='comment'>
        <div>Nenea user: {props.userId}</div>
        <div>Text comm: {props.text}</div>
        <div className='reactions'>
          <button className='like'>
            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
          </button>
          <div className='likesNr'>{props.likes}</div>
          <button className='dislike'>
            <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
          </button>
          <div className='dislikesNr'>{props.likes}</div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Comment