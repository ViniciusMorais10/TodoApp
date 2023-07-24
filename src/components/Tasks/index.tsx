import { ITask } from '../../App'
import { ListEmpty } from '../ListEmpty';
import { Task } from '../Task'
import styles from './styles.module.css'

interface Props{
  tasks: ITask[];
  onDelete:(taskId:string) => void;
  onComplete:(taskId:string) => void;
}

export function Tasks({tasks, onDelete, onComplete}:Props){
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  return (    
      <div className={styles.content}>  

          <div className={styles.statusTask}>
            <strong className={styles.createdTasks}>
              Tarefas criadas <span>{tasksQuantity}</span>
            </strong>

            <strong className={styles.finishedTasks}>
              Concluídas <span>{completedTasks} de {tasksQuantity}</span>
            </strong>          
          </div>


          <div className={styles.listTasks}>    
            {tasks.map((task) => (
              <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete}/>
            ))} 

            {tasks.length <= 0 && (
              <ListEmpty />
            )}
          </div>
          
        </div>

  )
}