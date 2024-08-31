# ToDo List Application

This project is a sleek and responsive ToDo List application built using React. The application allows users to add tasks, mark them as done or undone, and visually manage their to-do list with an intuitive interface. The project is styled for a modern, professional look, complete with animations that enhance user interaction.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Components Overview](#components-overview)
  - [ToDoPanel Component](#todopanel-component)
  - [Task Component](#task-component)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Add Tasks:** Users can easily add new tasks to their list.
- **Mark Tasks as Done/Undone:** Tasks can be marked as done, which visually updates the task's appearance.
- **Responsive Design:** The application is responsive and works well on various devices and screen sizes.
- **Smooth Animations:** Subtle animations provide a polished user experience.
- **Custom Styling:** Each task can have custom styles applied, enhancing flexibility in UI design.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

```bash
https://github.com/OmarSuarezDoro/TODO-react-simple.git
```

2. Navigate to the project directory:
```
cd todo-list-app
```

3. Install dependencies:

Make sure you have Node.js installed, then run:
```
npm install
```

4.Start the development server:
```
npm run dev
```

## Usage
Once the application is running:

1. Add a Task:
- Type your task into the input field.
- Click the "Add Task" button to add the task to the list.

2. Mark a Task as Done/Undone:
- Click on the task to mark it as done. The task will be crossed out and the background will change to a lighter color.
- Click on the task again to mark it as undone, reverting it to its original state.

3. Hover Over the Buttons:
- Hovering over the "Done/Undone" button changes the text to indicate the action that will be taken if the button is clicked.

## File Structure
Here is a basic overview of the project's file structure:

```arduino
.
├── README.md
├── dist
│   ├── assets
│   │   ├── index-ByO6hxaj.css
│   │   └── index-DpnNVLIF.js
│   ├── index.html
│   └── vite.svg
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── Components
│   │   ├── Task.css
│   │   ├── Task.tsx
│   │   ├── ToDoPanel.css
│   │   └── ToDoPanel.tsx
│   ├── assets
│   │   └── react.svg
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Components Overview
### a) ToDoPanel Component
The ToDoPanel component is the main panel where tasks are added and displayed. It manages the list of tasks and renders them dynamically based on user interaction.

**Key Features**:
- Manages the state of the task list.
- Handles the addition of new tasks.
- Renders tasks using the Task component.
- Includes responsive and interactive UI elements.


### b) Task Component
- The Task component represents an individual task. It allows the user to toggle between done and undone states and provides visual feedback for these states.

**Key Features**:
- Handles the state of each individual task (done/undone).
- Updates the appearance of the task based on its state.
- Provides animations and hover effects for an enhanced user experience.
