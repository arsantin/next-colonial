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

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", (url) => {
  NProgress.done();
});

Router.events.on("routeChangeError", (url) => {
  NProgress.done();
});

export default class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>GUIA DE ITAPOÁ</title>
          <link rel="stylesheet" href="./css/styles.css"></link>
          <link rel="stylesheet" href="https://unpkg.com/nprogress@0.2.0/nprogress.css"></link>


          <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Varela+Round&display=swap" rel="stylesheet"/>        </Head>
        <ThemeContextProvider>
          <AuthContextProvider>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </AuthContextProvider>
        </ThemeContextProvider>
      </>
    )
  }
}
