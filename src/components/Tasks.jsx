import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Tasks(props) {
  // console.log(props);
  const navigate = useNavigate();

  function seeDetails(task) {
    const querry = new URLSearchParams()
    querry.set("title" , task.title)
    querry.set("description" , task.description)
    navigate(`/task?${querry.toString()}`);
  }

  return (
    <ul className="space-y-4 p-3 shadow bg-slate-200 rounded-md ">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.checkList(task.id)}
            className={`bg-slate-400 text-left text-white p-2 rounded-md w-full space-y-4b `}
          >
            {task.title}
            {/* {task.isCompleted ? "COMPLETED" : "INCOMPLETED"} */}
          </button>

          <button
            onClick={() => seeDetails(task)}
            className="bg-red-400 p-2 text-white rounded-md b"
          >
            <ChevronRightIcon />
          </button>

          <button
            onClick={() => props.deleteTaskOnClick(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
