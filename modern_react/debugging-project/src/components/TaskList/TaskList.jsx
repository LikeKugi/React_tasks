import Task from "../Tasks/Task";
import styles from './TaskList.module.css';

const TaskList = (props) => {
    return (
        <ul className={styles["task-list"]}>
            {props.items.map((task) => (
                <Task key={task.id} id={task.id} onDelete={props.onDeleteTask}>
                    {task.text}
                </Task>
            ))}
        </ul>
    );
}
export default TaskList;