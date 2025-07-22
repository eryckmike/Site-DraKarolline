import styled from 'styled-components'

export const ContainerServicos = styled.section`
  padding: 3rem 1rem;
  background-color: rgba(112, 79, 80, 0.67);
  color: #fff;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
  
   button, a {
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
    background: transparent;
    border: 2px solid white;
    border-radius: 13px;
    color: white;
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
      background: white;
      color: #433F3F;
      text-decoration: none;
    }
  }
`


export const ServicoItem = styled.div`
  margin-bottom: 2rem;

  &:nth-child(odd) > div {
    flex-direction: row;
    text-align: left;
  }
  &:nth-child(even) > div {
    flex-direction: row-reverse;
    text-align: right;
  }
`

export const ServicoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.2rem;
  }
`

export const ServicoImagem = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 120px;
    height: 120px;
  }
`

export const ServicoTexto = styled.div`
  max-width: 700px;
  text-align: left;
  color: #fff;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    @media (max-width: 600px) {
      font-size: 1.05rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    @media (max-width: 600px) {
      font-size: 0.96rem;
    }
  }

  ${ServicoItem}:nth-child(odd) & {
    text-align: left;
  }
  ${ServicoItem}:nth-child(even) & {
    text-align: right;
  }
`
