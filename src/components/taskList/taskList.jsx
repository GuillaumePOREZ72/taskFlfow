import styles from './TaskList.module.css'
import TaskItem from '../taskItem/taskItem'

const TaskList = ({
  tasksList,
  editTask,
  deleteTask,
  uncompletedTasks,
}) => {

  const taskList = tasksList.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      editTask={editTask}
      deleteTask={deleteTask}
    />
  ));

  if(taskList && taskList.length > 0) {
    return (
      <div className='box'>
        <h2 className={styles.title}>
            {uncompletedTasks > 0 && (
             <>
             Il te reste encore <span className="important">{uncompletedTasks}</span> tâches à accomplir
             </>
            )}

            {uncompletedTasks === 0 && (
              <>
              Génial, Tu n'as plus de tâches à accomplir !
              </>
            )}
        </h2>

        {tasksList && tasksList.length > 0 && (
          <ul className={styles.title}>
            {taskList}
          </ul>
            )}
      </div>
    ) 
  };
  return (
    <div className='box'>

        <h2 className={styles.emptyState}>
            Salut, tu n'as rien à faire ! Chill tranquille ;)
        </h2>
    </div>    
  )

}

export default TaskList;