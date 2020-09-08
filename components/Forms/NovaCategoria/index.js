import {useForm} from 'react-hook-form'
import axios from 'axios'


const NovaCategoria = () => {

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = values => {
    console.log("values", values);  
    axios.post('/apicategorias/nova-categoria', values)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });  
  }

  return(
    <>
<h2>NOVA CATEGORIA</h2>
  <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nome:</label>
    <input
        name="nome"
        ref={register({validate: value => value !== "admin" || "Nice try!"})}
      />
      {errors.nome && errors.nome.message}    

      <input
        name="url"
        ref={register({validate: value => value !== "admin" || "Nice try!"})}
      />
      {errors.url && errors.url.message}    

      <button type="submit">CADASTRAR</button>
    </form>
    </>
  )
}

export default NovaCategoria