import { useState } from "react";

function App() {
  const [todoList, setToDoList] = useState([]);
  const [newTask, SetNewTask] = useState("");

  const handleChange = (event) => {
    SetNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() === "") return; 
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setToDoList([...todoList, task]);
    SetNewTask(""); 
  };

  const deleteTask = (id) => {
    setToDoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-start py-10 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">
          🌸 Todo List
        </h1>

        {}
        <div className="flex gap-2 mb-6">
          <input
            value={newTask}
            onChange={handleChange}
            placeholder="Enter a new task..."
            className="flex-grow px-4 py-2 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-pink-100 text-gray-700"
          />
          <button
            onClick={addTask}
            className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-xl font-semibold transition shadow"
          >
            Add
          </button>
        </div>

        {}
        <div className="flex flex-col gap-4">
          {todoList.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center bg-pink-100 px-4 py-3 rounded-xl shadow"
            >
              <p className="text-pink-800 font-medium break-words flex-1">
                {task.taskName}
              </p>
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-pink-300 hover:bg-pink-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-sm"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
