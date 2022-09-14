import { GET_GREETING } from '../Actions/Greeting';

const GreetingsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_GREETING:
      return { value: action.payload };
    default:
      return state;
  }
};

export default GreetingsReducer;
