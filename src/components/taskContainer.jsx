// ce composant est utilisé pour afficher l'intégralité de la fonctionnalité ToDo
import Header from "./header/header";
import TaskInput from "./taskInput/taskInput";
import TaskList from "./taskList/taskList";
import Footer from "./footer/footer";
import { useEffect, useState } from "react";

const TaskContainer = () => {
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasksList");
    if (storedTasks) {
      setTasksList(JSON.parse(storedTasks));
    }
  }, []);

  const saveTasksToLocaleStorage = (tasks) => {
    localStorage.setItem("tasksList", JSON.stringify(tasks));
  };

  const addTask = (title) => {
    const newTask = {
      id: tasksList.length ? tasksList[tasksList.length - 1].id + 1 : 1,
      title: title,
      completed: false,
    };
    setTasksList([...tasksList, newTask]);
    const updatedTasks = [...tasksList, newTask];
    setTasksList(updatedTasks);
    saveTasksToLocaleStorage(updatedTasks);
  };

  const editTask = (id, completedValue) => {
    const updatedTasks = tasksList.map((task) =>
      task.id === id ? { ...task, completed: completedValue } : task
    );
    setTasksList(updatedTasks);
    saveTasksToLocaleStorage(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasksList.filter((task) => task.id !== id)
    setTasksList(updatedTasks);
    saveTasksToLocaleStorage(updatedTasks);

  };

  const getTaskCounts = () => {
    const completedTasks = tasksList.filter((task) => task.completed).length;
    const uncompletedTasks = tasksList.length - completedTasks;
    return { completedTasks, uncompletedTasks };
  };

  const { completedTasks, uncompletedTasks } = getTaskCounts();
  console.log("completedTasks :", completedTasks);
  console.log("uncompletedTasks :", uncompletedTasks);

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <h1>{localStorage.getItem("username")}</h1>
      <TaskList
        tasksList={tasksList}
        editTask={editTask}
        deleteTask={deleteTask}
        uncompletedTasks={uncompletedTasks}
        completedTasks={completedTasks}
      />
      <Footer completedTasks={completedTasks} />
    </main>
  );
};

export default TaskContainer;
