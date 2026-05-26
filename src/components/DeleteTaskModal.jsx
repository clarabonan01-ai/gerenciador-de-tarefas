function DeleteTaskModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-[#1C120C] border border-[#0A361D] rounded-lg p-6 w-full max-w-sm text-center shadow-2xl">
        <h2 className="font-bold text-xl mb-6 text-white">
          Deseja apagar essa tarefa?
        </h2>

        <div className="flex gap-4 justify-center">
          <button
            onClick={onConfirm}
            className="bg-[#051F11] border border-red-900 text-red-400 font-bold py-2 px-6 rounded-lg hover:bg-red-950 transition-all"
          >
            Apagar
          </button>
          <button
            onClick={onCancel}
            className="bg-white text-black font-bold py-2 px-6 rounded-lg hover:bg-gray-200 transition-all"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteTaskModal;
