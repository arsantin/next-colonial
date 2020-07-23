import Link from 'next/link'

function Login(){
  return ( 
  <>    
  <ul>
    <li><Link href="/"><a>Login</a></Link></li>
    <li><Link href="/cafes-coloniais"><a>criar conta</a></Link></li>
  </ul> 
 
  </>
  )
}

export default Login