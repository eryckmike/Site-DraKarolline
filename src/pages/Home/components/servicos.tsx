import { ContainerServicos, ServicoItem, ServicoContent, ServicoImagem, ServicoTexto } from './servicos.styles'
import toxina from '../../../assets/botox.jpg'
import preenchimento from '../../../assets/preenchimento-labial.jpg'
import rinomodelacao from '../../../assets/rinomodelacao-dra-paula-azevedo-dermatologista-goiania.jpg'
import bioestimulador from '../../../assets/bioestimuladores.jpg'
import bioplastia from '../../../assets/bioplastia-gluteo.jpg'

export function Servicos() {
  return (
    <ContainerServicos id="servicos">
      <h2>Serviços</h2>

      <ServicoItem>
        <ServicoContent>
          <ServicoImagem src={toxina} alt="Toxina Botulínica" />
          <ServicoTexto>
            <h3>Toxina Botulínica (Botox)</h3>
            <p>Reduz rugas e linhas de expressão com naturalidade, prevenindo os sinais do envelhecimento. Procedimento rápido, seguro e com resultados visíveis em poucos dias.</p>
          </ServicoTexto>
        </ServicoContent>
      </ServicoItem>

      <ServicoItem>
        <ServicoContent>
          <ServicoImagem src={preenchimento} alt="Preenchimento Labial" />
          <ServicoTexto>
            <h3>Preenchimento Labial</h3>
            <p>Modela e dá volume aos lábios, realçando o contorno e a simetria com naturalidade. Ideal para quem busca lábios mais definidos e hidratados.</p>
          </ServicoTexto>
        </ServicoContent>
      </ServicoItem>

      <ServicoItem>
        <ServicoContent>
          <ServicoImagem src={rinomodelacao} alt="Rinomodelação" />
          <ServicoTexto>
            <h3>Rinomodelação</h3>
            <p>Corrige imperfeições no nariz sem cirurgia. Com ácido hialurônico, é possível alinhar o dorso, levantar a ponta e harmonizar o perfil com segurança e efeito imediato.</p>
          </ServicoTexto>
        </ServicoContent>
      </ServicoItem>

      <ServicoItem>
        <ServicoContent>
          <ServicoImagem src={bioestimulador} alt="Bioestimuladores de Colágeno" />
          <ServicoTexto>
            <h3>Bioestimuladores de Colágeno</h3>
            <p>Tratamento injetável que ativa a produção natural de colágeno, promovendo firmeza, elasticidade e rejuvenescimento progressivo da pele.</p>
          </ServicoTexto>
        </ServicoContent>
      </ServicoItem>

      <ServicoItem>
        <ServicoContent>
          <ServicoImagem src={bioplastia} alt="Bioplastia de Glúteo" />
          <ServicoTexto>
            <h3>Bioplastia de Glúteo</h3>
            <p>Realça o volume e contorno dos glúteos com resultados naturais e sem cirurgia. Procedimento seguro, ideal para quem busca harmonização corporal e autoestima elevada.</p>
          </ServicoTexto>
        </ServicoContent>
      </ServicoItem>

      <a
        href="https://online.maapp.com.br/Drakarollinebarros"
        className="filled" // ou "outlined", se preferir o estilo alternativo
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginTop: "2rem" }} // opcional, só para espaçamento se quiser
      >
        Agendar avaliação
      </a>

    </ContainerServicos>
  )
}
