import Link from 'next/link'


function Menu(){
  return ( 
  <div>  
  <ul>
    <li><Link href="/"><a>Home</a></Link></li>
    <li><Link href="/#mapa"><a>Mapa</a></Link></li>
    <li><Link href="/comercio"><a>Comércio</a></Link></li>
    <li><Link href="/contato"><a>Contato</a></Link></li>
  </ul> 
  </div>
  )
}

export default Menu