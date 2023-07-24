import styles from './style.module.css';

import logo from '../../assets/Logo.svg';

import { IoMdAdd } from 'react-icons/io'
import { FormEvent, useState, ChangeEvent } from 'react';

interface Props {
  onAddTask: (taskTitle:string) => void;
}



export function Header({onAddTask}:Props){

  const[title, setTitle] = useState('');

  function handleAddTask(event: FormEvent){
    event.preventDefault();

    onAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>){
    setTitle(event.target.value);
  }


  return (
    <div>
      <div className={styles.header}>
        <img src={logo} alt="" />      
      </div>
      <form className={styles.inputTodo} onSubmit={handleAddTask}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeTitle}
          value={title}
          required
          />
        <button>
          Criar
          <IoMdAdd size={22} />
        </button>
      </form>
    </div>
        

    
  )
}