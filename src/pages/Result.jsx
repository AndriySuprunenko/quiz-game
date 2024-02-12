import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const Result = () => {
  const { correctAnswersCount } = useContext(QuizContext);
  return (
    <div className="py-7 h-screen flex items-center flex-col justify-center">
      <h1 className="text-3xl first:mt-0 mt-10 w-fit">
        <span className="mr-1">🎉</span>
        You have completed the quiz!
      </h1>
      <p className="text-2xl first:mt-0 mt-10 w-fit">
        Yor result {correctAnswersCount} correct answers!
      </p>
    </div>
  );
};

export default Result;
