import React, { Component } from 'react'
import alter from './alt.png'

export default class Newsitem extends Component {
   
  render() {
    const {title,discription,imageurl,url}=this.props;
    return (
     
        <div className="card" style={{width: "18rem;"}}>
  <img src={imageurl} className="card-img-top" alt=".." style={{alter}}/>
  
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{discription}</p>
    <a href={url} className="btn btn-primary">Show more..</a>
  </div>
  

      
    )
  }
}