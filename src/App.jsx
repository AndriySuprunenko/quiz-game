import { useState, useEffect } from 'react';
import jsonData from './data.json';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <>
      <div className="wrapper">
        {data.map((item) => (
          <>
            <h1 className="title" key={item.id}>
              <span>{item.id}.</span>
              {item.question}
            </h1>
            <div className="answers">
              {item.answers.map((answer) => {
                return (
                  <button className="button" key={answer.id}>
                    <span>{answer.id}.</span>
                    {answer.title}
                  </button>
                );
              })}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default App;
