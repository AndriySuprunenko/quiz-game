import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const Question = ({ id, question, answers, rightAnswer }) => {
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionChange = (event) => {
    const correctAnswer = event === rightAnswer;

    setIsCorrect(correctAnswer);
  };

  const buttonColor = isCorrect ? 'focus:bg-green-500' : 'focus:bg-red-500';

  // const disableButtons = isCorrect !== null;

  return (
    <div className="py-7">
      <h1 className="text-3xl first:mt-0 mt-10 w-fit m-auto">
        <span className="mr-1">{id}.</span>
        {question}
      </h1>
      <div className="mt-6 grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
        {answers.map((answer) => (
          <Button
            id={answer.id}
            title={answer.title}
            key={answer.id}
            handleClick={() => handleOptionChange(answer.id)}
            className={`${buttonColor}`}
          />
        ))}
      </div>
    </div>
  );
};

Question.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  rightAnswer: PropTypes.number.isRequired,
};

export default Question;
