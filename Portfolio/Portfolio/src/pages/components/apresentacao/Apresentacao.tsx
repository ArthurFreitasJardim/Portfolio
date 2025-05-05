import React from 'react';
import {
  Apresentacao as ApresentacaoSection,
  Titulo,
  RedesSociais,
  BotaoDownload,
  IconeContato,
  Seta,
} from '../apresentacao/Apresentacao.styles';

interface Props {
  mostrar: boolean;
}

import {
  Mail,
  Github,
  Linkedin,
  MessageSquare
} from 'lucide-react';


const Apresentacao: React.FC<Props> = ({ mostrar }) => {
  return (
    <ApresentacaoSection mostrar={mostrar} id="apresentacao">
      <div className="conteudo">
        <Titulo mostrar={mostrar}>&lt;Arthur Freitas&gt;</Titulo>

        <RedesSociais mostrar={mostrar}>
          <IconeContato as="a" href="mailto:arthurjardimfreitas@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail size={20} strokeWidth={2} />
          </IconeContato>

          <IconeContato as="a" href="https://github.com/ArthurFreitasJardim" target="_blank" rel="noopener noreferrer">
            <Github size={20} strokeWidth={2} />
          </IconeContato>

          <IconeContato as="a" href="https://www.linkedin.com/in/arthur-freitas-jardim-075a95289/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} strokeWidth={2} />
          </IconeContato>

          <IconeContato as="a" href="https://wa.me/5531982169130" target="_blank" rel="noopener noreferrer">
            <MessageSquare size={20} strokeWidth={2} />
          </IconeContato>
        </RedesSociais>

        <a href="curriculo.pdf" download="curriculo.pdf">
          <BotaoDownload mostrar={mostrar}>Download Currículo</BotaoDownload>
        </a>
      </div>

      <Seta />
    </ApresentacaoSection>
  );
};

export default Apresentacao;