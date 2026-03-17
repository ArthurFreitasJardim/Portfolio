import React from 'react';
import { Calculator, Laptop2, ShoppingCart, Network, Github, ExternalLink } from 'lucide-react';
import { useTranslation } from "react-i18next";

import {
    ContainerProjetos,
    TituloSessao,
    GridCards,
    CardProjeto,
    IconeWrapper,
    BotoesContainer,
    LinkProjeto,
    GridExperiencias,
    CardExperiencia,
    ImagemExperiencia,
    ExpContent,
    SectionWrapper
} from './Projects.styles';

import LeaderRH from '../../../assets/leaderrh.jpg';
import CodeClub from '../../../assets/codeclublogo.jpg';
import Senior from "../../../assets/senior.png";

const Projects = () => {
    const { t } = useTranslation();

    const projetos = [
        {
            nome: "project_graph_name",
            descricao: "project_graph_desc",
            repositorio: 'https://github.com/ArthurFreitasJardim/biblioteca-grafos-algoritmos',
            icone: <Network size={32} />
        },
        {
            nome: "project_pharmacy_name",
            descricao: "project_pharmacy_desc",
            repositorio: 'https://github.com/seuuser/allin-store',
            icone: <ShoppingCart size={32} />
        },
        {
            nome: "project_nog_name",
            descricao: "project_nog_desc",
            demo: 'https://www.nogdigital.com.br',
            icone: <Laptop2 size={32} />
        },
        {
            nome: "project_calc_name",
            descricao: "project_calc_desc",
            demo: 'https://calculadora-iota-rosy.vercel.app',
            repositorio: 'https://github.com/ArthurFreitasJardim/Calculadora',
            icone: <Calculator size={32} />
        },
    ];

    const experiencias = [
        { nome: "exp_intern_name", descricao: "exp_intern_desc", imagem: LeaderRH },
        { nome: "exp_codeclub_name", descricao: "exp_codeclub_desc", imagem: CodeClub },
        { nome: "exp_consistema_name", descricao: "exp_consistema_desc", imagem: Senior },
    ];

    return (
        <ContainerProjetos id="projects">
            <SectionWrapper>
                <TituloSessao>
                    <span>/</span>{t("projects_title")}
                </TituloSessao>
                
                <GridCards>
                    {projetos.map((projeto, i) => (
                        <CardProjeto key={i}>
                            <IconeWrapper>{projeto.icone}</IconeWrapper>
                            <h3>{t(projeto.nome)}</h3>
                            <p>{t(projeto.descricao)}</p>
                            
                            <BotoesContainer>
                                {projeto.repositorio && (
                                    <LinkProjeto href={projeto.repositorio} target="_blank" rel="noopener noreferrer">
                                        <Github size={16} /> Code
                                    </LinkProjeto>
                                )}
                                {projeto.demo && (
                                    <LinkProjeto href={projeto.demo} target="_blank" rel="noopener noreferrer" primary>
                                        <ExternalLink size={16} /> Demo
                                    </LinkProjeto>
                                )}
                            </BotoesContainer>
                        </CardProjeto>
                    ))}
                </GridCards>
            </SectionWrapper>

            <SectionWrapper>
                <TituloSessao>
                    <span>/</span>{t("experience_title")}
                </TituloSessao>

                <GridExperiencias>
                    {experiencias.map((exp, i) => (
                        <CardExperiencia key={i}>
                            <ImagemExperiencia src={exp.imagem} alt={t(exp.nome)} />
                            <ExpContent>
                                <h3>{t(exp.nome)}</h3>
                                <p>{t(exp.descricao)}</p>
                            </ExpContent>
                        </CardExperiencia>
                    ))}
                </GridExperiencias>
            </SectionWrapper>
        </ContainerProjetos>
    );
};

export default Projects;