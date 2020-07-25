import React, {Component} from 'react'
import { ThemeContext } from '../../context/ThemeContext'

class ThemeToggle extends Component{
	static contextType = ThemeContext
	render(){
		const {toggleTheme} = this.context;
		return(
			<button onClick={toggleTheme}>Mudar tema</button>
		)
	}
}

export default ThemeToggle