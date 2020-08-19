import React, {Component} from 'react'
import { ThemeContext } from '../../context/ThemeContext'

import { Switch } from 'antd';

class ThemeToggle extends Component{
	static contextType = ThemeContext
	render(){
		const {toggleTheme} = this.context;
		return(
			<>
			<Switch checkedChildren="dia" unCheckedChildren="noite" defaultChecked onClick={toggleTheme}/>   
			
			</>
		)
	}
}

export default ThemeToggle