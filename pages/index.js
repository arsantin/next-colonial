import styled from 'styled-components';
import Cartas from '../components/Cartas'
import Banner from '../components/Banner'
import GoogleMap from '../components/GoogleMap'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
  margin: auto;
  justify-content: space-around;
  padding-top: 0px;
`

// cafes will be populated at build time by getStaticProps()
function Cafes({ cafes }) {
  console.log("ok")
  return (
    <Wrapper> 
      <Banner />
      <h2>DESTAQUES</h2>
      {cafes.map((cafe) => {        
          {
            if(cafe.fotodestaque){
              return <Cartas key={cafe._id} cafe={cafe}/>
            }
          }
      })} 
      <button>VER TODO O COMÉRCIO</button>     
    </Wrapper>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get cafes.
  // You can use any data fetching library
  const res = await fetch(process.env.FETCH_URL)
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
