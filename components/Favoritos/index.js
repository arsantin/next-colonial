import React, {Component} from 'react'
import { ThemeContext } from '../../context/ThemeContext';

class Favoritos extends Component{

	static contextType = ThemeContext;

	

	render(){
		const {isLightTheme, light, dark} = this.context;
		const theme = isLightTheme ? light : dark;
		console.log(this.context);
		return(
			<div>
				<h1 style={{background: theme.ui, color: theme.syntax}}>Meus Favoritos</h1>
				<ul>
					<li>{JSON.stringify(isLightTheme)}</li>
					<li>rest 2</li>
				</ul>
			</div>
		);
	}	
}

export default Favoritos;