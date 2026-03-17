import React from 'react';
import { useTranslation } from "react-i18next";
import { 
    FaQuestionCircle, FaCommentDots, FaBook, FaPython, FaHtml5, FaCss3Alt, 
    FaSwift, FaReact, FaNodeJs, FaDatabase, FaGithub, FaGitAlt, FaFigma, 
    FaCloud, FaCommentAlt 
} from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiJavaLine, RiJavascriptFill, RiTeamLine } from 'react-icons/ri';
import { SiCplusplus, SiMongodb, SiPrisma } from 'react-icons/si';
import { DiScrum } from 'react-icons/di';
import { MdDataObject, MdViewKanban } from 'react-icons/md';
import { FaFlutter } from 'react-icons/fa6';
import { TbApi } from 'react-icons/tb';
import { IoLogoVercel } from 'react-icons/io5';

import {
    ContainerCompetencias,
    TituloCompetencias,
    ListaCompetencias,
    CardCompetencia,
    IconeWrapper,
    SkillInfo,
    ProgressBar,
    TituloComTooltip,
    Tooltip,
    SectionWrapper,
    CategoryTitle
} from './Skills.styles';

const Skills = () => {
    const { t } = useTranslation();

    const categories = [
        {
            title: "Linguagens",
            items: [
                { nome: 'TypeScript', nivel: 50, icone: BiLogoTypescript },
                { nome: 'JavaScript', nivel: 65, icone: RiJavascriptFill },
                { nome: 'Python', nivel: 30, icone: FaPython },
                { nome: 'C++', nivel: 20, icone: SiCplusplus },
                { nome: 'Swift', nivel: 10, icone: FaSwift },
                { nome: 'Java', nivel: 10, icone: RiJavaLine },
            ]
        },
        {
            title: "Web & Mobile",
            items: [
                { nome: 'React.js', nivel: 65, icone: FaReact },
                { nome: 'Node.js', nivel: 65, icone: FaNodeJs },
                { nome: 'HTML', nivel: 60, icone: FaHtml5 },
                { nome: 'CSS', nivel: 60, icone: FaCss3Alt },
                { nome: 'Flutter', nivel: 40, icone: FaFlutter },
            ]
        },
        {
            title: "Backend & Infra",
            items: [
                { nome: 'SQL', nivel: 70, icone: FaDatabase },
                { nome: 'Prisma ORM', nivel: 85, icone: SiPrisma },
                { nome: 'Mongo DB', nivel: 10, icone: SiMongodb },
                { nome: 'RESTful APIs', nivel: 50, icone: TbApi },
                { nome: 'Vercel', nivel: 80, icone: IoLogoVercel },
                { nome: 'Nuvem', nivel: 20, icone: FaCloud },
            ]
        },
        {
            title: "Processos & Design",
            items: [
                { nome: 'GitHub', nivel: 90, icone: FaGithub },
                { nome: 'Git', nivel: 90, icone: FaGitAlt },
                { nome: 'Figma', nivel: 70, icone: FaFigma },
                { nome: 'SCRUM', nivel: 85, icone: DiScrum },
                { nome: 'Kanban', nivel: 90, icone: MdViewKanban },
                { nome: 'POO', nivel: 60, icone: MdDataObject },
            ]
        }
    ];

    const softSkills = [
        { nome: "soft_communication", desc: "soft_communication_desc", icone: FaCommentDots },
        { nome: "soft_team", desc: "soft_team_desc", icone: RiTeamLine },
        { nome: "soft_learning", desc: "soft_learning_desc", icone: FaBook },
    ];

    return (
        <ContainerCompetencias id="skills">
            <SectionWrapper>
                <TituloCompetencias>
                    <TituloComTooltip>
                        {t("skills_title")}
                        <FaQuestionCircle size={16} style={{ opacity: 0.5 }} />
                        <Tooltip>{t("skills_tooltip")}</Tooltip>
                    </TituloComTooltip>
                </TituloCompetencias>

                {categories.map((cat, idx) => (
                    <div key={idx} style={{ marginBottom: '3rem' }}>
                        <CategoryTitle>{cat.title}</CategoryTitle>
                        <ListaCompetencias>
                            {cat.items.map((item, i) => (
                                <CardCompetencia key={i}>
                                    <IconeWrapper><item.icone size={26} /></IconeWrapper>
                                    <SkillInfo>
                                        <span>{item.nome}</span>
                                        <ProgressBar width={item.nivel} />
                                    </SkillInfo>
                                </CardCompetencia>
                            ))}
                        </ListaCompetencias>
                    </div>
                ))}
            </SectionWrapper>

            <SectionWrapper>
                <CategoryTitle style={{ fontSize: '1.5rem', border: 'none', color: '#B0D7FE' }}>
                    {t("Soft Skills")}
                </CategoryTitle>
                <ListaCompetencias>
                    {softSkills.map((item, index) => (
                        <CardCompetencia key={index}>
                            <IconeWrapper><item.icone size={26} /></IconeWrapper>
                            <SkillInfo>
                                <span>{t(item.nome)}</span>
                                <small>{t(item.desc)}</small>
                            </SkillInfo>
                        </CardCompetencia>
                    ))}
                </ListaCompetencias>
            </SectionWrapper>
        </ContainerCompetencias>
    );
};

export default Skills;