import React, {ChangeEvent, FC,  useState} from 'react';

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('');
  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setValue(e.target.value);
  }
  const clickHandler = (): void => {
    console.log(value)
  }
  return (
    <div>
      <p style={{height: 40}}>{value}</p>
      <input type="text" value={value} onChange={changeHandler}/>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default EventsExample;
