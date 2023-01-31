import React from 'react'
import "./ProfileCard.css"

function ProfileCard(props) {
  return (
    <div className="ProfileCard">
      <div className="content">
        <img id='profileimg' src={props.image} alt="" />
        <div className="textContent">
          <h3>{props.name}</h3>
          <div className="iconContent">
            <a href={props.twitter}><img src="https://img.icons8.com/color/2x/twitter.png" alt="" /></a>
            <a href={props.github}><img src="https://img.icons8.com/3d-fluency/2x/github.png" alt="" /></a>
            <a href={props.linkedin}><img src="https://img.icons8.com/fluency/512/linkedin.png" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard