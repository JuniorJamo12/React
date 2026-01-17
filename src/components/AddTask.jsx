// import { Plus } from "lucide-react";
import { useState } from "react";

function AddTask({ AdicionarTarefa }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-slate-200 p-6 rounded-md space-y-4 shadow flex flex-col">
      <input
        type="text"
        id="in"
        value={title}
        placeholder="digite o titulo da tarefa "
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        id="in"
        value={description}
        placeholder="descricao da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            
            return alert("preencha os campos");
          } else {
            AdicionarTarefa(title, description);
            setTitle("");
            setDescription("");
          }
        }}
        className="bg-slate-500 px-4 py-4 text-white rounded-md shadow font-medium"
      >
        {/* <Plus/> */}
        adicionar
      </button>
    </div>
  );
}

export default AddTask;
