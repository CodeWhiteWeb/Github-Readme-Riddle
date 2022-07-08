const fetchRiddle = require('../src/fetcher/fetchRiddle');
const renderSVG = require('../src/renderer/renderSVG');

module.exports = async (req, res) => {
  // Get the queries.
  const { type, theme, myriddle } = req.query;

  // Get the riddles.
  let data;
  if (myriddle) {
    data = {
      riddle: myriddle,
      answer: 'Me'
    };
  } else {
    data = await fetchRiddle();
  }

  // Send the riddle image response.
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', `public, max-age=600`);
  res.send(renderSVG(data, type, theme));
};
