import {createContext, useState, useEffect} from 'react';
import axios from 'axios'

export const AuthContext = createContext();

const AuthContextProvider = (props)=> {
	const [isLogged, setisLogged] = useState([]);	
  useEffect(()=>{
    axios.get('/profile/perfil')
  .then(function (response) {
    const dados = response.data
    setisLogged(dados)   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  },[])

		

	function toggleAuth() {
		const setisLogged = ({isLogged: !isLogged});
	}
	return(
		<AuthContext.Provider value={{isLogged, toggleAuth: toggleAuth()}}>
			{props.children}
			</AuthContext.Provider>
	)
	
}

export default AuthContextProvider