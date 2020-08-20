import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import Contato from '../Contato'
import styled from 'styled-components'



const Rodape = styled.footer`
    height: 300px;
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;  
`


export default function Footer(){
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return(
        <>           
        <Rodape style={{ background: theme.ui, color: theme.syntax }}>
        <div className="middle">
        <h1>GUIA DE ITAPOÁ</h1>
        <Contato />

        </div>
    </Rodape>   
    </>
    )
} 
