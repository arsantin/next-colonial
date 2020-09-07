import {useForm} from 'react-hook-form'
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components'
import axios from 'axios'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Formulario = styled.div`
  padding-top: 200px;
`

const Adiciona = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log("values", values);  
    axios.post('/apicomercios/novo-comercio', {          
      "nome": "André Santin", 
      "avatar": "avatar",
      "fotoprincipal": "fotoprincipal",
      "fotos": ["fotos"],
      "textodestaque" : "textodestaque",
      "descricao": "descricao",
      "telefone": "telefone",
      "celular": "celular",
      "facebook" : "facebook",
      "instagram" : "instagram",
      "site" : "site",
      "horarios" : "horarios",
      "formasdepgto" : "formasdepgto",
      "endereco": "endereco",
      "cidade": "cidade",
      "url": "url",
      "geometry": {"type": "Point", "coordinates": [-30, 84.45]}
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });  
  }

  return(
  <Formulario>
    <h2>NOVO CADASTRO</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nome:</label>
    <input
        name="nome"
        ref={register({validate: value => value !== "admin" || "Nice try!"})}
      />
      {errors.nome && errors.nome.message}


    <label>Descrição:</label>
      <input
        name="descricao"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.descricao && errors.descricao.message}
      <label>Latitude:</label>
      <input
        name="lat"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.lat && errors.lat.message}
      <label>Longitude:</label>
      <input
        name="lon"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.lon && errors.lon.message}

      <button type="submit">CADASTRAR</button>
    </form>
  </Formulario>
  )
}

export default Adiciona

