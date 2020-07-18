import Link from 'next/link'

function Menu(){
  return <div>
  <ul>
    <li><Link href="/home"><a>Home</a></Link></li>
    <li><Link href="/cafes-coloniais"><a>Café Coloniais</a></Link></li>
    <li><Link href="/contato"><a>Contato</a></Link></li>
    
  </ul>
  </div>
}

export default Menu