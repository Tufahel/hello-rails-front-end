import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from '../redux/Actions/Greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(false);
  const greetings = useSelector((state) => state.GreetingsReducer);

  const handleClick = () => {
    dispatch(getGreetings());
    setIsShown(true);
  };
  return (
    <>
      <button
        key={1}
        type="submit"
        onClick={handleClick}
      >
        new greeting
      </button>
      {isShown && (
        <div>
          <p>Greeting : </p>
          <h3>
            {greetings.value}
          </h3>
        </div>
      )}
    </>
  );
};

export default Greeting;
