import React from 'react'
import Posts from './posts'
import Comments from './comments'

const Forum = () => {
  return(
      <React.Fragment>
        <Posts></Posts>
        <Comments></Comments>
      </React.Fragment>
    )
  }

export default Forum