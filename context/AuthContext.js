import {createContext, useState, useEffect} from 'react';
import axios from 'axios'

export const AuthContext = createContext();

const AuthContextProvider = (props)=> {
	const [isLogged, setisLogged] = useState(true);

		

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