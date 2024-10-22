// ce composant est utilisé pour afficher l'intégralité de la fonctionnalité ToDo
import Header from "./header/header"
import TaskInput from "./taskInput/taskInput"
import TaskList from "./taskList/taskList"
import Footer from "./footer/footer"
import { useState } from "react"

const TaskContainer = () => {

  const [tasksList, setTasksList] = useState([]);

  console.log("tasksList :", tasksList)

  const addTask = (title) => {
    const newTask = {
      id: tasksList.length ? tasksList[tasksList.length - 1].id + 1 : 1,
      title: title,
      completed: false,
    }
    setTasksList([...tasksList, newTask])
  }

  const editTask = (id, completedValue) => {
    setTasksList(
      tasksList.map((task) =>
        task.id === id ? { ...task, completed: completedValue } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasksList(tasksList.filter((task) => task.id !== id))
  }

  const getTaskCounts = () => {
    const completedTasks = tasksList.filter((task) => task.completed).length;
    const uncompletedTasks = tasksList.length - completedTasks;
    return { completedTasks, uncompletedTasks };
  } 

  const {completedTasks, uncompletedTasks} = getTaskCounts();
  console.log("completedTasks :", completedTasks);
  console.log("uncompletedTasks :", uncompletedTasks);
  

  return (
    <main>
        <Header />
        <TaskInput addTask={addTask} />
        <TaskList 
          tasksList={tasksList} editTask={editTask} deleteTask={deleteTask} uncompletedTasks={uncompletedTasks} completedTasks={completedTasks}
        />
        <Footer completedTasks={completedTasks} />
    </main>
  )
}

export default TaskContainer