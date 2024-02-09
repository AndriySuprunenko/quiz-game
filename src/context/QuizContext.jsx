import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const increaseCorrectAnswersCount = () => {
    setCorrectAnswersCount((prevCount) => prevCount + 1);
  };

  return (
    <QuizContext.Provider
      value={{ correctAnswersCount, increaseCorrectAnswersCount }}
    >
      {children}
    </QuizContext.Provider>
  );
};

QuizProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
