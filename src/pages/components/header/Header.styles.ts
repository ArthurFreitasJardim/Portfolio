import styled from 'styled-components';
import { colorPalette } from '../../../utils/colors';
import { Home } from 'lucide-react';

export const Cabecalho = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${colorPalette.background};
  z-index: 9999;
  transition: all 0.4s ease;
  padding: 2em 3em;

  &.scrolled {
    border-bottom: 1px solid ${colorPalette.destaque};
    background-color: rgba(24, 24, 27, 0.95);
    backdrop-filter: blur(4px);
  }
`;

export const Arroba = styled.a`
  color: ${colorPalette.destaque};
  font-family: ${colorPalette.primary};
  font-weight: 600;
  font-size: 1.25rem;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;

  .icone-home {
    opacity: 0;
    transform: translate(110px, 4px);
    margin-right: 0.3rem;
    transition: opacity 0.6s ease, transform 0.6s ease;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .icone-home svg {
    font-size: 1.2em;
  }

  .icone-home-active {
    opacity: 1;
    transform: translate(2.5em, 0em);
  }
`;

export const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 1em;

  @media (max-width: 1200px) {
    display: block;
  }
`;

export const Hamburger = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  background-color: ${colorPalette.destaque};
  position: relative;

  &::before,
  &::after {
    content: "";
    width: 25px;
    height: 3px;
    background-color: ${colorPalette.destaque};
    position: absolute;
    left: 0;
    transition: transform 0.3s;
  }

  &::before {
    top: -8px;
  }

  &::after {
    top: 8px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2em;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 1200px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: ${colorPalette.background};
    z-index: 1000;

    &.active {
      display: flex;
    }
  }
`;

export const ItemMenu = styled.li`
  text-align: center;
`;

export const LinkItemMenu = styled.a`
  text-decoration: none;
  color: ${colorPalette.destaque};
  font-family: ${colorPalette.primary};
  font-weight: 600;
  font-size: 1rem;
  position: relative;
  padding: 0.5em 0;

  &:hover {
    color: ${colorPalette.destaque};
    transition: 0.3s;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0%;
    height: 2px;
    background-color: ${colorPalette.destaque};
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const IconeHome = styled(Home)`
  position: relative;
  top: 2px;
  right: 6px;
  font-size: 1.1em;
  vertical-align: middle;
`;
export const LanguageToggle = styled.div`
  display: flex;
  gap: 6px;
  margin-left: 10px;

  button {
    background: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
    transition: transform 0.2s;
  }

  button:hover {
    transform: scale(1.2);
  }
`;

export const LanguageSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 12px;
  cursor: pointer;

  img {
    width: 22px;
    height: 22px;
    object-fit: cover;
    border-radius: 50%;
    transition: all 0.3s ease;

    /* bandeira inativa */
    filter: grayscale(100%) brightness(70%);
    opacity: 0.7;
  }

  img:hover {
    opacity: 0.9;
  }

  img.active {
    /* bandeira ativa */
    filter: none;
    opacity: 1;
    transform: scale(1.08);
  }
`;