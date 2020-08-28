import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.div`  
  width: 100%;
  max-width: 400px;
    ul{
    display: flex;
    
    justify-content: space-between;
    li{
      list-style: none;
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