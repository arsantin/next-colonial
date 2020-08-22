import {Component} from 'react'
import { Modal, Button, Input, Tooltip } from 'antd';
import { KeyOutlined, UserOutlined } from '@ant-design/icons';


class ModalLogin extends Component {
  state = { 
    visible: false,
    value: '',
   };

   onChange = ({ target: { value } }) => {
    this.setState({ value });
  }; 

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Login
        </Button>
        <Modal
          title="Login"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input
      placeholder="Usuário"
      prefix={<UserOutlined className="site-form-item-icon" />}      
    />
     <Input
      placeholder="Usuário"
      prefix={<KeyOutlined className="site-form-item-icon" />}      
    />
        </Modal>
      </>
    );
  }
}

export default ModalLogin