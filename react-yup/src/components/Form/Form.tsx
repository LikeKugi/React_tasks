import { FC, JSX } from 'react';
import Input from '../Input/Input';
import styles from './Form.module.scss';
import { Controller, useForm } from 'react-hook-form';

interface IFormProps {
  title: string;
}

interface IFormState {
  fullName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
}

const Form: FC<IFormProps> = ({ title }): JSX.Element => {

  const { handleSubmit, control } = useForm<IFormState>({
    defaultValues: {
      fullName: '',
      age: 0,
      confirmPassword: '',
      email: '',
      password: '',
    }
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
                               error=""
                               inputRef={ref}
                               placeholder={'Full Name...'} {...field}
                        />
                      )
                    }/>
        <Controller control={control}
                    name={'email'}
                    render={
                      ({ field: { ref, ...field } }) => (
                        <Input label="Email"
                               error=""
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
                             error=""
                             inputRef={ref}
                             placeholder={'Age...'}
                             type={'number'} {...field}/>)}/>

        <Controller control={control}
                    name={'password'}
                    render={({ field: { ref, ...field } }) => (
                      <Input label="Password"
                             inputRef={ref}
                             error=""
                             placeholder={'Password...'}
                             type={'password'}
                             {...field}/>
                    )}/>

        <Controller control={control}
                    name={'confirmPassword'}
                    render={({ field: { ref, ...field } }) => (
                      <Input label="Confirm Password"
                             inputRef={ref}
                             error=""
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
