import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/constants';

const Start = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="w-full max-w-lg m-auto flex justify-center items-center flex-col p-20 border-2 border-sky-200">
        <h1 className="text-black text-5xl">Start Quiz Game</h1>
        <Link
          className="text-white text-2xl p-5 bg-green-500 hover:bg-green-600 mt-10 rounded-md"
          to={ROUTES.QUESTIONS}
        >
          Start
        </Link>
      </div>
    </div>
  );
};

export default Start;
