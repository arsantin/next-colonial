import { useRouter } from 'next/router'
import styled from 'styled-components'
import {useState, useEffect} from 'react'
import axios from 'axios';
import Slide from '../../components/Slide'

const Wrapper = styled.div`
  max-width: 650px;
  margin: auto;
  width: 100%;
  text-align: center;
  padding: 60px 0px;  
`

function Cafe(){
  const [cafe, setCafe] = useState([]);

  const router = useRouter()
  const { url } = router.query
  console.log(url)

  useEffect(() => {
    axios
      .get(`http://guiadeitapoa.com.br/apicomercios/${url}`)
      .then(res => {
        console.log(res.data[0])
        setCafe(res.data)
        console.log("cafe", cafe)
      })
      .catch(err => {
        console.log(err)
      })
    })
 


return (
  <><Wrapper>
    <div>{
      cafe.map(cada => (
        <div className="card" key={cada._id}>
          <img src={`https://guiadeitapoa.com.br/assets/img/${cada.fotodestaque}`} />
          <h1>{cada.nome}</h1>
          <Slide/>                
          <p>{cada.descricao}</p>         
          <p>{cada.telefone}</p>
          <p>{cada.endereco}</p>
        </div>
        
      ))}</div>
    </Wrapper>  
  </>
  )
}


export default Cafe
