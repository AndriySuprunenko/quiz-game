import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Questions from './pages/Questions';
import Start from './pages/Start';
import Result from './pages/Result';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="questions" element={<Questions />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
