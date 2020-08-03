import App from 'next/app'
import Head from 'next/head'
import React from 'react'


export default class MyApp extends App {
 
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>My new cool app</title>
          <link rel="stylesheet" href="./css/styles.css"></link>
          <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@100;400;800;900&display=swap" rel="stylesheet"/>
          
        </Head>

        <Component {...pageProps} />
      </>
    )
  }
}
