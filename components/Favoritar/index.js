import React, {useContext, useReducer} from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Switch } from 'antd';


const Favoritar = () =>{
		const {toggleFavorito} = useContext(AuthContext);		
		return(
			<>
			<Switch checkedChildren="sim" unCheckedChildren="nao" defaultChecked 
			onClick={toggleFavorito}/>   			
			</>
		)
	}

export default Favoritar