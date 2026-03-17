import styled from 'styled-components';

const colors = {
    background: '#18181B',
    primary: '#3f64b3',
    destaque: '#B0D7FE',
    cardBg: '#202023',
    text: '#cbd5e1',
};

export const ContainerCompetencias = styled.section`
  width: 100%;
  padding: 8rem 2rem;
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  gap: 6rem;
  align-items: center;
`;

export const SectionWrapper = styled.div`
    width: 100%;
    max-width: 1100px;
`;

export const TituloCompetencias = styled.h2`
  font-family: "IBM Plex Mono", monospace;
  color: ${colors.destaque};
  font-size: 1.5rem;
  margin-bottom: 3rem;
  text-align: left;
  border-left: 4px solid ${colors.primary};
  padding-left: 1rem;
`;

export const IconeWrapper = styled.div`
  color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
`;

export const SkillInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
  text-align: left;

  span {
    font-weight: 500;
    color: #fff;
    font-size: 0.95rem;
  }

  small {
    color: ${colors.text};
    font-size: 0.8rem;
    line-height: 1.4;
  }
`;

export const ProgressBar = styled.div<{ width: number }>`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  position: relative;
  margin-top: 4px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${props => props.width}%;
    background: ${colors.primary};
    border-radius: 2px;
    box-shadow: 0 0 8px ${colors.primary}aa;
  }
`;

export const TituloComTooltip = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

export const Tooltip = styled.span`
  visibility: hidden;
  opacity: 0;
  width: 200px;
  background-color: #000;
  color: #fff;
  font-size: 0.75rem;
  padding: 8px;
  border-radius: 4px;
  position: absolute;
  top: -40px;
  left: 0;
  transition: all 0.3s ease;
  z-index: 10;
  border: 1px solid ${colors.primary};

  ${TituloComTooltip}:hover & {
    visibility: visible;
    opacity: 1;
    top: -50px;
  }
`;
// Mantenha os estilos anteriores e adicione/atualize estes:

export const CategoryTitle = styled.h3`
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #3f64b3; // Sua cor primária
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(63, 100, 179, 0.2);
  display: inline-block;
  padding-bottom: 4px;
`;

// Ajuste na Lista para ser mais compacta e caber tudo
export const ListaCompetencias = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  width: 100%;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const CardCompetencia = styled.div`
  background-color: #202023;
  padding: 0.8rem 1.2rem; // Mais compacto
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.03);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #27272a;
    border-color: #3f64b3;
    transform: translateX(5px); // Feedback lateral suave
  }
`;