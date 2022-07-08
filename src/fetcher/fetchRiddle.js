const axios = require('axios').default;

async function fetchRiddle() {
  const response = await axios.get('https://riddles-api.vercel.app/random');
  const data = response.data;

  // Parse the data returned from the API.
  let parsedData = parseData(data);

  // Check if the riddle is less than 220 chars, if so, return the riddle.
  return parsedData.riddle.length < 220 ? parsedData : fetchRiddle();
}

const parseData = data => {
  return {
    riddle: data.riddle,
    answer: data.answer
  };
};

module.exports = fetchRiddle;
