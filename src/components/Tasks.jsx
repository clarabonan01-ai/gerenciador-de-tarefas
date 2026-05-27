import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks({ tasks, onTaskClick, onSeeDetailsClick, onDeleteTaskClick }) {
  return (
    <ul className="space-y-4">
      {tasks.length === 0 ? (
        <p className="text-zinc-400 italic text-center mt-4">
          Nenhuma tarefa criada.
        </p>
      ) : (
        tasks.map((task) => (
          <li key={task.id} className="flex gap-2 items-center">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-white text-left w-full text-black font-medium p-3 rounded-lg shadow-sm hover:bg-gray-100 transition-all ${
                task.isCompleted ? "line-through text-zinc-400 bg-zinc-200" : ""
              }`}
            >
              {task.title}
            </button>

            <button
              onClick={() => onSeeDetailsClick(task)}
              className="bg-white text-zinc-700 hover:bg-gray-100 p-3 rounded-lg shadow-sm flex items-center justify-center transition-all min-w-[44px] min-h-[44px]"
            >
              <ChevronRightIcon size={20} />
            </button>

            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="bg-white text-zinc-700 hover:bg-red-50 hover:text-red-500 p-3 rounded-lg shadow-sm flex items-center justify-center transition-all min-w-[44px] min-h-[44px]"
            >
              <TrashIcon size={20} />
            </button>
          </li>
        ))
      )}
    </ul>
  );
}

export default Tasks;
