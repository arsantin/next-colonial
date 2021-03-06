import React from "react";
import { useForm } from "react-hook-form";

export default function Contato() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));

  return (
    <>
      <h2>contato</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input name="example" defaultValue="test" ref={register} />


        <input name="exampleRequired" ref={register({ required: true })} />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
  </>
        );
}