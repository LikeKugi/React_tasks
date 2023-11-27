import { FC, JSX } from 'react';
import Input from '../Input/Input';
import styles from './Form.module.scss';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { number, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface IFormProps {
  title: string;
}

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const personSchema = yup.object({
  fullName: string().matches(/^[A-Z]/).required('Name is required'),
  age: number().moreThan(0, 'Must be positive number').required('Age is required').integer(),
  email: string().email().required('Email is required'),
  password: string().required('Password is required').matches(passwordRules, 'Must be STRONG'),
  confirmPassword: string().oneOf([yup.ref('password'), ''], 'Passwords must match').required('Confirm Password is required')
});

interface IFormState extends yup.InferType<typeof personSchema> {
  fullName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
}

const Form: FC<IFormProps> = ({ title }): JSX.Element => {

  const { handleSubmit, control, formState: {errors} } = useForm<IFormState>({
    resolver: yupResolver(personSchema),
    defaultValues: {
      fullName: '',
      email: '',
      age: 0,
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  const submitHandler = (data: IFormState) => {
    console.log(data);
  };

  return (
    <div className={styles.box}>

      <h2 className={styles.box__title}>{title}</h2>

      <form className={styles.box__form}
            onSubmit={handleSubmit(submitHandler)}>
        <Controller control={control}
                    name={'fullName'}
                    render={
                      ({ field: { ref, ...field } }) => (
                        <Input label="Full name"
                               error={errors.fullName?.message}
                               inputRef={ref}
                               placeholder={'Full Name...'}
                               {...field}/>
                      )
                    }/>
        <Controller control={control}
                    name={'email'}
                    render={
                      ({ field: { ref, ...field } }) => (
                        <Input label="Email"
                               error={errors.email?.message}
                               inputRef={ref}
                               placeholder={'Email...'}
                               type={'email'}
                               {...field}/>
                      )
                    }/>
        <Controller control={control}
                    name={'age'}
                    render={({ field: { ref, ...field } }) => (
                      <Input label="Age"
                             error={errors.age?.message}
                             inputRef={ref}
                             placeholder={'Age...'}
                             type={'number'}
                             {...field}/>
                    )
                    }/>

        <Controller control={control}
                    name={'password'}
                    render={({ field: { ref, ...field } }) => (
                      <Input label="Password"
                             inputRef={ref}
                             error={errors.password?.message}
                             placeholder={'Password...'}
                             type={'password'}
                             {...field}/>
                    )}/>

        <Controller control={control}
                    name={'confirmPassword'}
                    render={({ field: { ref, ...field } }) => (
                      <Input label="Confirm Password"
                             inputRef={ref}
                             error={errors.confirmPassword?.message}
                             placeholder={'Confirm Password...'}
                             type={'password'}
                             {...field}/>
                    )}/>

        <button className={styles.box__button}>Submit</button>
      </form>

    </div>

  );
};
export default Form;
