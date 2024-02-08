import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Questions from './pages/Questions';
import Start from './pages/Start';
import Result from './pages/Result';
import { ROUTES } from './constants/constants';
import { ScoreContext } from './context/context.js';

const App = () => {
  return (
    <BrowserRouter>
      <ScoreContext.Provider>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path={ROUTES.QUESTIONS} element={<Questions />} />
          <Route path={ROUTES.RESULT} element={<Result />} />
        </Routes>
      </ScoreContext.Provider>
    </BrowserRouter>
  );
};

export default App;
