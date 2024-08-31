import './Task.css';
import { useState } from 'react';

interface ITaskStructure {
  text : string;
  done? : boolean;
  style : React.CSSProperties;
}

function useTask(done : boolean) {
  const [actualState, setState] = useState(done);
  const changeState = () => setState(!actualState);
  const changeStylesEnter = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>)  => {
    e.currentTarget.textContent = actualState ? "Undone?" : "Done?";
  }
  const changeStylesLeave = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.currentTarget.textContent = actualState ? "Done" : "Undone";
  }
  return {actualState, changeState, changeStylesEnter, changeStylesLeave};
}

export default function Task({text, style, done = false} : ITaskStructure) {
  const handler = useTask(done);
  return (
    <div
      className={`task-container ${handler.actualState ? 'task-container-done' : ''}`}
      style={{ ...style, cursor: 'pointer' }}
      onClick={handler.changeState}
    >
      {handler.actualState ? <del>{text}</del> : <span>{text}</span>}
      <button
        className={handler.actualState ? 'done-button' : 'undone-button'}
        onClick={handler.changeState}
        onMouseEnter={handler.changeStylesEnter}
        onMouseLeave={handler.changeStylesLeave}
      >
        {handler.actualState ? 'Done' : 'Undone'}
      </button>
    </div>
  );
}