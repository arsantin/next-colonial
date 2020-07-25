import React, {Component} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {ThemeContext} from '../../context/ThemeContext'

const Cards = styled.div`
  background: #f5f5f5;
  max-width: 280px;
  margin-bottom: 30px;
  padding: 20px;
`


class Card extends Component{
	render(){
		return(
			<ThemeContext.Consumer>{(context) => {
				const {isLightTheme, light, dark} = context;
        const theme = isLightTheme ? light : dark;
				return(
					<Cards key={this.props.cafe._id} className="card" style={{background: theme.ui, color: theme.syntax}}>
          <Link href="/cafes-coloniais/[url]" as={`/cafes-coloniais/${this.props.cafe.url}`}><a>
          <img src="http://lorempixel.com/280/120/sports/" alt=""/>
          <h2>{this.props.cafe.nome}</h2>
          <p>{this.props.cafe.endereco}</p>          
          </a>
          </Link>
        </Cards>
				)
			}}
			
				</ThemeContext.Consumer>
		)
	}
}

export default Card