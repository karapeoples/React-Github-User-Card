import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserCard = ({ name, img, github, files, area, repoNum, followed, followers, iconGH, iconB }) => {
  

  return (
    <section className='userCardSection'>
      <div>
        <img src={img} alt="avatar" />
      </div>
      <div>
        <h1>{name}</h1>
        <span><a href={github}><FontAwesomeIcon icon={iconGH}href={github}/></a></span>
        <span><a href={files}><FontAwesomeIcon icon={iconB}/></a></span>
        <ul>
        <li> Location: {area}</li>
        <li>Public Repos: {repoNum}</li>
        <li> Following: {followed}</li> 
        <li> Followers: {followers}.</li>
        </ul>
      </div>
      
    
    
    </section>
  )
}
export default UserCard;