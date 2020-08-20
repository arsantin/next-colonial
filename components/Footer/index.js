import React from 'react'
import styled from 'styled-components'

const Rodape = styled.footer`
    height: 220px;
    background-color: red;
    width: 100%;
    display: flex;
    justify-content: center;
    .middle{
        background-color: #333;
    }
`


export default function Footer(){
    return(
        <>
    <Rodape>
        <div className="middle">
        <ul>
            <li>link 1</li>
            <li>link 1</li>
            <li>link 1</li>
            <li>link 1</li>
            <li>link 1</li>
        </ul>
        </div>
    </Rodape>
    </>
    )
} 
