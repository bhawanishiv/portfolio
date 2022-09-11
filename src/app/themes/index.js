const themes = {
  theme1: {
    mode: 'light',
    colors: {
      primary: '#b91d13',
      'on-primary': '#ffffff',
      'primary-container': '#ffdad5',
      'on-primary-container': '#410000',
      secondary: '#0361a3',
      'on-secondary': '#ffffff',
      'secondary-container': '#d1e4ff',
      'on-secondary-container': '#001d36',
      tertiary: '#705c2e',
      'on-tertiary': '#ffffff',
      'tertiary-container': '#fcdfa6',
      'on-tertiary-container': '#251a00',
      error: '#ba1a1a',
      'error-container': '#ffdad6',
      'on-error': '#ffffff',
      'on-error-container': '#410002',
      background: '#fffbff',
      'on-background': '#201a19',
      surface: '#fffbff',
      'on-surface': '#201a19',
      'surface-variant': '#f5ddda',
      'on-surface-variant': '#534341',
      outline: '#857370',
      'inverse-on-surface': '#fbeeec',
      'inverse-surface': '#362f2e',
      'inverse-primary': '#ffb4a8',
      shadow: '#000000',
      'surface-tint': '#b91d13',
      'surface-tint-color': '#b91d13',
    },
  },
  theme2: {
    mode: 'dark',
    colors: {
      primary: '#ffb4a8',
      'on-primary': '#690001',
      'primary-container': '#930001',
      'on-primary-container': '#ffdad5',
      secondary: '#9ecaff',
      'on-secondary': '#003258',
      'secondary-container': '#00497d',
      'on-secondary-container': '#d1e4ff',
      tertiary: '#dec38c',
      'on-tertiary': '#3e2e04',
      'tertiary-container': '#564419',
      'on-tertiary-container': '#fcdfa6',
      error: '#ffb4ab',
      'error-container': '#93000a',
      'on-error': '#690005',
      'on-error-container': '#ffdad6',
      background: '#201a19',
      'on-background': '#ede0de',
      surface: '#201a19',
      'on-surface': '#ede0de',
      'surface-variant': '#534341',
      'on-surface-variant': '#d8c2be',
      outline: '#a08c89',
      'inverse-on-surface': '#201a19',
      'inverse-surface': '#ede0de',
      'inverse-primary': '#b91d13',
      shadow: '#000000',
      'surface-tint': '#ffb4a8',
      'surface-tint-color': '#ffb4a8',
    },
  },
};

export const DEFAULT_THEME = 'theme2';

export const getThemeByThemeName = (themeName) =>
  // Return theme by theme name, if theme name doesn't exists then return default theme
  themes[themeName] || themes[DEFAULT_THEME];

export const createCSSVariable = (name, prefix = 'app-sys-color') =>
  `--${prefix}-${name}`;

export const getVariableValue = (variable, prefix = 'app-sys-color') =>
  `var(--${prefix}-${variable})`;

export default themes;
