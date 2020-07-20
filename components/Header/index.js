import Menu from '../Menu'
import styled from 'styled-components'
import Link from 'next/link'



function Header(){
  return(
     <header>
     <div className="logo"><Link href="/"><a><img src="./img/logo.png" alt=""/></a></Link></div>
      <Menu />
  </header>
  )
}

export default Header