import { List } from "./components/List/List"
import { Header } from "./components/Header"
// import { Empty } from "./components/List/Empty"
import { Input } from "./components/Input"


import "./global.css"
import styles from "./App.module.css"
import { InfoHeader } from "./components/List/InfoHeader"
import { Button } from "./components/Button"
import { useState } from "react"
import { Empty } from "./components/List/Empty"

export interface InfoTask {
  id: number;
  text: string;
  isChecked: boolean;
}



export function App() {
  const [tasks, setTask] = useState<InfoTask[]>([]);
  const [inputValue, setInputValue] = useState('');

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if(currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)


  function handleAddNewTask() {
    if (!inputValue) {
      return
    }

    const newTask: InfoTask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTask((state) => [...state, newTask])
    setInputValue('')
  }

  
  function handleCheckedTask({id, value}: { id: number; value: boolean } ) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id ) {
        return {...task, isChecked: value}
      }

      return {...task}
    })

    setTask(updatedTasks)
  }

  
  function handleDeleteTask(id: number){
    const filteredTask = tasks.filter((task) => task.id !== id)

    if(!confirm("Deseja realmente excluir essa tarefa?")) {
      return
    }

    setTask(filteredTask)
  }

  return (
    <div>
      <Header />

      <section className={styles.wrapper}>

        <div className={styles.newTaskContainer}>
          < Input
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
          />

          <Button
            onClick={handleAddNewTask}
          />
        </div>


        <InfoHeader 
          taskCounter={tasks.length}
          checkedTasksCounter={checkedTasksCounter}
        />

        <main>

        {
          tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <div>
                  <List 
                    key={task.id}
                    data={task}
                    toggleCheckedStatus={handleCheckedTask}
                    removeTask={handleDeleteTask}
                  />
                </div>
              ))}
            </div>
          ) : (
            <Empty />
          )
        }




        </main>
      </section>
    </div>
  )
}