import React, {useState} from "react";

import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import TaskInput from "./components/TaskInput/TaskInput";

const App = () => {
  const [tasks, setTasks] = useState([
    {text: "Создание курса - 1 час", id: "t1"},
    {text: "Разминка 15 мин", id: "t2"},
    {text: "Создание курса - 1 час", id: "t3"},
  ]);

  const addTaskHandler = (inputText) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({text: inputText, id: `t${tasks.length+1}`});
      return updatedTasks;
    });
  };

  const deleteTaskHandler = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  let content = (
      <p style={{textAlign: "center"}}>Задач не найдено! Добавить?</p>
  );

  if (tasks.length > 0) {
    content = <TaskList items={tasks}
                        onDeleteTask={deleteTaskHandler}/>;
  }

  return (
      <>
        <section id="task-form">
          <TaskInput onAddTask={addTaskHandler}/>
        </section>
        <section id="tasks">{content}</section>

      </>
  );
};

export default App;
