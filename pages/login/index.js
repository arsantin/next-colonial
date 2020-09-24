import { useForm } from "react-hook-form";
import axios from 'axios'

const Login = () => {
  const { handleSubmit, register, errors } = useForm();
  
  const onSubmit = values => {
    axios.post('/minha-conta/login', values)
    .then(function (response) {
      console.log("daaaaaaaaaaata", response.config.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <>
    <h2>Login do usuário</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      

      <input
        name="username"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.username && errors.username.message}

      <input
        name="password"
        ref={register({
          required: "Required"          
        })}
      />
      {errors.password && errors.password.message}

      <button type="submit">Submit</button>
    </form>
    <p></p>
    <hr />
    <p>ou</p>
    <a href="/minha-conta/google"><img src="./img/google-login.png"></img></a>
    </>
  );
};

export default Login