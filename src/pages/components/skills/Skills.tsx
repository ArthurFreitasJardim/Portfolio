import type { IconType } from 'react-icons'
import { FaQuestionCircle } from 'react-icons/fa'
import {
    FaBook,
    FaCloud,
    FaCommentDots,
    FaCss3Alt, FaDatabase, FaFigma, FaGitAlt, FaGithub, FaHtml5,
    FaNodeJs, FaPython, FaReact, FaSwift
} from 'react-icons/fa'
import { BiLogoTypescript } from 'react-icons/bi'
import { RiJavaLine, RiJavascriptFill, RiTeamLine } from 'react-icons/ri'
import { SiCplusplus, SiMongodb, SiPrisma } from 'react-icons/si'
import { DiScrum } from 'react-icons/di'
import { MdDataObject, MdViewKanban } from 'react-icons/md'
import { FaFlutter } from 'react-icons/fa6'
import { TbApi } from 'react-icons/tb'
import { IoLogoVercel } from 'react-icons/io5'
import { useTranslation } from "react-i18next";

import {
    ContainerCompetencias,
    TituloCompetencias,
    ListaCompetencias,
    CardCompetencia,
    NomeCompetencia,
    InfoHover,
    Nivel,
    TituloComTooltip,
    Tooltip
} from './Skills.styles'

const colors = {
    background: '#18181B',
    primary: '#3f64b3',
    destaque: '#B0D7FE',
    white: '#ffffff',
    highlight2: '#BCD1DD',
}

interface Competencia {
    nome: string
    nivel?: string
    icone?: IconType
}

const competencias: Competencia[] = [
    { nome: 'TypeScript', nivel: '50', icone: BiLogoTypescript },
    { nome: 'JavaScript', nivel: '65', icone: RiJavascriptFill },
    { nome: 'Python', nivel: '30', icone: FaPython },
    { nome: 'C++', nivel: '20', icone: SiCplusplus },
    { nome: 'HTML', nivel: '60', icone: FaHtml5 },
    { nome: 'CSS', nivel: '60', icone: FaCss3Alt },
    { nome: 'Swift', nivel: '10', icone: FaSwift },
    { nome: 'Java', nivel: '10', icone: RiJavaLine },
    { nome: 'React.js', nivel: '65', icone: FaReact },
    { nome: 'Node.js', nivel: '65', icone: FaNodeJs },
    { nome: 'SQL', nivel: '70', icone: FaDatabase },
    { nome: 'Prisma ORM', nivel: '85', icone: SiPrisma },
    { nome: 'Mongo DB', nivel: '1', icone: SiMongodb },
    { nome: 'GitHub', nivel: '90', icone: FaGithub },
    { nome: 'Git', nivel: '90', icone: FaGitAlt },
    { nome: 'Figma', nivel: '70', icone: FaFigma },
    { nome: 'SCRUM', nivel: '85', icone: DiScrum },
    { nome: 'Kanban', nivel: '90', icone: MdViewKanban },
    { nome: 'Flutter', nivel: '40', icone: FaFlutter },
    { nome: 'POO', nivel: '60', icone: MdDataObject },
    { nome: 'RESTful APIs', nivel: '50', icone: TbApi },
    { nome: 'Vercel', nivel: '80', icone: IoLogoVercel },
    { nome: 'Nuvem', nivel: '20', icone: FaCloud },
]

export const Skills = () => {

    const { t } = useTranslation();

    const softSkills: Competencia[] = [
        { nome: "soft_communication", nivel: "soft_communication_desc", icone: FaCommentDots },
        { nome: "soft_team", nivel: "soft_team_desc", icone: RiTeamLine },
        { nome: "soft_learning", nivel: "soft_learning_desc", icone: FaBook },
    ];

    return (
        <ContainerCompetencias id="skills">
            <TituloCompetencias>
                <TituloComTooltip>
                    {t("skills_title")}
                    <FaQuestionCircle size={18} color={colors.destaque} />
                    <Tooltip>
                        {t("skills_tooltip")}
                    </Tooltip>
                </TituloComTooltip>
            </TituloCompetencias>

            <ListaCompetencias>
                {competencias.map((item, index) => (
                    <CardCompetencia key={index}>
                        <NomeCompetencia>
                            {item.icone && (
                                <item.icone
                                    size={25}
                                    color={colors.primary}
                                    style={{ marginRight: '8px' }}
                                />
                            )}
                            {item.nome}
                        </NomeCompetencia>
                        <InfoHover>
                            <p>{t("knowledge")}</p>
                            <Nivel nivel={Number(item.nivel) ?? 0} />
                        </InfoHover>
                    </CardCompetencia>
                ))}
            </ListaCompetencias>

            <TituloCompetencias style={{ marginTop: '1rem' }}>
                {t("soft_skills")}
            </TituloCompetencias>

            <ListaCompetencias>
                {softSkills.map((item, index) => (
                    <CardCompetencia key={index}>
                        <NomeCompetencia>
                            {item.icone && (
                                <item.icone
                                    size={25}
                                    color={colors.primary}
                                    style={{ marginRight: '8px' }}
                                />
                            )}
                            {t(item.nome)}
                        </NomeCompetencia>
                        <InfoHover>
                            <p style={{ paddingTop: '1rem' }}>
                                {t(item.nivel ?? "")}
                            </p>
                        </InfoHover>
                    </CardCompetencia>
                ))}
            </ListaCompetencias>

        </ContainerCompetencias>
    )
}

export default Skills