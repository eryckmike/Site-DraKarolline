import styled from 'styled-components'

export const Container = styled.section`
  background-color: #f9f6f6;
  padding: 6rem 10% 5rem;
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-family: 'Source Serif Pro', serif;
  flex-wrap: wrap;
  gap: 3rem;

  button, a {
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
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
    height: 44px; /* deixa todos com a mesma altura */

    &:hover {
      background: #433F3F;
      color: white;
      text-decoration: none;
    }
  }
`


export const Texto = styled.div`
  flex: 1 1 500px;
  text-align: left;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    color: #433F3F;
    text-align: left;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    margin-bottom: 1rem;
    text-align: left;
  }


`

export const Foto = styled.img`
  width: 100%;
  max-width: 350px;
  object-fit: cover;
  border-radius:  0 75px 0;
`

export const ContainerFoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 300px;
  gap: 1.5rem; // espaçamento entre imagem e botão
`
