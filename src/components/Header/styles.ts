import styled from 'styled-components'

export const Container = styled.header`
  position: absolute;   /* fixo dentro do Hero */
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;  
  max-width: 100vw;
  overflow-x: hidden;
  padding: 0.5rem 5%;
  background: transparent;
  z-index: 10;


`

export const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Logo = styled.img`
  padding: 1.5rem;
  height: 40px;
`

export const ButtonGroup = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2rem;

  a, button {
    background: transparent;
    border: none;
    color: white;
    font-weight: normal;
    font-size: 0.9rem;
    cursor: pointer;
    padding: 0;
    transition: all 0.3s ease;
    text-decoration: none;   /* tira underline do <a> */
    outline: none;

    &:hover {
      font-weight: bold;
      text-decoration: underline;
    }
  }
    @media (max-width: 600px) {
      display: none !important;
      width: 0 !important;
      min-width: 0 !important;
}

`
