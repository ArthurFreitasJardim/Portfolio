import React from 'react'
import { motion } from 'framer-motion'
import Image from "../../../assets/selfie.png";
import Game from "../../../assets/game.png"
import Futebol from "../../../assets/futebol.png"
import Musica from "../../../assets/musica.png"
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <ContainerSobre id="about" mostrar={mostrar}>
      <FundoAnimado />

      <ElementoFlutuante src={Game} style={{ opacity: '100%', top: '15%', left: '5%' }} />
      <ElementoFlutuante src={Futebol} style={{ opacity: '100%', top: '85%', left: '4%' }} />
      <ElementoFlutuante src={Musica} style={{ opacity: '100%', top: '20%', right: '5%' }} />

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
          <TituloSobre>{t("about_title")}</TituloSobre>

          <TextoSobre>
            <div>
              <p>{t("about_p1")}</p>
            </div>

            <div>
              <p>{t("about_p2")}</p>
            </div>

            <div>
              <p>{t("about_p3")}</p>
            </div>

            <div>
              <p>{t("about_p4")}</p>
            </div>
          </TextoSobre>

        </motion.div>
      </ConteudoSobre>
    </ContainerSobre>
  )
}

export default About