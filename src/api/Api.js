const fetchGreetingData = async () => {
  const response = await fetch('https://stark-anchorage-77653.herokuapp.com/api/greetings');
  const data = await response.json();
  return data;
};

export default fetchGreetingData;
