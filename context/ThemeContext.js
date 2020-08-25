import {createContext, useReducer, useState, useEffect} from 'react';
import {isLightReducer} from '../reducers/isLightReducer'

export const ThemeContext = createContext();


const ThemeContextProvider = (props) => {
	const [isLightTheme, dispatch] = useReducer(isLightReducer, '#000');	
	const [light, setlight] = useState({syntax: '#fff', ui: 'indigo', bg: '#555'});
	const [dark, setdark] = useState({syntax: '#000', ui: '#de9637', bg: 'yellow'});	

	const toggleTheme = () =>{		
		dispatch({type: 'TOGGLE'})
		console.log(dispatch);
		console.log("is light?", isLightTheme)
	}

	useEffect(()=>{
		localStorage.setItem('islight', JSON.stringify(isLightTheme));		
	}, [isLightTheme])

	
	return(
		<ThemeContext.Provider value={{isLightTheme, dispatch, light, dark, toggleTheme}}>
			{props.children}
		</ThemeContext.Provider>
	)	
}

export default ThemeContextProvider
