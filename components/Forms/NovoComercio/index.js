import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import styled from 'styled-components'
import { useAlert } from 'react-alert'

const Formulario = styled.div`
  width: 100%;
  form{
    max-width: 500px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    .form-item{
      flex-basis: 100%;
    }
  }
`


const NovoComercio = () => {
  const alert = useAlert()
  const { handleSubmit, register, errors } = useForm();

  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect (() => {
      axios.get('/apicategorias')
    .then(function (r) {      
      setCategorias(r.data)
      setLoading(false);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
       
  }) 

  const onSubmit = values => {
    console.log("values", values);
    axios.post('/apicomercios/novo-comercio', values)
      .then(function (response) {
        console.log(response);
        alert.show('Cadastro realizado!')
      })
      .catch(function (error) {
        console.log(error);
        alert.show('Ops! Algo deu errado!!')
      });
  }


  return (
    <>
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-item">
      <label>Nome:</label>
      <input
        name="nome"
        ref={register({ validate: value => value !== "admin" || "Nice try!" })}
      />      
      {errors.nome && errors.nome.message}
    </div>
    <div className="form-item">
      <label>Avatar:</label>
      <input
        name="avatar"
        ref={register({ validate: value => value !== "admin" || "Nice try!" })}
      />
      </div>
      <div className="form-item">
      <label>Categoria</label>
      
      <select>
      if(categorias != []){
        categorias.map((opcao)=> {
        return <option name="categoria" key={opcao._id} value={opcao._id}>{opcao.nome}</option>
        })
      }
      </select>
      </div>
      <div className="form-item">
      <label>Descrição:</label>
      <input
        name="descricao"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.descricao && errors.descricao.message}
      </div>
      <div className="form-item">
      <label>Latitude:</label>
      <input
        name="lat"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.lat && errors.lat.message}
      </div>
      <div className="form-item">
      <label>Longitude:</label>
      <input
        name="lon"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.lon && errors.lon.message}
      </div>

      <button type="submit">CADASTRAR</button>
    </form>
    </>
  )
}

export default NovoComercio