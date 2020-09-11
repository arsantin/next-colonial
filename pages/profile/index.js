import {useState, useEffect} from 'react'
import axios from 'axios'


const Profile = ({user}) => {



  return(
    <>
  <div>Meu Perfil</div> 
  
   <h1>{user.username}</h1>
    <img src={user.thumbnail} />
    </>
  )  
}

export default Profile