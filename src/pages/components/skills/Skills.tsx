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

const softSkills: Competencia[] = [
    { nome: 'Comunicação', nivel: 'Facilidade em Comunicar', icone: FaCommentDots },
    { nome: 'Equipe', nivel: 'Gosto de Trabalhar em equipe', icone: RiTeamLine },
    { nome: 'Aprendizado', nivel: 'Facilidade no aprendizado', icone: FaBook },
]

export const Skills = () => {
    return (
        <ContainerCompetencias id="skills">
            <TituloCompetencias>
                <TituloComTooltip>
                    Competências
                    <FaQuestionCircle size={18} color={colors.destaque} />
                    <Tooltip>
                        Experiências com 1 de conhecimento são tecnologias que tive um contato muito breve, seja em aulas práticas ou apenas visualizando outras pessoas utilizando 
                    </Tooltip>
                </TituloComTooltip>
            </TituloCompetencias>
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

            <TituloCompetencias style={{ marginTop: '1rem' }}>--</TituloCompetencias>


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
