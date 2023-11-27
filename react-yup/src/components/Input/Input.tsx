import { DetailedHTMLProps, FC, InputHTMLAttributes, JSX, LegacyRef, useId } from 'react';
import styles from './Input.module.scss';

interface IInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
  error?: string;
  inputRef?: LegacyRef<HTMLInputElement>;
}

const Input: FC<IInputProps> = ({ label, inputRef, error, ...props }): JSX.Element => {
  const inputId = useId();
  return (
    <div className={styles.box}>
      <div className={styles.box__text}><label className={styles.box__label}
                                               htmlFor={inputId}>{label}</label>{error &&
          <span className={styles.box__error}>{error}</span>}</div>
      <input className={styles.box__input}
             autoComplete=""
             ref={inputRef}
             id={inputId}
             type={'text'} {...props}/>
    </div>
  );
};
export default Input;
