import styled from 'styled-components'

export const Container = styled.section`
  background-color: #f9f6f6;
  padding: 6rem 10% 5rem;
  @media (max-width: 900px) {
    padding: 3rem 3% 2rem;
  }
  @media (max-width: 600px) {
    padding: 2rem 1rem 1rem;
  }
`

export const Titulo = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #433F3F;
  text-align: center;
  font-family: 'Source Serif Pro', serif;
  @media (max-width: 600px) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Mapa = styled.iframe`
  flex: 1 1 400px;
  border: none;
  min-height: 300px;
  width: 100%;
  max-width: 500px;
  border-radius: 1px;
  @media (max-width: 600px) {
    min-height: 180px;
    max-width: 100%;
  }
`

export const Info = styled.div`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
    gap: 1.2rem;
  }
`

export const Endereco = styled.a`
  color: #433F3F;
  font-size: 1rem;
  line-height: 1.6;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }

  &:visited {
    color: inherit; /* Impede o roxo */
  }
`

export const Botoes = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  a {
    padding: 0.75rem 1.5rem;
    min-width: 180px;          /* <<< Defina aqui o tamanho mínimo desejado */
    background: transparent;
    border: 2px solid #433F3F;
    border-radius: 13px;
    color: #433F3F;
    font-weight: bold;
    font-size: 0.8rem;
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    cursor: pointer;
    transition: 0.3s ease;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    outline: none;
    box-sizing: border-box;
    height: 44px;             /* <<< Opcional, para padronizar a altura */

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &:hover {
      background: #433F3F;
      color: white;
      text-decoration: none;
    }
  }
`



