import { useState } from 'react';
import './App.css';
import { exercises } from './exercises';

function App() {
  const [current, setCurrent] = useState('ex1');

  const exercise = exercises.find((e) => e.id === current);
  const Content = exercise.Component;

  return (
    <div className="container-fluid py-3">
      <h2 className="mb-3">FER202 - Bài tập 1 đến 10</h2>

      <div className="row">
        <div className="col-12 col-md-3 mb-3">
          <div className="list-group">
            {exercises.map((e) => (
              <button
                key={e.id}
                type="button"
                className={
                  e.id === current
                    ? 'list-group-item list-group-item-action active'
                    : 'list-group-item list-group-item-action'
                }
                onClick={() => setCurrent(e.id)}
              >
                {e.label}
              </button>
            ))}
          </div>
        </div>

        <div className="col-12 col-md-9">
          {/* key de React tao lai component khi doi bai, khong giu state cu */}
          <Content key={exercise.id} />
        </div>
      </div>
    </div>
  );
}

export default App;
