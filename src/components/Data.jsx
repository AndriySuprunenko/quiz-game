import { useState, useEffect } from 'react';

import jsonData from '../data.json';
import Button from './Button';

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  console.log('data', data[1]);
  return (
    <div className="flex flex-col justify-center items-center w-full m-auto p-14">
      {data?.map((item) => (
        <div key={item.id} className="py-7">
          <h1 className="text-3xl first:mt-0 mt-10 w-fit m-auto">
            <span className="mr-1">{item.id}.</span>
            {item.question}
          </h1>
          <div className="mt-6 grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
            {item.answers.map((answer) => {
              const { id, title } = answer;
              return <Button id={id} title={title} key={id} />;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Data;
