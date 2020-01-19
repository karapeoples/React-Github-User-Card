import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FollowerCard = ({ name, img, github, files, iconGH, iconB }) => {
  

  return (
    <>
      <div>
        <h1>{name}</h1>
        <span><a href={github}><FontAwesomeIcon icon={iconGH}href={github}/></a></span>
        <span><a href={files}><FontAwesomeIcon icon={iconB}/></a></span>
      </div>
      <div>
        <img src={img} alt="avatar" />
      </div>
    </>
  )
}
export default FollowerCard;