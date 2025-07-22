import styled from 'styled-components'

export const Container = styled.section`
  background-color: #f9f6f6;
  padding: 6rem 10% 5rem;
`

export const Titulo = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #433F3F;
  text-align: center;
  font-family: 'Source Serif Pro', serif;
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
`

export const Mapa = styled.iframe`
  flex: 1 1 400px;
  border: none;
  min-height: 300px;
  width: 100%;
  max-width: 500px;
  border-radius: 1px;
`

export const Info = styled.div`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
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

