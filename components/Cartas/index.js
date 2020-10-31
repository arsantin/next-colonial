import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { ThemeContext } from '../../context/ThemeContext'
import axios from 'axios';
import { useAlert } from 'react-alert'
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;


const Cards = styled.div`
  background: #f5f5f5;
  max-width: 280px;
  margin-bottom: 30px;
  padding: 20px;
  
`


const Cartas = (props) => {
  const alert = useAlert()

  function favoritar(_id) {
    console.log(_id)
    axios.get('/profile/perfil')
      .then(function (response) {        
        const dados = []        
        const favoritos = response.data.favoritos;
        const userId = JSON.stringify(response.data._id);
        const idFavoritar = JSON.stringify(_id);

        axios.post('/minha-conta/favorito', { userId: userId, favoritos: favoritos, idFavoritar: idFavoritar })
      .then(function (response) {        
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      }) 



      })
      .catch(function (error) {
        console.log(error)
      }) 
  }

return (
  <>
    <ThemeContext.Consumer>{(context) => {
      const { isLightTheme, light, dark } = context;
      const theme = isLightTheme ? light : dark;
      return (
        <>
          <Link href="/comercio/[url]" as={`/comercio/${props.cafe.url}`}>
            <a>

              <Card
                style={{ background: theme.ui, color: theme.syntax, width: '220px' }}
                cover={
                  <img
                    alt="example"
                    src={props.cafe.fotodestaque}
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  avatar={<Avatar src={"http://lorempixel.com/80/80"} />}
                  title={props.cafe.nome}
                  description={props.cafe._id}
                />
              </Card>
            </a>
          </Link>
          <button value={props.cafe._id} onClick={() => { favoritar(props.cafe._id) }}>favoritar</button>
        </>
      )
    }
    }
    </ThemeContext.Consumer>
  </>
)
}

export default Cartas