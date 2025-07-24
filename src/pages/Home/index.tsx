import { Container, Hero, Content, ButtonGroup, ScrollIndicator } from './styles'
import { Header } from '../../components/Header'
import { Servicos } from './components/servicos'
import { Sobre } from './components/sobre'
import { ComoChegar } from './components/comochegar'
import { Footer } from '../../components/Footer'


export function Home() {
  return (
    <Container>
      <Header />
      <Hero>
        
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
        
        <ScrollIndicator>
          <div className="arrow" />
          <span>Entenda mais</span>
        </ScrollIndicator>
      </Hero>
      <Sobre />
      <Servicos />
      <ComoChegar />
      <Footer />
    </Container>
  )
}
