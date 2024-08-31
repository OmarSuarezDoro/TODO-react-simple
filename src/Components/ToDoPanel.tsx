import './ToDoPanel.css'
import Task from './Task';
import { useState } from 'react';

const tasks_start: string[] = [
  "Wash the dishes",
  "Exercise",
  "Read a book",
  "Write a report",
  "Clean the house",
  "Organize the desk",
  "Prepare a meal",
  "Study TypeScript",
  "Do the grocery shopping",
  "Walk the dog",
  "Call a friend",
  "Update the resume",
  "Check email",
  "Make a backup",
  "Plan the week",
  "Practice meditation",
  "Water the plants",
  "Watch a documentary",
  "Create a to-do list",
  "Organize the closet"
];

function handlePanelTasks(tasks_parameter: string[] | undefined) {
  const [tasks, setTasks] = useState<string[]>(tasks_parameter || []);
  
  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };
  
  const renderTasks = () => {
    return tasks.map((task, index) => (
      <Task key={index} text={task} style={{ width: '100%', height: '50px' }} />
    ));
  };
  
  return { tasks, addTask, renderTasks };
}


export default function ToDoPanel() {
  const { addTask, renderTasks } = handlePanelTasks(tasks_start);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      addTask(inputValue);
      setInputValue(''); 
    }
  };

  return (
    <div className="todo-panel">
      <div className="header-window">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <h1 className="title">TODO List!</h1>
      <div className="input-container">
        <input
          className="task-input"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your task..."
        />
        <button className="add-task-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <div className="tasks-container">
        {renderTasks()}
      </div>
    </div>
  );
}
