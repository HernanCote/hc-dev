const theme = {
  breakpoints: {
    md: 1024,
    lg: 1300,
  },
  zIndex: {
    header: 1000,
    footer: 1000,
    modal: 2000,
    sticky: 100,
  },
  fontSizes: {
    h1: '5rem',
    h2: '4rem',
    h3: '1rem',
    h4: '2rem',
    h5: '1.0625rem',
    normal: '0.9375rem',
    button: '0.8125rem',
    buttonSmall: '0.8125rem',
    small: '0.8125rem',
  },
  lineHeight: {
    h1: '2.666rem',
    h2: '2.55rem',
    normal: '1.171875rem',
    small: '1.3rem',
    sm: {
      h1: '3.56rem',
      h2: '3.05rem',
      normal: '1.25rem',
      small: '1.25rem',
    },
  },
  colors: {
    white: '#FFFFFF',
    whiteRgb: '255, 255, 255',
    blackened: '#1F1F1F',
    black: '#000000',
    blackRgb: '0, 0, 0',
    background: '#1b1b1b',
    backgroundRgb: '0, 15, 38',
    lightGray: '#CCC',
    hcGreen: '#0C4D35',
    shamrock: '#23d997',
    hcBlue: '#239FD9',
    hcLighterBlue: '#23BED9',
    shamrockRgb: '35, 217, 151',
    navBackground: '#2a2a2a',
  },
  heights: {
    footer: '12rem',
    navbar: '10vh',
    breakLine: '1.5rem',
  },
};

export default theme;
