import styled, { keyframes } from 'styled-components'

const colors = {
  background: '#18181B',
  header: '#27272E',
  primary: '#3f64b3',
  destaque: '#B0D7FE',
  highlight2: '#BCD1DD',
  white: '#ffffff',
}

const fonts = {
  primary: '"IBM Plex Mono", serif',
  secondary: '"Roboto", sans-serif',
}

const descer = keyframes`
  0% {
    transform: translate(-50%, 0);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, 10px);
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, 0);
    opacity: 1;
  }
`

export const Apresentacao = styled.section<{ mostrar: boolean }>`
  align-items: center;
  text-align: center;
  background-color: ${colors.background};
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100vh;
  opacity: ${({ mostrar }) => (mostrar ? 1 : 0)};
  transform: ${({ mostrar }) => (mostrar ? 'scale(1)' : 'scale(0.5)')};
  transition: all 0.8s ease-in-out;
  padding: 1.8em;

  @media (min-width: 1201px) {
    padding: 0;
  }
`

export const Titulo = styled.h1<{ mostrar: boolean }>`
  font-size: 8em;
  font-weight: bold;
  color: ${colors.destaque};
  font-family: ${fonts.primary};
  text-shadow: 4px 4px 4px ${colors.primary};
  opacity: ${({ mostrar }) => (mostrar ? 1 : 0)};
  transform: ${({ mostrar }) => (mostrar ? 'translateY(0)' : 'translateY(-50px)')};

  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }
`

export const RedesSociais = styled.div<{ mostrar: boolean }>`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  opacity: ${({ mostrar }) => (mostrar ? 1 : 0)};
  transform: ${({ mostrar }) => (mostrar ? 'translateY(0)' : 'translateY(-50px)')};
  transition: all 0.8s ease-in-out 0.4s;
  margin-bottom: 3rem; 

  svg {
    width: 30px;
    height: 30px;
  }
`

export const BotaoDownload = styled.a<{ mostrar: boolean }>`
  background-color: ${colors.background};
  color: ${colors.destaque};
  border: 1px solid ${colors.destaque};
  width: 25%;
  text-align: center;
  border-radius: 10px;
  font-size: 1.1rem;
  padding: 0.8em;
  font-weight: 600;
  text-decoration: none; 
  margin-top: 2rem;       

  opacity: ${({ mostrar }) => (mostrar ? 1 : 0)};
  transform: ${({ mostrar }) => (mostrar ? 'translateY(0)' : 'translateY(-50px)')};
  transition: ease-in-out 0.6s;
  cursor: pointer;

  &:hover {
    background-color: ${colors.destaque};
    color: ${colors.background};
    transition: 0.5s;
    border: 1px solid ${colors.background};
  }

  @media (max-width: 1200px) {
    width: 50%;
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 1rem;
  }
`;

export const BotaoDownloadLight = styled(BotaoDownload)`
  border: none;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.background};
    border: none;
  }
`

export const IconeContato = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border: 2px solid ${colors.primary};
  border-radius: 50%;
  background-color: transparent;
  transition: 0.3s;
  color: ${colors.primary};
  cursor: pointer;

  svg {
    width: 28px;
    height: 28px;
  }

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.background};
  }
`;

export const IconeContatoLight = styled(IconeContato)`
  border: 2px solid ${colors.background};
  color: ${colors.destaque};
  background-color: ${colors.background};

  &:hover {
    border: 2px solid ${colors.primary};
    color: ${colors.primary};
    background-color: ${colors.background};
  }
`;

export const Seta = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 15px solid ${colors.primary};
  animation: ${descer} 1.5s infinite;
  margin-bottom: 20px;
`

export const SetaLight = styled(Seta)`
  border-top: 15px solid ${colors.background};
`
