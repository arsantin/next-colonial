import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.div`  
  width: 100%;
  max-width: 400px;
  margin: 0px 25px;
    ul{
    display: flex;
    align-items: center;
    margin: 0px;
    justify-content: space-between;
    ul{
      margin-left: -20px;
    }
    li{
      list-style: none;
      a{
        color: #000;
        text-transform: uppercase;
        font-weight: 500;
        padding: 5px;
      }
      a:hover{
        background-color: #EF4859;
        color: #fff;
        border-radius: 5px;
        padding: 5px;
      }
    }
  }  
`  


function Menu(){
  return ( 
  <Nav>  
  <ul>  
    <li><Link href="/"><a>Home</a></Link></li>
    <li><Link href="/#mapa"><a>Mapa</a></Link></li>
    <li><Link href="/comercio"><a>Comércio</a></Link></li>
    <li><Link href="/contato"><a>Contato</a></Link></li>
  </ul> 
  </Nav>
  )
}

export default Menu