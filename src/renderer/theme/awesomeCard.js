// Define themes.
const themes = {
  light: {
    riddle: '333',
    answer: '2f80ed',
    background: 'fffefe'
  },
  dark: {
    riddle: '9f9f9f',
    answer: 'fff',
    background: '151515'
  },
  'chartreuse-dark': {
    riddle: 'fff',
    answer: '7fff00',
    background: '000'
  },
  radical: {
    riddle: 'a9fef7',
    answer: 'fe428e',
    background: '141321'
  },
  merko: {
    riddle: '68b587',
    answer: 'abd200',
    background: '0a0f0b'
  },
  gruvbox: {
    riddle: '8ec07c',
    answer: 'fabd2f',
    background: '282828'
  },
  tokyonight: {
    riddle: '38bdae',
    answer: '70a5fd',
    background: '1a1b27'
  },
  catppuccin: {
    riddle: '96CDFB',
    answer: 'D9E0EE',
    background: '161320'
  },
  algolia: {
    riddle: '00ADFE',
    answer: 'FEFEFE',
    background: '050F2C'
  },
  monokai: {
    riddle: 'EA1F6A',
    answer: 'CFCFC9',
    background: '272822'
  },
  dracula: {
    riddle: 'F8F8F2',
    answer: '6272A4',
    background: '282A36'
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
