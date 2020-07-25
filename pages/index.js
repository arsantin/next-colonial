import Link from 'next/link';
import styled from 'styled-components';
import Favoritos from '../components/Favoritos'
import ThemeContextProvider from '../context/ThemeContext'
import Card from '../components/Card'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 980px;
  margin: auto;
  justify-content: space-around;
`




// cafes will be populated at build time by getStaticProps()
function Cafes({ cafes }) {
  return (
    <Wrapper>
      <ThemeContextProvider>
      <Favoritos/>
      {cafes.map((cafe) => (
        <Card cafe={cafe}/>        
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