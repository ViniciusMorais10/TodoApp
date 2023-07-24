import { useState } from "react"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {  

  const [task, setTask] = useState<ITask[]>([
    {
      id:'1',
      title:'Teste',
      isCompleted: false
    },
    {
      id:'2',
      title:'Outro Teste',
      isCompleted: true
    }
  ])

  function addNewTask(taskTitle: string){
    setTask([
      ...task,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function deleteTaskById(taskId: string){
    const newTasks = task.filter((task) => task.id !== taskId);

    setTask(newTasks);
  }

  function toogleTaskCompletedById(taskId: string){
    const newTasks = task.map( task => {
      if(task.id === taskId){
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    });
    setTask(newTasks)
  }

  return (
    <>
      <Header onAddTask={addNewTask} /> 
      <Tasks tasks={task} onDelete={deleteTaskById} onComplete={toogleTaskCompletedById} />              
    </>
  )
}

export default App
