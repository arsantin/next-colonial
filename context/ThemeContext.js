import {createContext, Component} from 'react';


export const ThemeContext = createContext();

class ThemeContextProvider extends Component{
	state ={
		isLightTheme: true,
		light: {
			syntax: '#fff',
			ui: 'indigo',
			bg: '#555'
		},
		dark: {
			syntax: '#000',
			ui: '#de9637',
			bg: 'yellow'
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