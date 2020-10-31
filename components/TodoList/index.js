import styled from 'styled-components';

const List = styled.ul` 
  background-color: #000;
  color: #fff;
  font-size: 20px;
  li{
    line-height: 38px;
  }
`

const TodoList = () => (
  <List>
    <li>1</li>
    <li>2</li>
  </List>
)

export default TodoList