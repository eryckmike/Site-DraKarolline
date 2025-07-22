import { Container, Nav, Logo, ButtonGroup } from './styles'
import logoImage from '../../assets/KB-LOGO.png' // ou o nome da sua logo

export function Header() {
  return (
    <Container>
      <Nav>
        <Logo src={logoImage} alt="Logo" />
        <ButtonGroup>
  <a href="#servicos" className="filled">Serviços</a>
  <a
    href="https://online.maapp.com.br/Drakarollinebarros"
    className="outlined"
    target="_blank"
    rel="noopener noreferrer"
  >
    Agendamento
  </a>
</ButtonGroup>

      </Nav>
    </Container>
  )
}
