const maxWidthInPx = 1152;

const theme = {
  breakpoints: {
    xxs: 320,
    xs: 420,
    sm: 700,
    md: 1024,
    ml: maxWidthInPx,
    lg: 1440,
    xl: 1920,
    xxl: 2560,
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
    h3: '1.375rem',
    h4: '1.125rem',
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
  spacing: {
    xSmall: '0.8125rem', // 13px
    small: '0.875rem', // 14px
    base: '1rem', // 16px
    wide: '1.25rem', // 20px
    h5: '1.125rem', // 18px
    h4: '1.375rem', // 22px
    h3: '1.75rem', // 28px
    h2: '2.25rem', // 36px
    h1: '2.625rem', // 42px

    grid: '0.5rem',
    md: {
      grid: '1rem',
    },
    maxWidth: `${maxWidthInPx / 16}rem`,
    commonSpacing: '4rem',
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
    shamrock: '#23d997',
    shamrockRgb: '35, 217, 151',
  },
  grid: {
    itemsPadding: '1.25rem',
    itemWidth: '25.5rem',
  },
  heights: {
    footer: '12rem',
    navbar: '6rem',
    breakLine: '1.5rem',
  },
};

export default theme;
