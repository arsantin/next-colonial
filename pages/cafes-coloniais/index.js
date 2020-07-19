import Link from 'next/link';
import { useRouter } from 'next/router'

// cafes will be populated at build time by getStaticProps()
function Cafes({ cafes }) {
  return (
    <ul>
      {cafes.map((cafe) => (
        <li><Link href="/cafes-coloniais/[url]" as={`/cafes-coloniais/${cafe.url}`}><a>{cafe.nome}</a></Link></li>
      ))}
    </ul>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps( {params} ) {
  // Call an external API endpoint to get cafes.
  // You can use any data fetching library
  const res = await fetch('https://curitibacolonial.com.br/apicomercios/')
  const cafes = await res.json()
  // By returning { props: cafes }, the CafesColoniais component
  // will receive `cafes` as a prop at build time
  return {
    props: {
      cafes,
    },
  }
}

export default Cafes