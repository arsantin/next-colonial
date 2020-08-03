import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Header from '../components/Header'
import { Grommet } from 'grommet';
import ThemeToggle from '../components/ThemeToggle'
import AuthToggle from '../components/AuthToggle'
import Favoritos from '../components/Favoritos'
import ThemeContextProvider from '../context/ThemeContext'
import AuthContextProvider from '../context/AuthContext'
import Card from '../components/Card'
import Menu from '../components/Menu'
import Cafes from './index'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {...initialProps, styles: ( <>{initialProps.styles} {sheet.getStyleElement()}</>),}
      
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html>
        <Head />
        <body>
        <ThemeContextProvider>
        <Grommet plain></Grommet>
          <Header/>
          <Main />
          <ThemeToggle/>
      <AuthToggle/>
      <Favoritos/>
      {this.props.cafes.map((cafe) => (
        <Card cafe={cafe}/>        
      ))}
          <NextScript />
          </ThemeContextProvider>
        </body>
      </Html>
    )
  }
}