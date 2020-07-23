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
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;0,700;1,700&display=swap" rel="stylesheet"></link>
          
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
