import styled from 'styled-components';
import { colorPalette } from '../../../utils/colors';

export const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: ${colorPalette.header}; // ou outra cor que deseje
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const FooterText = styled.p`
  color: ${colorPalette.white};
  font-family: 'IBM Plex Mono', serif;
  font-size: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: ${colorPalette.white};
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
      color: ${colorPalette.primaria}; // opcional: muda a cor ao passar o mouse
    }

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
