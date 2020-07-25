import React, {Component} from 'react'
import { ThemeContext } from '../../context/ThemeContext';

class Favoritos extends Component{

	render(){	
		return(	
		<ThemeContext.Consumer>{(context) => {
			const {isLightTheme, light, dark} = context;
		const theme = isLightTheme ? light : dark;
			return(
				<div>
				<h1>Meus Favoritos</h1>
				<ul>
					<li style={{background: theme.ui, color: theme.syntax}}>{JSON.stringify(isLightTheme)}</li>
					<li style={{background: theme.ui, color: theme.syntax}}>rest 2</li>
				</ul>
			</div>
			)
		}}
		</ThemeContext.Consumer>
		)
	}	
}

export default Favoritos;