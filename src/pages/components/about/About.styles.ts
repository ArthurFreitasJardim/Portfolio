import styled from 'styled-components';
import { motion } from 'framer-motion';

const colors = {
  background: '#18181B',
  primary: '#3f64b3',
  destaque: '#B0D7FE',
  white: '#FAFAFA',
  text: '#A1A1AA',
};

export const ContainerSobre = styled.section`
  width: 100%;
  min-height: 90vh;
  background-color: ${colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem 2rem;
`;

export const SectionWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
`;

export const TituloSobre = styled.h2`
  font-family: "IBM Plex Mono", monospace;
  color: ${colors.white};
  font-size: 1.8rem;
  margin-bottom: 4rem;
  text-align: left;

  span {
    color: ${colors.primary};
    margin-right: 8px;
  }
`;

export const ConteudoSobre = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 5rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const WrapperFoto = styled(motion.div)`
  position: relative;
  
  .image-border {
    position: relative;
    padding: 10px;
    border: 1px solid rgba(63, 100, 179, 0.2);
    border-radius: 20px;
  }

  .experience-badge {
    position: absolute;
    bottom: -15px;
    right: -15px;
    background: ${colors.primary};
    color: white;
    padding: 10px 15px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  }
`;

export const FotoPerfil = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: 12px;
  filter: grayscale(30%);
  transition: 0.4s;

  &:hover {
    filter: grayscale(0%);
  }
`;

export const TextoSobre = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .intro-line {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: "IBM Plex Mono", monospace;
    color: ${colors.destaque};
    font-size: 0.9rem;
    margin-bottom: -0.5rem;
  }

  p {
    line-height: 1.8;
    color: ${colors.text};
    font-size: 1.05rem;
    text-align: justify;
  }

  .tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
`;

export const Destaque = styled.div`
  position: relative;
  background: rgba(63, 100, 179, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  color: ${colors.destaque};
  border-left: 4px solid ${colors.primary};
  font-style: italic;
`;

export const Badge = styled.span`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: ${colors.text};
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-family: "IBM Plex Mono", monospace;
`;