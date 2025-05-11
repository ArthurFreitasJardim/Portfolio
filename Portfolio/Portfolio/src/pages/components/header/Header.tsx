import React, { useState, useEffect } from 'react';
import {
  Cabecalho,
  Arroba,
  MenuToggle,
  Hamburger,
  Menu,
  ItemMenu,
  LinkItemMenu,
} from './Header.styles';
import { Home } from 'lucide-react';

const Header: React.FC = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuAtivo((prev) => !prev);
  };

  const irParaSecao = (id: string) => {
    const secao = document.getElementById(id);
    if (secao) {
      secao.scrollIntoView({ behavior: 'smooth' });
      setMenuAtivo(false); 
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Cabecalho className={scrolled ? 'scrolled' : ''}>
      <Arroba>
        @arthur
  <div
    className={`icone-home ${scrolled ? 'icone-home-active' : ''}`}
    onClick={() => irParaSecao('apresentacao')}
  >
    <Home />
  </div>
</Arroba>

      <MenuToggle onClick={toggleMenu} aria-label="Abrir menu">
        <Hamburger />
      </MenuToggle>

      <Menu className={menuAtivo ? 'active' : ''}>
        <ItemMenu>
          <LinkItemMenu onClick={() => irParaSecao('about')}>Sobre</LinkItemMenu>
        </ItemMenu>
        <ItemMenu>
          <LinkItemMenu onClick={() => irParaSecao('skills')}>Competências</LinkItemMenu>
        </ItemMenu>
        <ItemMenu>
          <LinkItemMenu onClick={() => irParaSecao('projects')}>Projetos/Experiências</LinkItemMenu>
        </ItemMenu>
        <ItemMenu>
          <LinkItemMenu onClick={() => irParaSecao('contato')}>Contato</LinkItemMenu>
        </ItemMenu>
      </Menu>
    </Cabecalho>
  );
};

export default Header;