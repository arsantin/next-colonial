import Link from 'next/link'
import Login from '../Login'


function Menu(){
  return ( 
  <>  
  
  <ul>
    <li><Link href="/"><a>Mapa</a></Link></li>
    <li><Link href="/cafes-coloniais"><a>Café Coloniais</a></Link></li>
    <li><Link href="/contato"><a>Contato</a></Link></li>
  </ul> 
  <Login/>
  </>
  )
}

export default Menu