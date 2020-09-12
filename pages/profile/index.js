import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import styled from 'styled-components'

const Dash = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  max-width: 760px;  
  .left{
    flex-basis: 30%;
    img{
      max-width: 100%;
      width: 100%;
      height: auto;
      border-radius: 125px;
      border: solid 5px orange;
    }
  }
  .right{
    flex-basis: 70%;
  }
`


export default function Profile() {
  const { isLogged } = useContext(AuthContext);
  return (
    <Dash>
      <div className="left">
        <img src={isLogged.thumbnail} />
        <h1>Olá, {isLogged.username}</h1>
      </div>
      <div className="right">
        <h1>Meus Favoritos</h1>

      </div>
      
      
    </Dash>
  )
}