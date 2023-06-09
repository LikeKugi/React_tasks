import {useState} from "react";
import styles from './TaskInput.module.css';
import Button from "../UI/Button/Button";

const TaskInput = (props) => {
    const [inputText, setInputText] = useState("");
    const [isInputValid, setIsInputValid] = useState(true);

    const taskInputChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsInputValid(true);
        }
        setInputText(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (inputText.trim().length === 0) {
            setIsInputValid(false);
            return;
        }
        setInputText('');
        props.onAddTask(inputText);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            {/* <FormControl className={!isInputValid && "invalid"}> */}
            {/* <FormControl invalid={!isInputValid}>
        <label>Задачи</label>
        <input type="text" onChange={taskInputChangeHandler} />
      </FormControl> */}
            <div
                className={`${styles["form-control"]} ${
                    !isInputValid && styles.invalid
                } `}
            >
                <label>Задачи</label>
                <input type="text" onChange={taskInputChangeHandler} value={inputText}/>
            </div>
            <Button type="submit">Добавить Задачу</Button>
        </form>
    );
}
export default TaskInput;