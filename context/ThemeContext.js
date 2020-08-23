import {createContext, useReducer, useState} from 'react';

export const ThemeContext = createContext();



const ThemeContextProvider = (props) => {
	const [isLightTheme, setisLightTheme] = useState(true);
	const [light, setlight] = useState({syntax: '#fff', ui: 'indigo', bg: '#555'});
	const [dark, setdark] = useState({syntax: '#000', ui: '#de9637', bg: 'yellow'})
	

	const toggleTheme = (props) =>{
		console.log("mudou o tema")
		setisLightTheme(!isLightTheme)
		console.log(isLightTheme)
	}

	
		return(
			<ThemeContext.Provider value={{isLightTheme, light, dark, toggleTheme}}>
				{props.children}
			</ThemeContext.Provider>
		)	
}

export default ThemeContextProvider;