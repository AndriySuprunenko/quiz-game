import { useContext } from 'react';

import { ScoreContext } from '../context/Context';

const Result = () => {
  const score = useContext(ScoreContext);

  return (
    <div className="py-7">
      <h1 className="text-3xl first:mt-0 mt-10 w-fit m-auto">
        <span className="mr-1">🎉</span>
        You have completed the quiz!
      </h1>
      <p>Yor result {score}</p>
    </div>
  );
};

export default Result;
