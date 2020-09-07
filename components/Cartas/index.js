import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { ThemeContext } from '../../context/ThemeContext'

import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;


const Cards = styled.div`
  background: #f5f5f5;
  max-width: 280px;
  margin-bottom: 30px;
  padding: 20px;
`


class Cartas extends Component {
  render() {
    return (
      <>
        <ThemeContext.Consumer>{(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <>
            <Link href="/comercio/[url]" as={`/comercio/cafe.url`}>
  <a>

              <Card
                style={{ background: theme.ui, color: theme.syntax, width: '220px' }}
                cover={
                  <img
                    alt="example"
                    src={`http://guiadeitapoa.com.br/assets/img/this.cafe.avatar.png`}
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  avatar={<Avatar src={`http://guiadeitapoa.com.br/assets/img/cafe.avatar.png`} />}
                  title={this.props.cafe.nome}
                  description="oi"
                />
              </Card>
              </a>
              </Link>
            </>
          )}
        }     
      </ThemeContext.Consumer>
    </>
  )}
}

export default Cartas