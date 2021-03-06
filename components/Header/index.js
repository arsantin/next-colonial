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

@keyframes example {
  from {background: #385782;}
  to {background: #fff;}
}
  header{    
    position: fixed;
    z-index: 1;
    width: 100%; 
    padding: 0px 20px;
    align-items: center;
    animation-name: example;
    background: #fff;
    animation-duration: 3s;
    .section{
      max-width: 1200px;
      display: flex;
      align-items: center;
      margin: auto;
      justify-content: space-between;
      h3{
        margin: 0px 20px;
        font-size: 13px;
      }
      .first{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
      }
      .second{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        .login, .logout{
          font-size: 11px;
          color: #666;
          margin: 0px 10px;
        }
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
              <div className="first">
                <div className="logo"><Link href="/"><a><img src="/img/logo.png" alt="" /></a></Link></div>
            <h3>O GUIA DA SUA PRAIA</h3>            
              </div>             
              <div className="second">
                <Menu/>             
            
              </div>
            
            
                  
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