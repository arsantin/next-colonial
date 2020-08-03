import Link from 'next/link';



function Menu(){
  return ( 
  <div>  
    <Nav direction="row" background="brand" pad="medium">
    <Anchor icon={<Icons.Home />} hoverIndicator />
    <Anchor icon={<Icons.Notification />} hoverIndicator />
    <Anchor icon={<Icons.ChatOption />} hoverIndicator />
</Nav>
  <ul>
    <li><Link href="/home"><a>Home</a></Link></li>
    <li><Link href="/cafes-coloniais"><a>Café Coloniais</a></Link></li>
    <li><Link href="/contato"><a>Contato</a></Link></li>
  </ul> 
  </div>
  )
}

export default Menu