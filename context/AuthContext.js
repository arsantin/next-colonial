import {createContext, Component} from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component{
	state = {
		isLogged: false
	}

	toggleAuth =()=> {
		this.setState({isLogged: !this.state.isLogged});
	}

	render(){
		return(
			<AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
				{this.props.children}
			</AuthContext.Provider>
		)
	}
}

export default AuthContextProvider;