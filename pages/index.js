import Link from 'next/link';
import styled from 'styled-components';
import Favoritos from '../components/Favoritos'
import ThemeContextProvider from '../context/ThemeContext'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 980px;
  margin: auto;
  justify-content: space-around;
`


const Card = styled.div`
  background: #f5f5f5;
  max-width: 280px;
  margin-bottom: 30px;
  padding: 20px;
`


// cafes will be populated at build time by getStaticProps()
function Cafes({ cafes }) {
  return (
    <Wrapper>
      <ThemeContextProvider>
      <Favoritos/>
      {cafes.map((cafe) => (
        <Card key={cafe._id} className="card">
          <Link href="/cafes-coloniais/[url]" as={`/cafes-coloniais/${cafe.url}`}><a>
          <img src="http://lorempixel.com/280/120/sports/" alt=""/>
          <h2>{cafe.nome}</h2>
          <p>{cafe.endereco}</p>          
          </a>
          </Link>
        </Card>
      ))}
    </ThemeContextProvider>
    </Wrapper>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
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