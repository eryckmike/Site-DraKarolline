import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #B19797;
  color: #fff;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    height: 108px;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.95rem;
    line-height: 1.2;
  }
`;

export const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    svg {
      height: 30px;
      width: 100px;
      fill: currentColor;
    }
  }
`;
