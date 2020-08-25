import React, {useContext, useReducer} from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { Switch } from 'antd';


const ThemeToggle = () =>{
		const {toggleTheme} = useContext(ThemeContext);		
		return(
			<>
			<Switch checkedChildren="noite" unCheckedChildren="dia" defaultChecked 
			onClick={toggleTheme}/>   			
			</>
		)
	}

export default ThemeToggle