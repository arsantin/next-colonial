import React, {Component} from 'react'
import { AuthContext } from '../../context/AuthContext'

class AuthToggle extends Component{
	static contextType = AuthContext
	render(){
		const {toggleTheme} = this.context;
		return(
			<button onClick={toggleTheme}>Mudar tema</button>
		)
	}
}

export default AuthToggle