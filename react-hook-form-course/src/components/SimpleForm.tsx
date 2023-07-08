import React, {JSX} from "react";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import ReactSelect from "react-select";
import {IOption, IShippingField} from "../types/app.interface";

const options: IOption[] = [{
  value: 'rus',
  label: 'Russia',
}, {
  value: 'kz',
  label: 'Kazakhstan',
}, {
  value: 'bel',
  label: 'Belarus',
}]

const getValue = (value: string) => value ? options.find((option) => option.value === value) : ''

const SimpleForm = (): JSX.Element => {
  const {register, handleSubmit, formState: {errors}, reset, control} = useForm<IShippingField>({
    defaultValues: {
      email: 'Erzhan-228@mail.ru'
    }, mode: 'onBlur'
  });

  const submitHandler: SubmitHandler<IShippingField> = (data) => {
    console.log(data);
    reset();
  }
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input type="text" {...register("name", {required: "Enter your name"})}
             placeholder={'Name: '}/>
      <input type="email" {...register("email", {
        required: "Please enter valid email",
        pattern: {
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          message: 'Enter valid email'
        }
      })}
             placeholder={'Email: '}/>
      <Controller control={control}
                  name={'address.country'}
                  rules={{
                    required: 'Country is required',
                  }}
                  render={({field: {onChange, value}, fieldState: {error},}) => (
                    <div>
                      <ReactSelect
                        placeholder={'Countries'}
                        options={options}
                        value={getValue(value)}
                        onChange={(newValue) => onChange((newValue as IOption).value)}
                      />
                      {error && <p style={{color: 'red'}}>{error.message}</p>}
                    </div>)}
      />

      <button>Send</button>
      {errors.name && <p style={{color: 'red'}}>{errors.name.message}</p>}
      {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}
    </form>
  );
}
export default SimpleForm;
