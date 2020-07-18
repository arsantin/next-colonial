import React, {useState} from 'react'

function Home(){
  const [estado, setestado] = useState(0)

  return (
    <div>
    <div>Home</div>
    <button onClick={()=> setestado(estado + 1)}>LARA {estado}</button>
    <p>alo galera</p>
    </div>
  );
}

export default Home