import Link from 'next/link'
import { ThemeContext } from '../../context/ThemeContext'
import { AuthContext } from '../../context/AuthContext'
import ThemeToggle from '../../components/ThemeToggle'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import Menu from '../Menu';
import { Modal, Button } from 'antd';
import styled from 'styled-components'

const Cabecalho = styled.div`
  header{    
    position: fixed;
    z-index: 1;
    width: 100%; 
    padding: 0px 20px;
    align-items: center;  
    .section{
      max-width: 870px;
      display: flex;
      align-items: center;
      margin: auto;
      h3{
        margin: 0px 20px;
        font-size: 13px;
      }
      .perfil{
        margin: 0px;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        width: 60px;
        a{
          margin: 0px 10px;
          flex-basis: 100%;
          color: #666;
        }
        .logout{
          font-size: 11px;
        }
      }
    }  
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
        const theme = isLightTheme ? dark : light;
        return (
          <Cabecalho>
          <header style={{ color: theme.syntax }}>
            <div className="section">
            <div className="logo"><Link href="/"><a><img src="/img/logo.png" alt="" /></a></Link></div>
            <h3>O GUIA DA SUA PRAIA</h3>            
            <Menu/>
            <ThemeToggle />
            {isLogged != "" ? (
              <div className="perfil">                
                <Link href="/profile">
                  <a className="nav-link"><Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /></a>
                </Link>
                <Link href="/minha-conta/logout">
                  <a className="nav-link logout">sair</a>
                </Link>
                
              </div>
            ) : (
              <Link href="/login">
                <a className="nav-link">Log In</a>
              </Link>
            )}            
            </div>                         
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