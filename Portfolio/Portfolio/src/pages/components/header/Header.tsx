import React, { useState, useEffect } from 'react';
import {
  Cabecalho,
  Arroba,
  MenuToggle,
  Hamburger,
  Menu,
  ItemMenu,
  LinkItemMenu,
  SwitchLabel,
  Slider,
} from './Header.styles';

const Header: React.FC = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuAtivo((prev) => !prev);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Cabecalho className={scrolled ? 'scrolled' : ''}>
      
      <Arroba>@arthur</Arroba>

      <MenuToggle onClick={toggleMenu} aria-label="Abrir menu">
        <Hamburger />
      </MenuToggle>

      <Menu className={menuAtivo ? 'active' : ''}>
        <ItemMenu>
          <LinkItemMenu href="#" id="botao_sobre">Sobre</LinkItemMenu>
        </ItemMenu>
        <ItemMenu>
          <LinkItemMenu href="#" id="botao_projetos">Projetos</LinkItemMenu>
        </ItemMenu>
        <ItemMenu>
          <LinkItemMenu href="#" id="botao_certificados">Certificações</LinkItemMenu>
        </ItemMenu>
        <ItemMenu>
          <LinkItemMenu href="#" id="botao_contato">Contato</LinkItemMenu>
        </ItemMenu>
        <ItemMenu>
          <SwitchLabel className="switch">
            <input type="checkbox" id="botao_tema" />
            <Slider className="slider" />
          </SwitchLabel>
        </ItemMenu>
      </Menu>
    </Cabecalho>
  );
};

export default Header;
