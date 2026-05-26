import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 flex flex-col w-full text-black">
      
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <textarea
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        rows={4}
        className="w-full bg-[#ffffff] text-zinc-800 placeholder-zinc-500 p-3 rounded-lg focus:outline-none font-sans resize-none"
      />

      <button
        className="bg-[#051F11] border border-[#0A361D] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#0a3d22] transition-all text-center mt-2 shadow-md"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Preencha o título e a descrição da tarefa");
            return;
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;