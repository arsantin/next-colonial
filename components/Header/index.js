
import styled from 'styled-components'
import Link from 'next/link'



function Header(){
  return(
     <header>
     <div className="logo"><Link href="/"><a><img src="./img/logo.png" alt=""/></a></Link></div>
    
  </header>
  )
}

export default Header