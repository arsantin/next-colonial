import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
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
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return(
        <>           
        <Rodape style={{ background: theme.ui, color: theme.syntax }}>
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
