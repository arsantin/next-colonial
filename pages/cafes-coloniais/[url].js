import { useRouter } from 'next/router'

const Cafe = ({props}) => {
  const router = useRouter()
  const { url, nome } = router.query

  async function getStaticProps( {params} ) {
    // Call an external API endpoint to get cafes.
    // You can use any data fetching library
    const res = await fetch(`https://curitibacolonial.com.br/apicomercios/${$url}`)
    const cafes = await res.json()
    // By returning { props: cafes }, the CafesColoniais component
    // will receive `cafes` as a prop at build time
    console.log(cafes)
  }

  return (
    <div>     
      <h1>url: {url}</h1>
     
    </div>
  )
}


  

export default Cafe
