import Link from 'next/link'
import { ThemeContext } from '../../context/ThemeContext'
import { AuthContext } from '../../context/AuthContext'
import ThemeToggle from '../../components/ThemeToggle'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Login from '../Login'
import Menu from '../Menu'
import { Modal, Button } from 'antd';
import styled from 'styled-components'

const Cabecalho = styled.div`
  header{
    display: flex;
    position: fixed;
    z-index: 1;
    width: 100%;    
    box-shadow: -3px -3px 7px 0px #000;
    padding: 20px;
    align-items: center;    
    }
  }
`  

const Header =()=> {


  

  return (
    <AuthContext.Consumer>{(authContext) => (
      <ThemeContext.Consumer>{(themeContext) => {
        const { isLogged } = authContext;
        const { isLightTheme, light, dark } = themeContext;
        const theme = isLightTheme ? light : dark;
        return (
          <Cabecalho>
          <header style={{ background: theme.ui, color: theme.syntax }}>
            <div className="logo"><Link href="/"><a><img src="/img/logo.jpg" alt="" /></a></Link></div>
            <h3>O GUIA DA SUA PRAIA</h3>
            <Menu/>
            <button onClick={()=>{pegaLocal()}}>GPS</button>
            <Login/>
            {isLogged ? <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /> : 'deslogado'}
            <ThemeToggle />                        
          </header>
          </Cabecalho>
        )
      }}
      </ThemeContext.Consumer>
    )}
    </AuthContext.Consumer>
  )
}

export default Header