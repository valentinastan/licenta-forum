import React from 'react'
import { Link } from 'react-router-dom'

const PreviewPost = (props) => {
  
  return(
    <React.Fragment>
      <div>Titlu post: {props.title}</div>
      <div>Text post:{props.text}</div>
      <Link to={`/test/${props.id}`}>Show More</Link>
      <br/>
    </React.Fragment>
  )
}

export default PreviewPost