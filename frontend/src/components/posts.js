import React from 'react'
import { Link } from 'react-router-dom'
import Post from './post'
import {useDispatch, useState} from '../state-management/stores/store'
import {getPostsRequest} from '../requests/posts'
import CreateComment from './createComment'


const Posts = () => {
  // const posts = [
  //   {
  //     id: 1,
  //     userId: 1,
  //     title: "Titlu",
  //     text: 'Text',
  //   },
  //   {
  //     id: 2,
  //     userId: 1,
  //     title: "Titlu2",
  //     text: 'Text2',
  //   },
  //   {
  //     id: 3,
  //     userId: 1,
  //     title: "Titlu3",
  //     text: 'Text3',
  //   },
  //   {
  //     id: 4,
  //     userId: 1,
  //     title: "Titlu4",
  //     text: 'Text4',
  //   }
  // ]

  const dispatch = useDispatch()
  const posts = useState().postState.posts
  //console.log(posts)

  React.useEffect(() => {
    const postsPromise = getPostsRequest()
    postsPromise.then(posts => dispatch({
      type: 'GET_POSTS',
      posts,
    }))
  }, [])

  return(
    <React.Fragment>
      <h3>Titlu Lista Posturi</h3>
      {(posts || []).map((el) => <Post key={`post_${el.id}`} {...el}></Post>) }
      <CreateComment id={1}></CreateComment>
      {/* <Link to={'/test'}> teesstt </Link> */}
    </React.Fragment>
  )
}

export default Posts