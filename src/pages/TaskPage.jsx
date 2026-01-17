import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate()
  return (
    <div className="bg-slate-500 p-6 w-screen h-screen">
      <div className="w-[500px] space-y-2">
        <div className="flex justify-center relative mb-6 ">
          <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0">
             <ChevronLeftIcon/>
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center p-3">
            Detalhes da tarefa
          </h1>
        </div>
        <div className="bg-slate-400 p-4 rounded-md shadow border">
          <p className="text-white text-xl font-bold ">{title}</p>
          <p className="text-white text-xl font-bold">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
