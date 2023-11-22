import React, { useState } from 'react';
import TaskList from './components/TaskList';

function App() {
  // Estado inicial de las tareas utilizando el hook useState
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Tarea 1', completed: false },
    { id: 2, text: 'Tarea 2', completed: true },
  ]);

  // Función para manejar el evento de marcar una tarea como completada
  const handleTaskComplete = (taskId) => {
    // Implementa la lógica para marcar la tarea como completada
    // Puedes utilizar setTasks para actualizar el estado de las tareas
  };

  // Función para manejar el evento de eliminar una tarea
  const handleTaskDelete = (taskId) => {
    // Implementa la lógica para eliminar la tarea
    // Puedes utilizar setTasks para actualizar el estado de las tareas
  };

  // Devuelve el JSX que es la estructura del componente
  return (
    <div>
      <h1>Mi Aplicación de Tareas</h1>
      <TaskList
        tasks={tasks} // Pasa lista de tareas al componente TaskList
        onTaskComplete={handleTaskComplete} // Pasa función de completar tareas
        onTaskDelete={handleTaskDelete} // Pasa la función de eliminar tareas
      />
    </div>
  );
}
export default App;
