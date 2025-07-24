import React, { useRef, useEffect, useState } from 'react';
import { Container, Hero, Content, ButtonGroup, ScrollIndicator } from './styles'
import { Header } from '../../components/Header'
import { Servicos } from './components/servicos'
import { Sobre } from './components/sobre'
import { ComoChegar } from './components/comochegar'
import { Footer } from '../../components/Footer'

export function Home() {
  const heroRef = useRef(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowScrollIndicator(entry.isIntersecting);
      },
      { root: null, threshold: 0.5 } // quanto da Hero precisa estar visível pra considerar "visível"
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <Container>
      <Header />
      <Hero ref={heroRef}>
        <Content>
          <div>
            <h1>
              Sua pele merece o melhor: <br />
              tratamentos avançados para <br />
              resultados visíveis e duradouros.
            </h1>
            <p>
              Protocolos exclusivos desenvolvidos para realçar sua beleza natural
              com segurança e inovação.
            </p>
            <ButtonGroup>
              <a
                href="https://online.maapp.com.br/Drakarollinebarros"
                className="filled"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                Agendar avaliação
              </a>
              <a href="#como-chegar" className="outlined">Como chegar</a>
            </ButtonGroup>
          </div>
        </Content>
        {showScrollIndicator && (
          <ScrollIndicator>
            <div className="arrow" />
            <span>Entenda mais</span>
          </ScrollIndicator>
        )}
      </Hero>
      <Sobre />
      <Servicos />
      <ComoChegar />
      <Footer />
    </Container>
  );
}
