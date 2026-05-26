// ADICIONA ESTA LINHA AQUI EM CIMA:
import AddTask from "./AddTask";

function AddTaskModal({ isOpen, onClose, onAddTaskSubmit }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1C120C] border border-[#0A361D] rounded-lg p-6 w-full max-w-md relative shadow-2xl">
        {/* Botão de Fechar (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-all text-xl"
        >
          ✕
        </button>

        <h2 className="text-center font-bold text-3xl mb-6 text-white">
          Adicione uma tarefa
        </h2>

        {/* Chamamos o componente de formulário que já temos */}
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
      </div>
    </div>
  );
}

export default AddTaskModal;
