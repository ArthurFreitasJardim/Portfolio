import React from 'react';
import { motion } from 'framer-motion';
import Curriculo from '../../../assets/Currículo-ArthurFreitas (1).pdf';

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
  Phone,
} from 'lucide-react';

const Apresentacao: React.FC<Props> = ({ mostrar }) => {
  
  const irParaSecao = (id: string) => {
    const secao = document.getElementById(id);
    if (secao) {
      secao.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
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
              <Phone size={20} strokeWidth={2} />
            </IconeContato>
          </RedesSociais>

          <BotaoDownload mostrar={mostrar} href={Curriculo} download="Curriculo/Arthur-Freitas.pdf">
            Download Currículo
          </BotaoDownload>
        </div>

        <Seta onClick={() => irParaSecao('about')} />
      </ApresentacaoSection>
    </motion.div>
  );
};

export default Apresentacao;
