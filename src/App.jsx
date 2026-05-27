import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Tasks from "./components/Tasks";
import Title from "./components/Title";
import AddTaskModal from "./components/AddTaskModal"; 
import DeleteTaskModal from "./components/DeleteTaskModal";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  const [selectedTask, setSelectedTask] = useState(null);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);

    if (selectedTask && selectedTask.id === taskId) {
      setSelectedTask({
        ...selectedTask,
        isCompleted: !selectedTask.isCompleted,
      });
    }
  }

  function onSeeDetailsClick(task) {
    setSelectedTask(task);
  }

  function openDeleteModal(taskId) {
    setTaskToDelete(taskId);
    setIsDeleteModalOpen(true);
  }

  function confirmDeleteTask() {
    const newTasks = tasks.filter((task) => task.id !== taskToDelete);
    setTasks(newTasks);
    setIsDeleteModalOpen(false);
    setTaskToDelete(null);

    if (selectedTask?.id === taskToDelete) {
      setSelectedTask(null);
    }
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    setIsAddModalOpen(false);
  }

  return (
    <div className="w-screen min-h-screen bg-[#1C120C] flex flex-col p-6 text-white font-sans">
      <div className="flex justify-center mb-8 mt-4">
        <div className="bg-[#051F11] px-8 py-3 rounded-lg shadow-xl">
          <Title>Gerenciador de Tarefas</Title>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 max-w-7xl w-full mx-auto mb-4">
        <div className="bg-[#051F11] p-6 rounded-lg shadow-2xl flex flex-col justify-between h-full min-h-[500px]">
          <div className="flex-1">
            <h2 className="text-center font-bold text-2xl mb-6 text-white tracking-wide">
              Todas as Tarefas
            </h2>
            <Tasks
              tasks={tasks}
              onTaskClick={onTaskClick}
              onSeeDetailsClick={onSeeDetailsClick}
              onDeleteTaskClick={openDeleteModal}
            />
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="w-full bg-white text-black font-bold py-3 px-4 rounded-lg mt-6 hover:bg-gray-200 transition-all text-lg shadow-lg"
          >
            Adicionar Tarefa
          </button>
        </div>

        <div className="bg-[#051F11] p-6 rounded-lg shadow-2xl flex flex-col h-full min-h-[500px]">
          <h2 className="text-center font-bold text-2xl mb-6 text-white tracking-wide">
            Descrição da Tarefa
          </h2>

          <div className="bg-white text-black rounded-lg p-8 flex-1 flex flex-col justify-start shadow-inner">
            {selectedTask ? (
              <>
                <h3
                  className={`text-3xl font-bold mb-4 border-b pb-3 text-zinc-800 ${selectedTask.isCompleted ? "line-through text-zinc-400" : ""}`}
                >
                  {selectedTask.title}
                </h3>
                <p className="text-zinc-600 text-lg whitespace-pre-wrap leading-relaxed">
                  {selectedTask.description || "Nenhuma descrição fornecida."}
                </p>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-zinc-400 italic text-center text-lg">
                Clique na seta de uma tarefa para ver os detalhes aqui.
              </div>
            )}
          </div>
        </div>
      </div>

      <AddTaskModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddTaskSubmit={onAddTaskSubmit}
      />

      <DeleteTaskModal
        isOpen={isDeleteModalOpen}
        onConfirm={confirmDeleteTask}
        onCancel={() => setIsDeleteModalOpen(false)}
      />
    </div>
  );
}

export default App;
