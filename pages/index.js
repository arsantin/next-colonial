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
  .destaques{    
    margin: 80px auto;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;;
    flex-basis: 100%;
    h2{
      flex-basis: 100%;
      text-align: center;
    }
    .cada{      
      a{
        margin: auto;
      }
    }
    .btn{
      flex-basis: 100%;
    }    
  }
  .map{
    flex-basis: 100%;
  }
`

// cafes will be populated at build time by getStaticProps()
function Cafes({ cafes }) {
  console.log("ok")
  return (
    <Wrapper> 
      <Banner />
      <div className="destaques">
        <h2>DESTAQUES</h2>
      {cafes.map((cafe) => {        
          {
            if(cafe.fotodestaque){
              return(
              <div className="cada">
              <Cartas key={cafe._id} cafe={cafe}/>
              </div>
              )
            }
          }
      })} 
      <div className="btn">VER TODO O COMÉRCIO</div>
      </div>  
      <div className="map">
        <GoogleMap />
      </div>       
        
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
