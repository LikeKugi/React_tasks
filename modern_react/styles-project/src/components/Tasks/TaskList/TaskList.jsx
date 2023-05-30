import React from "react";

import Task from "../Task/Task";
import styles from "./TaskList.module.css";

const TaskList = (props) => {
    console.log(styles);
    return (
        <ul className={styles["task-list"]}>
            {props.items.map((task) => (
                <Task key={task.id} id={task.id} onDelete={props.onDeleteTask}>
                    {task.text}
                </Task>
            ))}
        </ul>
    );
};

export default TaskList;
