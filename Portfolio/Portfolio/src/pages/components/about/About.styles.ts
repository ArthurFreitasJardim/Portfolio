import styled from 'styled-components'

const colors = {
  background: '#18181B',
  primary: '#3f64b3',
  destaque: '#B0D7FE',
  white: '#ffffff',
}

const fonts = {
  primary: '"IBM Plex Mono", serif',
  secondary: '"Roboto", sans-serif',
}

export const ContainerSobre = styled.section<{ mostrar: boolean }>`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${colors.background};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ mostrar }) => (mostrar ? 1 : 0)};
  transform: ${({ mostrar }) => (mostrar ? 'translateY(0)' : 'translateY(50px)')};
  transition: all 0.8s ease-in-out;
  padding: 5rem 2rem;

  @media (max-width: 768px) {
    align-items: flex-start; 
    padding-top: 9rem;
    padding-bottom: 6rem;
  }
`;

export const FundoAnimado = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`

export const ElementoFlutuante = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  opacity: 0.3;
  animation: flutuar 6s ease-in-out infinite;

  @keyframes flutuar {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`

export const ConteudoSobre = styled.div`
  position: relative;
  display: flex;
  align-items: center; 
  justify-content: center; 
  gap: 3rem;
  flex-wrap: wrap;
  max-width: 1000px;
  width: 100%;
  z-index: 1;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

export const TituloSobre = styled.h2`
  font-size: 28px;
  color: #B0D7FE;
  margin-bottom: 24px;
  font-family: 'IBM Plex Mono', serif;
`;

export const TextoSobre = styled.div`
  font-family: ${fonts.secondary};
  font-size: 14px;
  line-height: 1.6;
  font-family: 'IBM Plex Mono', serif;
  color: ${colors.white};
  max-width: 600px;

  div {
    margin-bottom: 20px;
  }

  p {
    text-align: justify;
    margin: 0;
  }

  div:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const FotoPerfil = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 4px solid ${colors.primary};
  object-fit: cover;
  box-shadow: 0 0 15px ${colors.primary};

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }
`
