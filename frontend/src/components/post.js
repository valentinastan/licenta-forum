import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { postRoutes } from '../routes/routes'

const Post = (props) => {
  
  return(
    <React.Fragment>
      <br/><div>Id post: {props.id}</div>
      <div>Id user: {props.userId}</div>
      <div>Titlu post: {props.title}</div>
      <div>Text post:{props.text}</div>
      <Router>
        <Link to="/test">Show More</Link>
        {postRoutes}
      </Router>
      <br/>
    </React.Fragment>
  )
}

export default Post