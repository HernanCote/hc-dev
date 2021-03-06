import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  html {
    @media (max-width: 1700px) {
      font-size: 75%;
    }
  }
`;

export default GlobalStyle;
