import { Tabs } from 'antd';
import styled from 'styled-components'
import NovoComercio from '../../components/Forms/NovoComercio'
import NovaCategoria from '../../components/forms/NovaCategoria'


const { TabPane } = Tabs;

const Wrapper = styled.div`
  padding-top: 200px;
`

const Adiciona = () => {
  
  
  return(<Wrapper>
  <Tabs defaultActiveKey="1" centered>
    <TabPane tab="+ COMÉRCIO" key="1">
    <NovoComercio/>
    </TabPane>
    <TabPane tab="+ CATEGORIA" key="2">
      <NovaCategoria/>
    </TabPane>
    <TabPane tab="+ USUÁRIO" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs></Wrapper>
);
}


export default Adiciona