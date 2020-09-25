import {createContext, useReducer, useState, useEffect} from 'react';
import {isLightReducer} from '../reducers/isLightReducer'


export const ThemeContext = createContext();


const ThemeContextProvider = (props) => {
	const [isLightTheme, dispatch] = useReducer(isLightReducer);	
	const [light, setlight] = useState({syntax: 'green', ui: '#fff', bg: '#666'});
	const [dark, setdark] = useState({syntax: '#fff', ui: '#385782', bg: '#fff'});	

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
