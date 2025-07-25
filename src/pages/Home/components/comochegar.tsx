import {
  Container,
  Content,
  Mapa,
  Info,
  Titulo,
  Endereco,
  Botoes
} from './comochegar.styles'

export function ComoChegar() {
  return (
    <Container id="como-chegar">
      <Titulo>Como chegar</Titulo>
      <Content>
        <Mapa
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3919823999986!2d-38.66022488877938!3d-3.7244055962338667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0b52bf773b55b%3A0x6bde4d537f5bf8d3!2sR.%20Jo%C3%A3o%20Forte%2C%20531%20-%20Padre%20Romaldo%2C%20Caucaia%20-%20CE%2C%2061601-350!5e0!3m2!1spt-BR!2sbr!4v1753204908967!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            />

        <Info>
          <Endereco
            href="https://www.google.com/maps/place/R.+Jo%C3%A3o+Forte,+531+-+Padre+Romualdo,+Caucaia+-+CE,+61601-350"
            target="_blank"
            rel="noopener noreferrer"
            >
                R. João Forte, 591, Padre Romualdo, Caucaia - Ceará, 61601-350, Brazil
            
            </Endereco>


          <Botoes>
            <a
                href="https://online.maapp.com.br/Drakarollinebarros"
                target="_blank"
                rel="noopener noreferrer"
            >
                Agendar avaliação
            </a>
            <a
                href="https://wa.me/5585981345529"
                target="_blank"
                rel="noopener noreferrer"
                >
                Entrar em contato
            </a>
            <a
                href="https://www.google.com/maps/place/R.+Jo%C3%A3o+Forte,+531+-+Padre+Romualdo,+Caucaia+-+CE,+61601-350"
                target="_blank"
                rel="noopener noreferrer"
                >
                Abrir no mapa
            </a>
            </Botoes>


        </Info>
      </Content>
    </Container>
  )
}
