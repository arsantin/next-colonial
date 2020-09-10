import {useState, useEffect} from 'react'
import axios from 'axios'


const Profile = ({user}) => {
const [perfil, setPerfil] = useState([])
console.log("user", user)
  useEffect(()=>{
    axios.get('/profile/perfil')
  .then(function (response) {
    const dados = response.data
    setPerfil(dados)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  },[])


  return(
    <>
  <div>Meu Perfil</div> 
  
   <h1>{perfil.username}</h1>
    <img src={perfil.thumbnail} />
    </>
  )  
}

export default Profile