import styled from 'styled-components'
import backgroundHero from '../../assets/hero-site.jpeg'

// Container geral da página
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: 'Source Serif Pro', serif;
`

// Hero (parte da imagem com overlay)
export const Hero = styled.section`
  position: relative;
  background: url(${backgroundHero}) no-repeat center;
  background-size: cover;
  background-position: top center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1 5%;
  color: white;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(27, 20, 26, 0.55);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`

// Conteúdo de texto e botões dentro do Hero
export const Content = styled.div`
  max-width: 700px;
  width: 100%;
  text-align: left;
  margin-left: auto;
  margin-right: rem;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    line-height: 1.1;
  }

  p {
    font-size: 1.25rem;
    font-weight: 300;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.8);
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  /* Aplica a ambos, button e a */
  .filled, .outlined {
    padding: 0.75rem 1.5rem;
    min-width: 134px;          /* <-- garante que TODOS têm o mesmo tamanho mínimo */
    text-align: center;        /* centraliza o texto */
    text-decoration: none;     /* <-- tira o underline do <a> */
    border-radius: 13px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;

    display: inline-block;     /* garante que o <a> fique igual ao botão */
  }

  .filled {
    background-color: transparent;
    color: white;
    border: 2px solid white;

    &:hover {
      background-color: #f0f0f0;
      color: #403b42ff;
      text-decoration: none;
    }
  }

  .outlined {
    background: transparent;
    color: white;
    border: 2px solid white;

    &:hover {
      background: white;
      color: #403b42ff;
      text-decoration: none;
    }
  }
`


// Indicador de rolagem com seta e texto
export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  z-index: 2;
  font-weight: 600;
  cursor: pointer;
  user-select: none;

  .arrow-wrapper {
    animation: bounce 2s infinite;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arrow {
    width: 18px;
    height: 18px;
    border-left: 3px solid white;
    border-top: 3px solid white;
    transform: rotate(225deg);
  }

  span {
    margin-top: 1rem;
    font-size: 1rem;
    text-align: center;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }
`
