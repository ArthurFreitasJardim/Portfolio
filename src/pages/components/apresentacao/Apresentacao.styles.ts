import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const colors = {
  background: '#18181B',
  primary: '#3f64b3',
  destaque: '#B0D7FE',
  white: '#ffffff',
  text: '#A1A1AA',
};

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
`;

export const ApresentacaoSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: ${colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; // Fundo absoluto
  pointer-events: none; // IMPORTANTE: Permite clicar no que está atrás
  
  canvas {
    width: 100%;
    height: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 20%, ${colors.background} 90%);
  }
`;

export const ConteudoCentral = styled(motion.div)`
  position: relative;
  z-index: 2; // Acima do canvas
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .pre-titulo {
    font-family: "IBM Plex Mono", monospace;
    color: ${colors.primary};
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  .subtitulo {
    color: ${colors.text};
    font-size: 1.1rem;
    margin-top: 1rem;
    font-family: "Roboto", sans-serif;
  }
`;

export const Titulo = styled.h1`
  font-family: "IBM Plex Mono", monospace;
  font-size: clamp(2.5rem, 10vw, 6rem);
  color: ${colors.white};
  font-weight: 700;
  letter-spacing: -3px;
  line-height: 1.1;
  
  background: linear-gradient(180deg, #fff 30%, ${colors.destaque} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const RedesSociais = styled.div`
  display: flex;
  gap: 2rem;
  margin: 3.5rem 0;
`;

export const IconeContato = styled.a`
  color: ${colors.text};
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    color: ${colors.destaque};
  }
`;

export const BotaoDownload = styled.a`
  font-family: "IBM Plex Mono", monospace;
  padding: 14px 36px;
  border: 1px solid ${colors.primary};
  color: ${colors.white};
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: rgba(63, 100, 179, 0.03);
  z-index: 10;
  
  &:hover {
    background: ${colors.primary};
    box-shadow: 0 10px 20px rgba(63, 100, 179, 0.3);
  }
`;

export const SetaContainer = styled.div`
  position: absolute;
  bottom: 50px;
  cursor: pointer;
  color: ${colors.primary};
  animation: ${bounce} 2s infinite ease-in-out;
  opacity: 0.5;
  transition: opacity 0.3s;
  z-index: 10;

  &:hover {
    opacity: 1;
  }
`;