// Define themes.
const themes = {
  light: {
    riddle: '333',
    answer: '2f80ed',
    background: 'fffefe',
    symbol: '4c71f2'
  },
  dark: {
    riddle: '9f9f9f',
    answer: 'fff',
    background: '151515',
    symbol: '79ff97'
  },
  'chartreuse-dark': {
    riddle: 'fff',
    answer: '7fff00',
    background: '000',
    symbol: '00AEFF'
  },
  radical: {
    riddle: 'a9fef7',
    answer: 'fe428e',
    background: '141321',
    symbol: 'f8d847'
  },
  merko: {
    riddle: '68b587',
    answer: 'abd200',
    background: '0a0f0b',
    symbol: 'b7d364'
  },
  gruvbox: {
    riddle: '8ec07c',
    answer: 'fabd2f',
    background: '282828',
    symbol: 'fe8019'
  },
  tokyonight: {
    riddle: '38bdae',
    answer: '70a5fd',
    background: '1a1b27',
    symbol: 'bf91f3'
  },
  catppuccin: {
    riddle: '96CDFB',
    answer: 'D9E0EE',
    background: '161320',
    symbol: 'DDB6F2'
  },
  algolia: {
    riddle: '00ADFE',
    answer: 'FEFEFE',
    background: '050F2C',
    symbol: '26BB85'
  },
  monokai: {
    riddle: 'EA1F6A',
    answer: 'CFCFC9',
    background: '272822',
    symbol: 'E18905'
  },
  dracula: {
    riddle: 'F8F8F2',
    answer: '6272A4',
    background: '282A36',
    symbol: 'FF79c6'
  }
};

const renderTheme = theme => {
  // Check if theme exists in the themes object.
  if (themes[theme]) {
    return themes[theme];
  }

  // Else, return the light theme.
  return themes.light;
};

module.exports = { renderTheme, themes };
