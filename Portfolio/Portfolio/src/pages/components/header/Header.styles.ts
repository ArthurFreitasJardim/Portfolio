import styled from 'styled-components';
import { colorPalette } from '../../../utils/colors';

export const Cabecalho = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${colorPalette.background};
  z-index: 1000;
  transition: 0.5s;
  padding: 2em 3em;
`;

export const Arroba = styled.a`
  color: ${colorPalette.destaque};
  font-family: ${colorPalette.primary};
  font-weight: 600;
  font-size: 1.25rem;
  text-align: center;
  text-decoration: none;
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

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 24px;

  &::before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + & {
    background-color: ${colorPalette.destaque};
  }

  input:checked + &::before {
    transform: translateX(26px);
  }
`;
