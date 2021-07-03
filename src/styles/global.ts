import { lighten } from 'polished'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;

    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  #root {
    display: flex;
    justify-content: flex-start;

    width: 100%;
  }

  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => lighten(0.1, theme.primary.main)};
  }

  *, button, input, textarea {
    outline: 0;
    font: 14px "Roboto", sans-serif;
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  input, select, textarea {
    font-family: 'Roboto Mono', monospace;
  }

  ::placeholder, ::-ms-input-placeholder, :-ms-input-placeholder {
    font-family: "Roboto", sans-serif;
  }

  svg {
    color: ${({ theme }) => theme.text};
  }
`
