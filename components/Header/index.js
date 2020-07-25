import React, { Component } from 'react';
import Link from 'next/link'
import { ThemeContext } from '../../context/ThemeContext'


class Header extends Component{
  render(){
    return(
      <ThemeContext.Consumer>{(context)=>{
        console.log(context)
        const {isLightTheme, light, dark} = context;
        const theme = isLightTheme ? light : dark;
        return(
          <header style={{background: theme.ui, color: theme.syntax}}>
          <div className="logo"><Link href="/"><a><img src="./img/logo.png" alt=""/></a></Link></div>
          <p>Curitiba Colonial</p>
        </header>
      )
      }}
      </ThemeContext.Consumer>
    )
  }
}

export default Header