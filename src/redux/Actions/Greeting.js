import fetchGreetingData from '../../api/Api';

export const GET_GREETING = 'GET_GREETING';

export const getGreetings = () => async (dispatch) => {
  const greetings = await fetchGreetingData();
  dispatch({
    type: GET_GREETING,
    payload: greetings.greeting,
  });
};
