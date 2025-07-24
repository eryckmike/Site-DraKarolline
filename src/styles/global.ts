import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    font-family: 'Source Serif Pro', serif;
  }

  html {
  scroll-behavior: smooth;
  overflow-x: hidden !important;
}


  body {
    overflow-x: hidden !important;
    background-color: #000; /* evita fundo branco por padrão */
    font-family: 'Source Serif Pro', serif;
  }
`
