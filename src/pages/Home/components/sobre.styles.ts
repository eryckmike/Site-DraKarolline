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

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-family: 'Source Serif Pro', serif;
  flex-wrap: wrap;
  gap: 3rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

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
    height: 44px;
    width: 100%;
    max-width: 340px;

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
    @media (max-width: 600px) {
      font-size: 1.4rem;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
    margin-bottom: 1rem;
    text-align: left;
    @media (max-width: 600px) {
      font-size: 0.95rem;
    }
  }
`

export const Foto = styled.img`
  width: 100%;
  max-width: 350px;
  object-fit: cover;
  border-radius:  0 75px 0;
  @media (max-width: 600px) {
    max-width: 220px;
    border-radius: 30px 30px 0 30px;
  }
`

export const ContainerFoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 300px;
  gap: 1.5rem;

  @media (max-width: 900px) {
    margin-bottom: 2rem;
  }
`
