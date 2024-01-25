import { useState, useEffect } from 'react';

import jsonData from '../data.json';
import Question from '../components/Question';
import Button from '../components/Button';
import Loader from '../components/Loader';

const Page = () => {
  const [questions, setQuestions] = useState(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    setQuestions(jsonData);
  }, []);

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  return (
    <div>
      {questions ? (
        <div className="flex flex-col justify-center items-center w-full m-auto p-14 bg-gray-400 h-screen">
          {questions[step] !== undefined ? (
            <div className="py-7">
              <Question key={questions[step].id} {...questions[step]} />
              <div className="grid grid-cols-2 gap-5 mt-20 justify-items-center border-x-2 border-sky-300 p-3 rounded-lg">
                {step >= 1 ? (
                  <Button
                    handleClick={handlePrev}
                    title="Prev"
                    className="bg-yellow-300 max-w-20"
                  />
                ) : (
                  <Button
                    handleClick={handlePrev}
                    title="Prev"
                    className="bg-gray-500 max-w-20 hover:bg-gray-500 cursor-not-allowed active:bg-gray-500"
                    disabled={true}
                  />
                )}
                <Button
                  handleClick={handleNext}
                  title="Next"
                  className="bg-green-300 max-w-20"
                />
              </div>
            </div>
          ) : (
            <div className="py-7">
              <h1 className="text-3xl first:mt-0 mt-10 w-fit m-auto">
                <span className="mr-1">🎉</span>
                You have completed the quiz!
              </h1>
            </div>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Page;
