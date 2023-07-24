import { ITask } from '../../App';
import { Tasks } from '../Tasks';
import styles from './style.module.css';
import { TbTrash } from 'react-icons/tb'
import { BsFillCheckCircleFill } from 'react-icons/bs'

interface Props {
  task: ITask;
  onDelete: (taskId:string) => void;
  onComplete: (taskId: string) => void;
}
export function Task({task, onDelete, onComplete} : Props){
  const isCompleted = true;
  return (   

    <div className={styles.task}>
      <div className={styles.titleTask}>
        <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
          {task.isCompleted ? <BsFillCheckCircleFill /> : <div /> }
        </button>        
        <strong className={task.isCompleted ? styles.textIsCompleted : ""}>{task.title}</strong>
      </div>
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <TbTrash size={24} className={styles.iconDelete} />
      </button>
    </div>
    
  )
}