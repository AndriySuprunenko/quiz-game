import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import jsonData from '../data.json';
import Question from '../components/Question';
import Button from '../components/Button';
import Loader from '../components/Loader';
import { ROUTES } from '../constants/constants';
import { QuizContext } from '../context/QuizContext';

const Questions = () => {
  const navigate = useNavigate();
  const { increaseCorrectAnswersCount } = useContext(QuizContext);

  const [questions, setQuestions] = useState(null);
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setQuestions(jsonData);
    }, 2000);
  }, []);

  const handleOptionChange = (event) => {
    const correctAnswer = event === questions[step].rightAnswer;

    correctAnswer ? increaseCorrectAnswersCount() : null;
    setAnswer(correctAnswer);
  };

  const handleNext = () => {
    setStep(step + 1);
    setAnswer(null);
  };

  const handlePrev = () => {
    setAnswer(null);
    setStep(step - 1);
  };

  const isButtonDisabled = answer === null;

  return (
    <div>
      {questions ? (
        <div className="flex flex-col justify-center items-center w-full m-auto p-14 h-screen">
          {questions[step] ? (
            <div className="py-7">
              <Question
                id={questions[step]?.id}
                question={questions[step]?.question}
                answers={questions[step]?.answers}
                handleOptionChange={handleOptionChange}
                isCorrect={answer}
              />
              <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 mt-20 justify-items-center p-3 rounded-lg">
                <Button
                  handleClick={handlePrev}
                  title="Prev"
                  className="bg-yellow-500 hover:bg-yellow-600"
                  disabled={!step}
                />
                <Button
                  handleClick={handleNext}
                  title="Next"
                  className="bg-green-500 hover:bg-green-600"
                  disabled={isButtonDisabled}
                />
              </div>
            </div>
          ) : (
            navigate(ROUTES.RESULT)
          )}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Questions;
