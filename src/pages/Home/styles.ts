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

  @media (max-width: 600px) {
    margin: 0;
    padding: 0;
    width: 100%;
    min-width: 0;
    overflow-x: hidden;
  }
`

// Hero (parte da imagem com overlay)
export const Hero = styled.section`
  position: relative;
  background: url(${backgroundHero}) no-repeat center;
  background-size: cover;
  background-position: top center;
  width: 100vw ;
  min-height: 100vh;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 5rem 5% 2rem 5%;
  z-index: 1;
  
  
  @media (max-width: 600px) {
  background-size: cover;
}

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

    @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 5rem 5% 2rem 5%;
    gap: 2.5rem;
  }

    @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    min-width: 0;
    left: 0;
    right: 0;
    margin-left: 0;
    margin-right: 0;
    padding: 2rem 1rem 1.5rem 1rem;
    gap: 1.2rem;
  }

`

// Conteúdo de texto e botões dentro do Hero
export const Content = styled.div`
  width: 100%;
  text-align: left;
  margin-left: auto;


  @media (max-width: 800px) {
  div {
    width: 360px;
    max-width: 100%;
    padding-top: 2rem;
    }
}

  

    h1 {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    line-height: 1.1;
    @media (max-width: 600px) {
      font-size: 1.8rem;
      padding: 0.5rem;
      padding-left: 0rem;
      padding-top: 7rem;
      padding-bottom: 0rem;
    }

  }

  p {
    font-size: 1.25rem;
    font-weight: 200;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.8);
    @media (max-width: 900px) {
      font-size: 1.1rem;
      padding: 0.5rem;
      padding-top: 0rem;
      padding-left: 0 !important;
      padding-right: 0 !important;
      padding-bottom: 0rem;
    }
  }
`
export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.7rem;
    align-items: stretch;

    .filled, .outlined {
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
    }
  }

  .filled, .outlined {
    padding: 0.75rem 1.5rem;
    min-width: 134px;
    text-align: center;
    border-radius: 13px;
    display: inline-block;
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
  position: fixed;
  left: 50vw;
  bottom: 5rem;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999; /* maior para ficar na frente */
  color: white;
  font-weight: 600;
  cursor: pointer;
  user-select: none;

  @media (max-width: 600px) {
    bottom: 2rem;
  }
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
