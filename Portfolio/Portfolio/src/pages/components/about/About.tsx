import React from 'react'
import { motion } from 'framer-motion'
import Image from "../../../assets/selfie.png";
import Game from "../../../assets/game.png"
import Futebol from "../../../assets/futebol.png"
import Musica from "../../../assets/musica.png"

import {
  ContainerSobre,
  ConteudoSobre,
  TituloSobre,
  TextoSobre,
  FotoPerfil,
  ElementoFlutuante,
  FundoAnimado
} from './About.styles'

const About: React.FC<{ mostrar: boolean }> = ({ mostrar }) => {
  return (
    <ContainerSobre id="about" mostrar={mostrar}>
      <FundoAnimado />

      <ElementoFlutuante src={Game} style={{ opacity:'100%', top: '15%', left: '5%' }} />
      <ElementoFlutuante src={Futebol} style={{opacity:'100%', top: '85%', left: '6%' }} />
      <ElementoFlutuante src={Musica} style={{opacity:'100%', top: '30%', right: '5%' }} />

      <ConteudoSobre>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: mostrar ? 1 : 0, x: mostrar ? 0 : -50 }}
          transition={{ duration: 0.8 }}
        >
          <FotoPerfil src={Image} alt="Foto de perfil" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: mostrar ? 1 : 0, x: mostrar ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <TituloSobre>-Sobre Mim-</TituloSobre>

<TextoSobre>
  <div>
    <p>Oi! Eu sou o Arthur, tenho 20 anos e moro em Belo Horizonte, MG. Sou estudante de Engenharia de Software, atualmente cursando o 5º período no turno noturno. Desde o início da graduação, venho me dedicando ao máximo para aprofundar meus conhecimentos em programação e tecnologia, sempre buscando os melhores resultados em cada projeto ou desafio que enfrento.</p>
  </div>

  <div>
    <p>Antes da faculdade, tive a oportunidade de cursar o ensino médio técnico em programação no colégio COTEMIG. Foi ali que dei meus primeiros passos no mundo da tecnologia, aprendendo linguagens e ferramentas como HTML, CSS, JavaScript, Python, Java, SQL, Swift e C++. Essa base sólida me preparou muito bem para a graduação e me ajudou a entender com mais facilidade os conceitos mais avançados que estudo hoje.</p>
  </div>

  <div>
    <p>Além da formação, também tive algumas experiências práticas que reforçaram minha paixão pela área. Atuei durante dois meses como monitor no projeto CODECLUB, onde ensinei o básico sobre programação e introduçaõ a lógica para crianças de 9 a 15 anos. Além disto atuei por um mês na empresa LEADER-RH onde realizei o estudo para a implementação da nuvem na empresa</p>
  </div>

  <div>
    <p>Sou uma pessoa curiosa, prática e apaixonada por inovação. Gosto de pensar em soluções que realmente façam diferença no dia a dia das pessoas. Nos meus momentos livres, estou quase sempre envolvido com futebol, video-game e música. Seja Bem-Vindo(a)!</p>
  </div>
</TextoSobre>

        </motion.div>
      </ConteudoSobre>
    </ContainerSobre>
  )
}

export default About