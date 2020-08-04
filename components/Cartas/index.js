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
              <Card
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={this.props.cafe.nome}
                  description="This is the description"
                />
              </Card>
            </>
          )}
        }     
      </ThemeContext.Consumer>
    </>
  )}
}

export default Cartas