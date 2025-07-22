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

export const ContainerProjetos = styled.section`
  width: 100%;
  min-height: 100vh; 
  padding: 5rem 2rem;
  background-color: ${colors.background};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TituloSessao = styled.h2`
  font-family: ${fonts.primary};
  color: ${colors.destaque};
  font-size: 28px;
  margin-bottom: 3rem;
`

export const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  width: 100%;
  margin-bottom: 4rem;
`

export const CardProjeto = styled.div`
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid ${colors.primary};
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3 {
    font-family: ${fonts.primary};
    color: ${colors.highlight2};
    font-size: 20px;
    margin: 0.8rem 0 0.5rem;
  }

  p {
    font-family: ${fonts.secondary};
    color: ${colors.white};
    font-size: 14px;
    margin-bottom: 1.2rem;
  }

  div {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 20px #3f64b3;
  }
`


export const ImagemProjeto = styled.img`
  width: 100%;
  height: auto; 
  object-fit: cover;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`

export const BotaoProjeto = styled.a`
  background-color: ${colors.primary};
  color: ${colors.white};
  font-family: ${fonts.secondary};
  font-size: 14px;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background-color: ${colors.destaque};
    color: ${colors.background};
  }
`

export const CardExperiencia = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid ${colors.primary};
  border-radius: 16px;
  width: 600px;
  padding: 1.5rem;
  align-items: center;
  gap: 1.5rem;

  h3 {
    font-family: ${fonts.primary};
    color: ${colors.highlight2};
    margin-bottom: 0.5rem;
    font-size: 20px;
    text-align: left;
  }

  p {
    font-family: ${fonts.secondary};
    color: ${colors.white};
    font-size: 14px;
    line-height: 1.4;
    text-align: left;
  }

  div {
    flex: 1;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 20px #3f64b3;
  }
`

export const ImagemExperiencia = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 12px;
  background-color: white;
  flex-shrink: 0;
`
export const IconeProjeto = styled.div`
  color: ${colors.destaque};
  margin-top: 2rem;
  margin-bottom: 1rem;
`

export const GridExperiencias = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
`