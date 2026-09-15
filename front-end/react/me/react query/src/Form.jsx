import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";


async function createData() {
  console.log(`create data`);
  return null;
}


function Form() {
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues : {
      name: `sultan`,
      id: `2231413`
    }
  });
  const {errors} = formState
  
  const queryClint = useQueryClient();

  const { isSuccess, mutate } = useMutation({
    mutationFn: createData,
    onSuccess: () => {
        queryClint.invalidateQueries({
            queryKey:[`user`]
        })
        reset()
    }
  });

  function onSubmit(data) {
    mutate(data);
  }

  function onError(errors) {
    // console.log(errors);
  }


  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <p>your name:</p>
      <input
        type="text"
        name="name"
        placeholder="Your full name"
        {...register(`name`, {
          required: `this field is required`
        })}
      />

      <p>your id:</p>
      <input
        type="text"
        name="id"
        placeholder="Your full id"
        {...register(`id`, {
          required: `this field is required`,
          validate : (value) => value !== getValues().name || `the id is not name`
        })}
      />

      <button>SUBMIT</button>
    </form>
  );
}

export default Form;
