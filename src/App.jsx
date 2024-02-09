import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Questions from './pages/Questions';
import Start from './pages/Start';
import Result from './pages/Result';
import { ROUTES } from './constants/constants';
import { QuizProvider } from './context/QuizContext';

const App = () => {
  return (
    <Router>
      <QuizProvider>
        <Routes>
          <Route path={ROUTES.HOME} element={<Start />} />
          <Route path={ROUTES.QUESTIONS} element={<Questions />} />
          <Route path={ROUTES.RESULT} element={<Result />} />
        </Routes>
      </QuizProvider>
    </Router>
  );
};

export default App;
