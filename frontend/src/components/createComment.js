import React, { useState } from 'react'
import { postCommentsQuery } from '../requests/comments'
import { useDispatch } from '../state-management/stores/store'

const CreateComment = (props) => {
  const [state, setState] = useState('');
  //console.log('props' , props)
  const dispatch = useDispatch()

  const sendComment = () => {
    postCommentsQuery({
      id: props.id,
      text: state
    }).then((comment) => dispatch({
      type: 'NEW_COMMENT',
      comment,
    }))
  }

  return (
    <React.Fragment>
    <textarea id="newComment" rows="3" cols="30" onChange={(event) => setState(event.target.value)}></textarea>
    <h1>{state}</h1>
    <button type='button' onClick={sendComment}>Button create comment</button>
    </React.Fragment>
  )
}
export default CreateComment