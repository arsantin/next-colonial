import React, { Component } from 'react';
import Link from 'next/link'
import { ThemeContext } from '../../context/ThemeContext'
import AuthContextProvider, { AuthContext } from '../../context/AuthContext'
import ThemeToggle from '../../components/ThemeToggle'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';



function Header() {
  return (
    <AuthContext.Consumer>{(authContext) => (
      <ThemeContext.Consumer>{(themeContext) => {
        const { isLogged } = authContext;
        const { isLightTheme, light, dark } = themeContext;
        const theme = isLightTheme ? light : dark;
        return (
          <header style={{ background: theme.ui, color: theme.syntax }}>
            <div className="logo"><Link href="/"><a><img src="./img/logo.jpg" alt="" /></a></Link></div>
            <p>GUIA DE ITAPOÁ</p>
            {isLogged ? <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /> : 'deslogado'}
            <ThemeToggle />
            
          </header>
        )
      }}
      </ThemeContext.Consumer>
    )}
    </AuthContext.Consumer>
  )
}

export default Header