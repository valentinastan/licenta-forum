import React, { useState } from 'react'
import { useDispatch } from '../state-management/stores/store'
import { postPostRequest } from '../requests/posts'

const CreatePost = () => {

  const [state, setState] = useState({
    titlePost: '',
    textPost: ''
  })
  
  const dispatch = useDispatch()

  const sendPost = () => {
    postPostRequest({
      title: state.titlePost,
      text: state.textPost
    }).then((post) => dispatch({
      type: 'NEW_POST',
      post
    }))
  }

  return(
    <React.Fragment>
      <h1>{state.titlePost}</h1>
      <h1>{state.textPost}</h1>
      <textarea id="newTitle" rows="1.5" cols="30" onChange={(event) => setState({...state, titlePost: event.target.value})}></textarea> <br/>
      <textarea id="newText" rows="3" cols="30" onChange={(event) => setState({...state, textPost: event.target.value})}></textarea> <br/>
      <button type='button' onClick={sendPost}>Button create new POST</button>
    </React.Fragment>
  )
}
export default CreatePost
