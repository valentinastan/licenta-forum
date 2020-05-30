import React from 'react'
import { useDispatch } from '../state-management/stores/store'
import { likeCommentQuery,  dislikeCommentQuery} from '../requests/comments'

const Comment = (props) => {
  const dispatch = useDispatch()

  const likeComment = () => {
    likeCommentQuery({
      commentId: props.id,
    }).then((comment) => dispatch({
      type: 'UPDATE_COMMENT',
      comment,
    }))
  }

  const dislikeComment = () => {
    dislikeCommentQuery({
      commentId: props.id,
    }).then((comment) => dispatch({
      type: 'UPDATE_COMMENT',
      comment,
    }))
  }

  return (
    <React.Fragment>
      <div className='comment'>
        <div>Nenea user: {props.userId}</div>
        <div>Text comm: {props.text}</div>
        <div className='reactions'>
          <button className='like' onClick={likeComment}>
            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
          </button>
          <div className='likesNr'>{props.likes}</div>
          <button className='dislike' onClick={dislikeComment}>
            <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
          </button>
          <div className='dislikesNr'>{props.dislikes}</div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Comment
