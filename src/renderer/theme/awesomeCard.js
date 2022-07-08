// Define themes.
const themes = {
  light: {
    riddle: "2f80ed",
    answer: "434d58",
    background: "fffefe",
  },
  dark: {
    riddle: "fff",
    answer: "9f9f9f",
    background: "151515",
  },
  radical: {
    riddle: "fe428e",
    answer: "a9fef7",
    background: "141321",
  },
  merko: {
    riddle: "abd200",
    answer: "68b587",
    background: "0a0f0b",
  },
  gruvbox: {
    riddle: "fabd2f",
    answer: "8ec07c",
    background: "282828",
  },
  gruvbox_light: {
    riddle: "b57614",
    answer: "427b58",
    background: "fbf1c7",
  },
  tokyonight: {
    riddle: "70a5fd",
    answer: "38bdae",
    background: "1a1b27",
  },
  onedark: {
    riddle: "e4bf7a",
    answer: "df6d74",
    background: "282c34",
  },
  cobalt: {
    riddle: "e683d9",
    answer: "75eeb2",
    background: "193549",
  },
  synthwave: {
    riddle: "e2e9ec",
    answer: "e5289e",
    background: "2b213a",
  },
  highcontrast: {
    riddle: "e7f216",
    answer: "fff",
    background: "000",
  },
  dracula: {
    riddle: "ff6e96",
    answer: "f8f8f2",
    background: "282a36",
  },
  prussian: {
    riddle: "bddfff",
    answer: "6e93b5",
    background: "172f45",
  },
  monokai: {
    riddle: "eb1f6a",
    answer: "f1f1eb",
    background: "272822",
  },
  vue: {
    riddle: "41b883",
    answer: "273849",
    background: "fffefe",
  },
  "vue-dark": {
    riddle: "41b883",
    answer: "fffefe",
    background: "273849",
  },
  "shades-of-purple": {
    riddle: "fad000",
    answer: "a599e9",
    background: "2d2b55",
  },
  nightowl: {
    riddle: "c792ea",
    answer: "7fdbca",
    background: "011627",
  },
  buefy: {
    riddle: "7957d5",
    answer: "363636",
    background: "ffffff",
  },
  "blue-green": {
    riddle: "2f97c1",
    answer: "0cf574",
    background: "040f0f",
  },
  algolia: {
    riddle: "00AEFF",
    answer: "FFFFFF",
    background: "050F2C",
  },
  "great-gatsby": {
    riddle: "ffa726",
    answer: "ffd95b",
    background: "000000",
  },
  darcula: {
    riddle: "BA5F17",
    answer: "BEBEBE",
    background: "242424",
  },
  bear: {
    riddle: "e03c8a",
    answer: "bcb28d",
    background: "1f2023",
  },
  "solarized-dark": {
    riddle: "268bd2",
    answer: "859900",
    background: "002b36",
  },
  "solarized-light": {
    riddle: "268bd2",
    answer: "859900",
    background: "fdf6e3",
  },
  "chartreuse-dark": {
    riddle: "7fff00",
    answer: "fff",
    background: "000",
  },
  nord: {
    riddle: "81a1c1",
    answer: "d8dee9",
    background: "2e3440",
  },
  gotham: {
    riddle: "2aa889",
    answer: "99d1ce",
    background: "0c1014",
  },
  "material-palenight": {
    riddle: "c792ea",
    answer: "a6accd",
    background: "292d3e",
  },
  graywhite: {
    riddle: "24292e",
    answer: "24292e",
    background: "ffffff",
  },
  "vision-friendly-dark": {
    riddle: "ffb000",
    answer: "ffffff",
    background: "000000",
  },
  "ayu-mirage": {
    riddle: "f4cd7c",
    answer: "c7c8c2",
    background: "1f2430",
  },
  "midnight-purple": {
    riddle: "9745f5",
    answer: "ffffff",
    background: "000000",
  },
  calm: {
    riddle: "e07a5f",
    answer: "ebcfb2",
    background: "373f51",
  },
  "flag-india": {
    riddle: "ff8f1c",
    answer: "509E2F",
    background: "ffffff",
  },
  omni: {
    riddle: "FF79C6",
    answer: "E1E1E6",
    background: "191622",
  },
  react: {
    riddle: "61dafb",
    answer: "ffffff",
    background: "20232a",
  },
  jolly: {
    riddle: "ff64da",
    answer: "ffffff",
    background: "291B3E",
  },
  maroongold: {
    riddle: "F7EF8A",
    answer: "E0AA3E",
    background: "260000",
  },
  yeblu: {
    riddle: "ffff00",
    answer: "ffffff",
    background: "002046",
  },
  blueberry: {
    riddle: "82aaff",
    answer: "27e8a7",
    background: "242938",
  },
  slateorange: {
    riddle: "faa627",
    answer: "ffffff",
    background: "36393f",
  },
  kacho_ga: {
    riddle: "bf4a3f",
    answer: "d9c8a9",
    background: "402b23",
  },
  outrun: {
    riddle: "ffcc00",
    answer: "8080ff",
    background: "141439",
  },
  ocean_dark: {
    riddle: "8957B2",
    answer: "92D534",
    background: "151A28",
  },
  city_lights: {
    riddle: "5D8CB3",
    answer: "718CA1",
    background: "1D252C",
  },
  github_dark: {
    riddle: "58A6FF",
    answer: "C3D1D9",
    background: "0D1117",
  },
  discord_old_blurple: {
    riddle: "7289DA",
    answer: "FFFFFF",
    background: "2C2F33",
  },
  aura_dark: {
    riddle: "ff7372",
    answer: "dbdbdb",
    background: "252334",
  },
  panda: {
    riddle: "19f9d899",
    answer: "FF75B5",
    background: "31353a",
  },
  noctis_minimus: {
    riddle: "d3b692",
    answer: "c5cdd3",
    background: "1b2932",
  },
  cobalt2: {
    riddle: "ffc600",
    answer: "0088ff",
    background: "193549",
  },
  swift: {
    riddle: "000000",
    answer: "000000",
    background: "f7f7f7",
  },
  aura: {
    riddle: "a277ff",
    answer: "61ffca",
    background: "15141b",
  },
  apprentice: {
    riddle: "ffffff",
    answer: "bcbcbc",
    background: "262626",
  },
  moltack: {
    riddle: "86092C",
    answer: "574038",
    background: "F5E1C0",
  },
  codeSTACKr: {
    riddle: "ff652f",
    answer: "ffffff",
    background: "09131B",
  },
  "rose_pine":{
    riddle: "9ccfd8",
    answer: "e0def4",
    background: "191724",
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
