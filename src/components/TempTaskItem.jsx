import React from 'react';

// Componente temporal simulado para TaskItem
const TempTaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
  return (
    <div>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => onTaskComplete(task.id)}>Completar</button>
      <button onClick={() => onTaskDelete(task.id)}>Eliminar</button>
    </div>
  );
};

// Componente TaskList que utiliza el componente temporal simulado
const TaskList = ({ tasks, onTaskComplete, onTaskDelete }) => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      {tasks.map((task) => (
        <TempTaskItem
          key={task.id}
          task={task}
          onTaskComplete={onTaskComplete}
          onTaskDelete={onTaskDelete}
        />
      ))}
    </div>
  );
};

export default TempTaskItem;
