import React from 'react';
import { FooterContainer, FooterText, SocialIcons } from './Footer.styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© Desenvolvido por Arthur Freitas - 2025</FooterText>
      <SocialIcons>
        <a
          className="icone-contato"
          href="mailto:vitor.lucio.0916@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Ícone de e-mail */}
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>

        <a
          href="https://github.com/VitorLucioOliveira"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Ícone GitHub */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/vitor-lucio-oliveira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Ícone LinkedIn */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>

        <a
          href="https://wa.me/5531988277528"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Ícone WhatsApp */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.52 3.48A11.76 11.76 0 0 0 12 0a11.94 11.94 0 0 0-12 12 11.87 11.87 0 0 0 1.8 6.36L0 24l5.64-1.8A11.87 11.87 0 0 0 12 24a11.94 11.94 0 0 0 11.76-11.76 11.75 11.75 0 0 0-3.24-8.76zM12 21.6a9.6 9.6 0 0 1-4.8-1.32l-.36-.24-3.96 1.2 1.2-3.96-.24-.36A9.6 9.6 0 1 1 12 21.6zm4.56-7.2c-.24-.12-1.44-.72-1.68-.84s-.36-.12-.48.12-.48.6-.6.72-.24.12-.48 0-1.2-.36-2.28-1.32a8.6 8.6 0 0 1-1.56-1.92c-.12-.24 0-.36.12-.48s.24-.36.36-.48a1.47 1.47 0 0 0 .24-.48.51.51 0 0 0 0-.48c0-.12-.48-1.2-.6-1.56s-.36-.36-.48-.36-.24 0-.36 0a.7.7 0 0 0-.48.24A3.06 3.06 0 0 0 7.2 8.4a3.57 3.57 0 0 0-.48 1.8 6.3 6.3 0 0 0 1.92 3.6 9.83 9.83 0 0 0 6 3c.6.12 1.2.12 1.68.12a3.36 3.36 0 0 0 2.4-1.2 1.4 1.4 0 0 0 .24-1.2c-.12-.24-.36-.36-.6-.48z"/>
          </svg>
        </a>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;