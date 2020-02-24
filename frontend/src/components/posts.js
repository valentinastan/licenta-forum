import React from 'react'
import Post from './post'
import {useDispatch, useState} from '../state-management/stores/store'
import {getPostsRequest} from '../requests/posts'
import CreatePost from './createPost'
import PreviewPost from './previewPost'


const Posts = () => {
  // const posts = [
  //   {
  //     id: 1,
  //     userId: 1,
  //     title: "Titlu",
  //     text: 'Text',
  //   }
  // ]

  const dispatch = useDispatch()
  const posts = useState().postState.posts

  React.useEffect(() => {
    getPostsRequest().then(posts => dispatch({
      type: 'GET_POSTS',
      posts,
    }))
  }, [])

  return(
    <React.Fragment>
      <h3>Titlu Lista Posturi</h3>
      <CreatePost></CreatePost> <br/>
      {(posts || []).map((el) => <PreviewPost key={`post_${el.id}`} {...el}></PreviewPost>) }
    </React.Fragment>
  )
}

export default Posts