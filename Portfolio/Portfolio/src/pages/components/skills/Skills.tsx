import type { IconType } from 'react-icons'
import {
    FaBook,
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

import {
    ContainerCompetencias,
    TituloCompetencias,
    ListaCompetencias,
    CardCompetencia,
    NomeCompetencia,
    InfoHover,
    Nivel
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
    { nome: 'TypeScript', nivel: '80', icone: BiLogoTypescript },
    { nome: 'JavaScript', nivel: '85', icone: RiJavascriptFill },
    { nome: 'Python', nivel: '70', icone: FaPython },
    { nome: 'C++', nivel: '30', icone: SiCplusplus },
    { nome: 'HTML', nivel: '30', icone: FaHtml5 },
    { nome: 'CSS', nivel: '30', icone: FaCss3Alt },
    { nome: 'Swift', nivel: '20', icone: FaSwift },
    { nome: 'Java', nivel: '30', icone: RiJavaLine },
    { nome: 'React.js', nivel: '85', icone: FaReact },
    { nome: 'Node.js', nivel: '75', icone: FaNodeJs },
    { nome: 'SQL', nivel: '70', icone: FaDatabase },
    { nome: 'Prisma ORM', nivel: '75', icone: SiPrisma },
    { nome: 'Mongo DB', nivel: '45', icone: SiMongodb },
    { nome: 'GitHub', nivel: '90', icone: FaGithub },
    { nome: 'Git', nivel: '90', icone: FaGitAlt },
    { nome: 'Figma', nivel: '60', icone: FaFigma },
    { nome: 'SCRUM', nivel: '65', icone: DiScrum },
    { nome: 'Kanban', nivel: '70', icone: MdViewKanban },
    { nome: 'Flutter', nivel: '70', icone: FaFlutter },
    { nome: 'POO', nivel: '70', icone: MdDataObject },
    { nome: 'RESTful APIs', nivel: '70', icone: TbApi },
]

const softSkills: Competencia[] = [
    { nome: 'Comunicação',nivel: 'Facilidade em Comunicar', icone: FaCommentDots},
    { nome: 'Equipe', nivel: 'Gosto de Trabalhar em equipe',icone: RiTeamLine },
    { nome: 'Aprendizado', nivel: 'Facilidade no aprendizado',icone: FaBook},
]

export const Skills = () => {
    return (
        <ContainerCompetencias id="skills">
            <TituloCompetencias>Competências</TituloCompetencias>
            <ListaCompetencias> 
                {competencias.map((item, index) => (
                    <CardCompetencia key={index}>
                        <NomeCompetencia>
                            {item.icone && <item.icone size={25} color={colors.primary} style={{ marginRight: '8px' }} />}
                            {item.nome}
                        </NomeCompetencia>
                        <InfoHover>
                            <p>Conhecimento</p>
                            <Nivel nivel={Number(item.nivel) ?? 0} />
                        </InfoHover>
                    </CardCompetencia>
                ))}
            </ListaCompetencias>

            <TituloCompetencias style={{ marginTop: '1rem' }}></TituloCompetencias>

            <ListaCompetencias>
                {softSkills.map((item, index) => (
                    <CardCompetencia key={index}>
                        <NomeCompetencia>
                            {item.icone && <item.icone size={25} color={colors.primary} style={{ marginRight: '8px' }} />}
                            {item.nome}
                        </NomeCompetencia>
                        <InfoHover>
                            <p style={{ paddingTop: '1rem' }}>{item.nivel}</p>
                        </InfoHover>
                    </CardCompetencia>
                ))}
            </ListaCompetencias>
        </ContainerCompetencias>
    )
}

export default Skills
