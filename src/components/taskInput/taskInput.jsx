import TaskList from "../taskList/taskList";
import styles from "./TaskInput.module.css"
import { useState } from "react"

const TaskInput = ({addTask}) => {

  const [taskTitle, setTaskTitle] = useState("")
 
  const handleInputChange = (e) => {
    setTaskTitle(e.target.value)
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if(taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle("");
    }
  };

  return (
    <div className={`box ${styles.element}`}>
        <h2 className={styles.title}>Ajoute ta prochaine tâche</h2>
        <form className={styles.container} onSubmit={handleAddTask}>
            <input type="text" className={styles.input} placeholder="Ecrire une tâche" onChange={handleInputChange} 
            value={taskTitle}/>
        <button className="button-primary" type="submit">
            Ajouter
        </button>
        </form>
    </div>
  )
}

export default TaskInput;
