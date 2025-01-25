import React from 'react'
import Photo from '../assets/Photo.png'
import './UserCard.css'  

const UserCard = () => {
  return (
    <div>
        <h2>Welcome! This is My First React App.</h2>
        <img id='photo1' src={Photo} ></img> 
    </div>
  )
}

export default UserCard