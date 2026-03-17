import styled from 'styled-components';

const colors = {
    background: '#18181B',
    primary: '#3f64b3',
    destaque: '#B0D7FE',
    white: '#ffffff',
    text: '#A1A1AA',
    cardBg: 'rgba(39, 39, 42, 0.5)',
};

export const ContainerProjetos = styled.section`
    width: 100%;
    padding: 8rem 2rem;
    background-color: ${colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8rem;
`;

export const SectionWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
`;

export const TituloSessao = styled.h2`
    font-family: "IBM Plex Mono", monospace;
    color: ${colors.white};
    font-size: 1.8rem;
    margin-bottom: 3rem;
    text-align: left;

    span {
        color: ${colors.primary};
        margin-right: 8px;
    }
`;

export const GridCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
`;

export const CardProjeto = styled.div`
    background: ${colors.cardBg};
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;

    h3 {
        color: ${colors.destaque};
        font-family: "IBM Plex Mono", monospace;
        font-size: 1.2rem;
        margin: 1rem 0;
    }

    p {
        color: ${colors.text};
        font-size: 0.9rem;
        line-height: 1.6;
        margin-bottom: 2rem;
        flex-grow: 1;
    }

    &:hover {
        border-color: ${colors.primary};
        transform: translateY(-5px);
        background: rgba(39, 39, 42, 0.8);
    }
`;

export const IconeWrapper = styled.div`
    color: ${colors.primary};
    background: rgba(63, 100, 179, 0.1);
    width: fit-content;
    padding: 12px;
    border-radius: 8px;
`;

export const BotoesContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const LinkProjeto = styled.a<{ primary?: boolean }>`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.85rem;
    padding: 8px 16px;
    border-radius: 6px;
    text-decoration: none;
    transition: 0.2s;
    
    background: ${props => props.primary ? colors.primary : 'transparent'};
    color: ${colors.white};
    border: 1px solid ${colors.primary};

    &:hover {
        background: ${colors.primary};
        color: white;
    }
`;

export const GridExperiencias = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const CardExperiencia = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    background: ${colors.cardBg};
    padding: 1.5rem;
    border-radius: 12px;
    border-left: 4px solid transparent;
    transition: 0.3s;

    &:hover {
        border-left-color: ${colors.primary};
        background: rgba(39, 39, 42, 0.9);
    }

    @media (max-width: 600px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const ImagemExperiencia = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background: white;
    padding: 5px;
    object-fit: contain;
`;

export const ExpContent = styled.div`
    h3 {
        color: ${colors.white};
        font-size: 1.1rem;
        margin-bottom: 4px;
    }
    p {
        color: ${colors.text};
        font-size: 0.9rem;
        line-height: 1.5;
    }
`;