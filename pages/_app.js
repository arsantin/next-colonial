import App from 'next/app'
import Head from 'next/head'
import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import "antd/dist/antd.css";
import ThemeContextProvider from '../context/ThemeContext';
import AuthContextProvider from '../context/AuthContext'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import styled from 'styled-components'

Router.events.on("routeChangeStart", (url) => {
  console.log("inicio")
  NProgress.start();
});

Router.events.on("routeChangeComplete", (url) => {
  console.log("fim")
  NProgress.done();
});

Router.events.on("routeChangeError", (url) => {
  NProgress.done();
});

const MainWrapper = styled.div`  
  padding: 0px;  
  background-color: #fff;
`

const MyApp =(props)=>{
  const { Component, pageProps } = props

    // optional configuration
    const options = {
      // you can also just use 'bottom center'
      position: positions.BOTTOM_CENTER,
      timeout: 5000,
      offset: '30px',
      // you can also just use 'scale'
      transition: transitions.SCALE
    }

    return (
      <>
        <Head>
          <title>GUIA DE ITAPOÁ</title>        
          <link rel="stylesheet" href="./css/styles.css"></link>
          <link rel="stylesheet" href="https://unpkg.com/nprogress@0.2.0/nprogress.css"></link>
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />

          <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Varela+Round&display=swap" rel="stylesheet" />
        </Head>
        <AlertProvider template={AlertTemplate} {...options}>
       
          <ThemeContextProvider>
            <AuthContextProvider>
              <Header />
              <MainWrapper>
                <Component {...pageProps} />                
              </MainWrapper>
              <Footer />
            </AuthContextProvider>
          </ThemeContextProvider>
        
        </AlertProvider>
      </>
    )
}

export default MyApp