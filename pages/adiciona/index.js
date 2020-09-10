import { Tabs } from 'antd';
import NovoComercio from '../../components/Forms/NovoComercio'
import NovaCategoria from '../../components/forms/NovaCategoria'


const { TabPane } = Tabs;

const Adiciona = () => {


  return (
    <Tabs defaultActiveKey="1" centered>
      <TabPane tab="+ COMÉRCIO" key="1">
        <NovoComercio />
      </TabPane>
      <TabPane tab="+ CATEGORIA" key="2">
        <NovaCategoria />
      </TabPane>
      <TabPane tab="+ USUÁRIO" key="3">
        Content of Tab Pane 3
    </TabPane>
    </Tabs>
  );
}


export default Adiciona