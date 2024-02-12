import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const QuizContext = createContext();

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
