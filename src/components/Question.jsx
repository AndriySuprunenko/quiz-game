import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const Question = ({ id, question, answers, rightAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionChange = (event) => {
    const correctAnswer = event === rightAnswer;

    setSelectedOption(event);
    setIsCorrect(correctAnswer);
  };

  return (
    <div className="py-7">
      <h1 className="text-3xl first:mt-0 mt-10 w-fit m-auto">
        <span className="mr-1">{id}.</span>
        {question}
      </h1>
      <div className="mt-6 grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
        {answers.map((answer, event) => (
          <Button
            id={answer.id}
            title={answer.title}
            key={answer.id}
            handleClick={() => handleOptionChange(event)}
          />
        ))}
        {selectedOption && (
          <div className="mt-6">
            <p className="text-2xl">{isCorrect ? 'Correct' : 'Incorrect'}</p>
          </div>
        )}
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
