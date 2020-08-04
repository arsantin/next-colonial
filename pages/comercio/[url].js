import { useRouter } from 'next/router'
import fetch from 'node-fetch';
import {useState, useEffect} from 'react'
import axios from 'axios';



function Cafe(){
  const [cafe, setCafe] = useState([]);

  const router = useRouter()
  const { url } = router.query
  console.log(url)

  useEffect(() => {
    axios
      .get(`https://guiadeitapoa.com.br/apicomercios/${url}`)
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
  <>
    <div>{
      cafe.map(cada => (
        <div className="card" key={cada._id}>
          <h1>{cada.nome}</h1>
          <p>{cada.descricao}</p>
          <p>{cada.endereco}</p>
        </div>
        
      ))}</div>
  </>
  )
}


export default Cafe
