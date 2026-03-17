import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, ArrowDown } from 'lucide-react';
import Curriculo from '../../../assets/Currículo_ArthurFreitas.pdf';

import {
  ApresentacaoSection,
  Titulo,
  RedesSociais,
  BotaoDownload,
  IconeContato,
  SetaContainer,
  ConteudoCentral,
  CanvasWrapper
} from './Apresentacao.styles';

const Apresentacao: React.FC<{ mostrar: boolean }> = ({ mostrar }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 }); // Posição inicial fora da tela

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number; y: number; vx: number; vy: number;
      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }
    }

    const init = () => {
      particles = Array.from({ length: 90 }, () => new Particle());
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(63, 100, 179, 0.4)";
      ctx.strokeStyle = "rgba(63, 100, 179, 0.15)";
      ctx.lineWidth = 0.8;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        
        // Desenha o ponto
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, 1.2, 0, Math.PI * 2);
        ctx.fill();

        // Conexão entre partículas
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // --- LÓGICA DO CURSOR TRACKER ---
        const distMouse = Math.hypot(p1.x - mouse.current.x, p1.y - mouse.current.y);
        if (distMouse < 180) { // Distância de atração do mouse
          ctx.strokeStyle = `rgba(176, 215, 254, ${1 - distMouse / 180})`; // Cor do destaque (destaque)
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.stroke();
          ctx.strokeStyle = "rgba(63, 100, 179, 0.15)"; // Volta para a cor padrão
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    
    resize();
    init();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <ApresentacaoSection id="apresentacao">
      <CanvasWrapper>
        <canvas ref={canvasRef} />
      </CanvasWrapper>

      <ConteudoCentral
        initial={{ opacity: 0, y: 20 }}
        animate={mostrar ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="pre-titulo">/developer/portfolio</div>
        <Titulo>&lt;Arthur Freitas /&gt;</Titulo>
        <p className="subtitulo">Desenvolvedor Full Stack & Soluções Digitais</p>

        <RedesSociais>
          {[
            { Icon: Mail, href: "mailto:arthurjardimfreitas@gmail.com" },
            { Icon: Github, href: "https://github.com/ArthurFreitasJardim" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/arthur-freitas-jardim-075a95289/" },
            { Icon: Phone, href: "https://wa.me/5531982169130" }
          ].map((item, index) => (
            <IconeContato 
              key={index} 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer"
              as={motion.a}
              whileHover={{ y: -5, color: "#B0D7FE" }}
            >
              <item.Icon size={22} />
            </IconeContato>
          ))}
        </RedesSociais>

        <BotaoDownload 
          href={Curriculo} 
          download="Curriculo_Arthur_Freitas.pdf"
          as={motion.a}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
        </BotaoDownload>
      </ConteudoCentral>

      <SetaContainer onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <ArrowDown size={30} />
      </SetaContainer>
    </ApresentacaoSection>
  );
};

export default Apresentacao;