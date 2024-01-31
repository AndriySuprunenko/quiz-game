import { useState, useEffect } from 'react';

import jsonData from '../data.json';
import Question from '../components/Question';
import Button from '../components/Button';
import Loader from '../components/Loader';
import Result from '../pages/Result';

const Questions = () => {
  const [questions, setQuestions] = useState(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setQuestions(jsonData);
    }, 2000);
  }, []);

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  return (
    <div>
      {questions ? (
        <div className="flex flex-col justify-center items-center w-full m-auto p-14 h-screen">
          {questions[step] ? (
            <div className="py-7">
              <Question
                id={questions[step].id}
                question={questions[step].question}
                answers={questions[step].answers}
                rightAnswer={questions[step].rightAnswer}
              />
              <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 mt-20 justify-items-center p-3 rounded-lg">
                <Button
                  handleClick={handlePrev}
                  title="Prev"
                  className="bg-yellow-500 hover:bg-yellow-600"
                  disabled={step === 0 ? true : false}
                />
                <Button
                  handleClick={handleNext}
                  title="Next"
                  className="bg-green-500 hover:bg-green-600"
                />
              </div>
            </div>
          ) : (
            <Result />
          )}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Questions;
