import React, { useContext } from 'react';
import { Context } from '../App'; // Correct import

const ComponentcxtA = () => {
  const value = useContext(Context);

  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
};

export default ComponentcxtA;
