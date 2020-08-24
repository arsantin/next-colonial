import {createContext, useReducer, useState} from 'react';
import {isLightReducer} from '../reducers/isLightReducer'

export const ThemeContext = createContext();


const ThemeContextProvider = (props) => {
	const [isLightTheme, dispatch] = useReducer(isLightReducer);	
	const [light, setlight] = useState({syntax: '#fff', ui: 'indigo', bg: '#555'});
	const [dark, setdark] = useState({syntax: '#000', ui: '#de9637', bg: 'yellow'});	

	const toggleTheme = () =>{
		console.log("mudou o tema")
		dispatch({type: 'TOGGLE'})
		console.log(dispatch);
	}

	
	return(
		<ThemeContext.Provider value={{isLightTheme, dispatch, light, dark, toggleTheme}}>
			{props.children}
		</ThemeContext.Provider>
	)	
}

export default ThemeContextProvider
