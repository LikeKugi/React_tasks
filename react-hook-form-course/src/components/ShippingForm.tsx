import React, {FC} from 'react';
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {IOption, IShippingField} from "../types/app.interface";
import ReactSelect from "react-select";

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

const getValue = (value: string) => value ? options.find((option) => option.value === value) : '';

const ShippingForm: FC = () => {
  const {register, handleSubmit, formState: {errors}, reset, control} = useForm<IShippingField>({
    defaultValues: {
      email: ''
    }, mode: 'onChange'
  });

  const submitHandler: SubmitHandler<IShippingField> = (data) => {
    reset();
  }
  return (
    <div className={'blacked'}>
      <h1>Enter your shipping info</h1>
      <form onSubmit={handleSubmit(submitHandler)} style={{width: '66%', margin: '0 auto'}}>
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
                        {error && <p style={{color: 'lightsalmon'}}>{error.message}</p>}
                      </div>)}
        />

        <button>Submit</button>

        {errors.name && <p style={{color: 'lightsalmon'}}>{errors.name.message}</p>}
        {errors.email && <p style={{color: 'lightsalmon'}}>{errors.email.message}</p>}
      </form>
    </div>
  );
};

export default ShippingForm;
