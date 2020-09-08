import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Abas = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="+ COMÉRCIO" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="+ CATEGORIA" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);

export default Abas