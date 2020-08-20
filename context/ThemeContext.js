import {createContext, Component} from 'react';


export const ThemeContext = createContext();

class ThemeContextProvider extends Component{
	state ={
		isLightTheme: true,
		light: {
			syntax: '#555',
			ui: 'indigo',
			bg: '#000'
		},
		dark: {
			syntax: '#ddd',
			ui: '#502315',
			bg: '#999'
		}
	}

	toggleTheme =()=> {
		console.log("mudou o tema")
		this.setState({isLightTheme: !this.state.isLightTheme});
	}

	render(){
		return(
			<ThemeContext.Provider value={{...this.state, toggleTheme:this.toggleTheme}}>
				{this.props.children}
			</ThemeContext.Provider>
		)
	}
}

export default ThemeContextProvider;