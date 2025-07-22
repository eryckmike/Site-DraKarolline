import { Container, Content, Texto, Foto, ContainerFoto } from './sobre.styles'
import fotoKarol from '../../../assets/imagem-karol.jpeg'

export function Sobre() {
  return (
    <Container id="sobre">
      <Content>
        <Texto>
          <h2>Quem Cuida de Você Também<br />Precisa Ser Especialista</h2>
          <p>
            Sou enfermeira de formação, com especialização em Unidade de Terapia Intensiva e Estética Avançada. Após anos atuando com responsabilidade e precisão no cuidado com a saúde, encontrei na estética a possibilidade de transformar vidas de uma forma ainda mais visível e emocional.
          </p>
          <p>
            Ao longo de mais de 6 anos de experiência com mais de 20 cursos técnicos realizados, me especializei em harmonização facial e corporal, utilizando protocolos modernos, seguros e personalizados para realçar a beleza única de cada paciente.
          </p>
          <p>
            Meu compromisso é com a naturalidade, a segurança e a autoestima. Cada atendimento é pensado para que você se sinta acolhida, orientada e confiante desde a primeira consulta até o pós-procedimento.
          </p>
          
        </Texto>
        <ContainerFoto>
        <Foto src={fotoKarol} alt="Dra. Karol sorrindo" />
        <a
          href="https://online.maapp.com.br/Drakarollinebarros"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar avaliação
        </a>
      </ContainerFoto>


      </Content>
      
    </Container>
    
  )
}
