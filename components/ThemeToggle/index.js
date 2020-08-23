import React, {useContext} from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { Switch } from 'antd';

const ThemeToggle = (props) =>{

		const {toggleTheme} = useContext(ThemeContext);
		console.log(toggleTheme)
		return(
			<>
			<Switch checkedChildren="noite" unCheckedChildren="dia" defaultChecked onClick={toggleTheme}/>   			
			</>
		)
	}

export default ThemeToggle