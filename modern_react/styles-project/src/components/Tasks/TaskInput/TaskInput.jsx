import React, {useState} from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const FormControl = styled.div`

  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    ${props => props.invalid && 'color: rgb(243, 157, 157);'}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
    background: ${props => props.invalid ? 'rgba(243, 157, 157, 0.3)' : 'transparent'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #c8e1e4;
    border-color: #00358b;
  }
`

const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");
  const [isInputValid, setInputValid] = useState(true);

  const taskInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setInputValid(true);
    }
    setInputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputText.trim().length === 0) {
      setInputValid(false);
      return;
    }
    props.onAddTask(inputText);
  };

  return (
      <form onSubmit={formSubmitHandler}>
        <FormControl invalid={!isInputValid}>
          <p>{isInputValid.toString()}</p>
          <label>Задачи</label>
          <input type="text"
                 onChange={taskInputChangeHandler}/>
        </FormControl>
        <Button type="submit">Добавить Задачу</Button>
      </form>
  );
};

export default TaskInput;