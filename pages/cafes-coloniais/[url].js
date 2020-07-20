import { useRouter } from 'next/router'

const Cafe = () => {
  const router = useRouter()
  const { url } = router.query
 

    return (
    <div>     
      <h1>url: {url}</h1>
    
     
    </div>
  )
}


export default Cafe
