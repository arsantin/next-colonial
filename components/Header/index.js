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

        console.log("logado?", isLogged)
        const { isLightTheme, light, dark } = themeContext;
        const theme = isLightTheme ? light : dark;
        return (
          <Cabecalho>
          <header style={{ background: theme.ui, color: theme.syntax }}>
            <div className="logo"><Link href="/"><a><img src="/img/logo.jpg" alt="" /></a></Link></div>
            <h3>O GUIA DA SUA PRAIA</h3>
            <Menu/>            
            {isLogged.user != "" ? (
              <>                
                <Link href="/minha-conta/profile">
                  <a className="nav-link">Profile</a>
                </Link>
                <Link href="/minha-conta/logout">
                  <a className="nav-link">Log Out</a>
                </Link>
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
              </>
            ) : (
              <Link href="/minha-conta/google">
                <a className="nav-link">Log In</a>
              </Link>
            )}
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