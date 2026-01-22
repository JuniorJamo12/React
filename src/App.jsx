import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState(
     JSON.parse(localStorage.getItem("tasks")) || [
     
    {
      id: 1,
      title: "estudar Progrmacao",
      description: "estudar para se tornar full stack",
      isCompleted: false,
    },

    {
      id: 2,
      title: "estudar ingles",
      description: "estduar para ficar fluente",
      isCompleted: false,
    },

    {
      id: 3,
      title: "estudar estrutura de dados ",
      description: "para ficar bom a base de dados",
      isCompleted: false,
    },
  ]);

  useEffect (() => {localStorage.setItem("tasks" , JSON.stringify(tasks))} , [tasks])
  // vai ser executada a funcao sempre que tasks for modificado 

  useEffect (() => {
   async function fetchTasks() {
      // chamar a API
      const response = await fetch ('https://jsonplaceholder.typicode.com/todos?_limit=10' , {method:'GET'})  
      // convertendo a resposta para json 
       const data = await response.json()
       console.log(data)
       setTasks(data)
   }
 
     fetchTasks()
  } , [])
  // lista vazia faz com que so seja executado uma vez ( quando o user esntra na aplicacao pela 1st vez)

  function checkList(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      } else {
        return task;
      }
    });

    setTasks(newTasks);
  }

  function deleteTaskOnClick (taskId){

    const newTasks = tasks.filter((task) => task.id != taskId)
    setTasks(newTasks)   
    };

    // so para dar commit no github
  

    function AdicionarTarefa(title , description)
    {
      const newTask = {
          id : tasks.length + 1 , 
           title,
          description , isCompleted : false 
      }

      setTasks([...tasks , newTask])
    }  

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-2" >
        <h1 className="text-3xl text-slate-100 font-bold text-center p-3">
          gerenciador de tarefas
        </h1>
        <AddTask AdicionarTarefa = {AdicionarTarefa}  />
        <Tasks tasks={tasks} checkList = {checkList} deleteTaskOnClick = {deleteTaskOnClick}/>
        {/* prop tasks sendo igual a state tasks 
           DEPOIS PASSANDO UMA FUNCAO COMO PROP TAMBEM 
        */}

        <h2 className="das"></h2>
      </div>
    </div>
  );
}

export default App;
