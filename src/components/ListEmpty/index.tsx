import styles from './styles.module.css'
import { FaTasks } from 'react-icons/fa';

export function ListEmpty(){

  return (
    <div className={styles.content}>
      <FaTasks size={45} className={styles.icon} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}