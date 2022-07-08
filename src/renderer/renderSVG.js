// Themes.
const { renderTheme } = require('./theme/awesomeCard');

// Layouts.
const renderHorizontal = require('./type/horizontalCard');
const renderVertical = require('./type/verticalCard');

const renderSVG = (data, type, theme) => {
  const { riddle, answer } = data;

  // If the theme exists in the list of themes, render the specific theme. Else, render the default theme.
  const color = renderTheme(theme);

  switch (type) {
    case 'vertical':
      return renderVertical({ riddle, answer, color });
    case 'horizontal':
      return renderHorizontal({ riddle, answer, color });
    default:
      return renderVertical({ riddle, answer, color });
  }
};

module.exports = renderSVG;
