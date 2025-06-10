import styled from 'styled-components'

const colors = {
    background: '#18181B',
    primary: '#3f64b3',
    destaque: '#B0D7FE',
    white: '#ffffff',
    highlight2: '#BCD1DD',
}

const fonts = {
    primary: '"IBM Plex Mono", serif',
    secondary: '"Roboto", sans-serif',
}

export const ContainerCompetencias = styled.section`
  width: 100%;
  min-height: 100vh; 
  padding: 5rem 2rem;
  background-color: ${colors.background};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center; 
`


export const TituloCompetencias = styled.h2`
  font-family: ${fonts.primary};
  color: ${colors.destaque};
  font-size: 28px;
  margin-bottom: 8rem;

  @media (max-width: 768px) {
    font-size: 24px; 
    margin-bottom: 4rem; 
  }

  @media (max-width: 480px) {
    font-size: 20px; 
    margin-bottom: 2rem; 
  }
`


export const ListaCompetencias = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
  gap: 1rem;
  justify-items: center;
`

export const NomeCompetencia = styled.h3`
  font-family: ${fonts.secondary};
  font-size: 20px;
  display: flex;
  align-items: center; 
  justify-content: center;
  margin-top: 1rem; 
  gap: 8px; 
  transition: opacity 0.3s, transform 0.3s;
  text-align: center;
`

export const InfoHover = styled.div`
  position: absolute;
  bottom: 1.5rem;
  top: 25%;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
  transform: translateY(20px);

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #bcd1dd;
    margin-bottom: 0.5rem;
  }
`

export const Nivel = styled.div<{ nivel: number }>`
  width: 80%;
  margin: 0 auto;
  background-color: #444;
  border-radius: 8px;
  overflow: hidden;
  height: 16px;
  position: relative;

  &::before {
    content: '${props => props.nivel}/100';
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
    color: #fff;
    z-index: 2;
  }

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.nivel}%;
    background-color: #3f64b3;
    transition: width 0.3s;
    position: relative;
    z-index: 1;
  }
`

export const CardCompetencia = styled.div`
  width: 200px;
  height: 80px;
  background-color: #27272e;
  color: ${colors.white};
  border-radius: 16px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 10px;  

  &:hover {
    transform: scale(1.05);

    ${InfoHover} {
      opacity: 1;
      transform: translateY(0);
    }

    ${NomeCompetencia} {
      opacity: 0;
      transform: scale(0.95);
    }
  }
`