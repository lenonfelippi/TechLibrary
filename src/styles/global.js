import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --border-color: #E7DFEF;
    --color-primary: #633585;
    --color-secondary: #9B6DBF;

    --default-text-color: #353535;
    --heading-color: #C3B6D3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto Slab', serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    color: var(--default-text-color);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  button {
    cursor: pointer;
    border: 0;
  }
`
