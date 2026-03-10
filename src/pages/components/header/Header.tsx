import React, { useState, useEffect } from 'react';
import {
  Cabecalho,
  Arroba,
  MenuToggle,
  Hamburger,
  Menu,
  ItemMenu,
  LinkItemMenu,
  LanguageToggle,
  LanguageSwitch,
} from './Header.styles';
import { Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import brFlag from "../../../assets/br.png";
import usFlag from "../../../assets/us.png";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("pt");

  const toggleLanguage = () => {
    const newLang = language === "pt" ? "en" : "pt";
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const isPT = i18n.language === "pt";
const isEN = i18n.language === "en";

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
    const onScroll = () => {
      const apresentacao = document.getElementById('apresentacao');
      if (!apresentacao) return;

      const bounds = apresentacao.getBoundingClientRect();
      setScrolled(bounds.bottom <= 0);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Cabecalho className={scrolled ? 'scrolled' : ''}>
      <Arroba>
        @arthur

        <LanguageSwitch>
  <img
    src={brFlag}
    alt="Português"
    onClick={() => i18n.changeLanguage("pt")}
    className={isPT ? "flag active" : "flag"}
  />

  <img
    src={usFlag}
    alt="English"
    onClick={() => i18n.changeLanguage("en")}
    className={isEN ? "flag active" : "flag"}
  />
</LanguageSwitch>

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
          <LinkItemMenu onClick={() => irParaSecao('about')}>
            {t('about')}
          </LinkItemMenu>
        </ItemMenu>
        <ItemMenu>
          <LinkItemMenu onClick={() => irParaSecao('skills')}>{t('skills')}</LinkItemMenu>
        </ItemMenu>
        <ItemMenu>
          <LinkItemMenu onClick={() => irParaSecao('projects')}>{t('projects')}</LinkItemMenu>
        </ItemMenu>
      </Menu>
    </Cabecalho>
  );
};

export default Header;
