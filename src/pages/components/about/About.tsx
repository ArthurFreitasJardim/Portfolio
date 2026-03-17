import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import { Terminal, User, Code2 } from 'lucide-react';
import Image from "../../../assets/selfie.png";

import {
  ContainerSobre,
  ConteudoSobre,
  TituloSobre,
  TextoSobre,
  FotoPerfil,
  Destaque,
  WrapperFoto,
  SectionWrapper,
  Badge
} from './About.styles';

const About: React.FC<{ mostrar: boolean }> = ({ mostrar }) => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <ContainerSobre id="about">
      <SectionWrapper
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate={mostrar ? "visible" : "hidden"}
      >
        <TituloSobre>
          <span>/</span>{t("about_title")}
        </TituloSobre>

        <ConteudoSobre>
          <WrapperFoto variants={itemVariants}>
            <div className="image-border">
               <FotoPerfil src={Image} alt="Arthur Freitas Jardim" loading="lazy" />
            </div>
            <div className="experience-badge">
                <Code2 size={16} />
                <span>Full Stack Developer</span>
            </div>
          </WrapperFoto>

          <motion.div variants={itemVariants}>
            <TextoSobre>
              <div className="intro-line">
                <Terminal size={18} color="#3f64b3" />
                <span>whoami</span>
              </div>
              
              <p>{t("about_p1")}</p>
              <p>{t("about_p2")}</p>

              <Destaque>
                <div className="accent-bar" />
                {t("about_highlight")}
              </Destaque>

              <p>{t("about_p3")}</p>
              
              <div className="tags">
                <Badge>Problem Solver</Badge>
                <Badge>Tech Enthusiast</Badge>
                <Badge>Continuous Learner</Badge>
              </div>
            </TextoSobre>
          </motion.div>
        </ConteudoSobre>
      </SectionWrapper>
    </ContainerSobre>
  );
};

export default About;