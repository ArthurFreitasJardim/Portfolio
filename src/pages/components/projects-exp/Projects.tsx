import {Calculator , Laptop2, ShoppingCart, Network } from 'lucide-react'

import {
    BotaoProjeto,
    CardExperiencia,
    CardProjeto,
    ContainerProjetos,
    GridCards,
    IconeProjeto,
    GridExperiencias,
    ImagemExperiencia,
    TituloSessao
} from './Projects.styles'

import LeaderRH from '../../../assets/leaderrh.jpg'
import CodeClub from '../../../assets/codeclublogo.jpg'

const Projects = () => {
    const projetos = [
        {
            nome: 'Projeto Grafos',
            descricao: 'Aplicação para manipulação e visualização de grafos feita em Python',
            repositorio: 'https://github.com/ArthurFreitasJardim/biblioteca-grafos-algoritmos',
            icone: <Network size={48} />
        },
        {
            nome: 'Drogaria Iporanga',
            descricao: 'E-commerce feito para fármacia, utiliza banco de dados e comunicação por API',
            repositorio: 'https://github.com/seuuser/allin-store',
            icone: <ShoppingCart size={48} />
        },
        {
            nome: 'NOG Digital',
            descricao: 'Site em Typescript e React, produzido para minha empresa em parceria com um amigo, onde oferecemos soluções digitais',
            demo: 'https://www.nogdigital.com.br',
            icone: <Laptop2 size={48} />
        },
        {
            nome: 'Calculadora Básica',
            descricao: 'Uma calculadora básica, semelhante à do iPhone, foi construída utilizando HTML, CSS e JavaScript. ',
            demo: 'https://calculadora-iota-rosy.vercel.app',
            repositorio: 'https://github.com/ArthurFreitasJardim/Calculadora',
            icone: <Calculator size={48} />
        },
    ]

    const experiencias = [
        {
            nome: 'Estágio em TI',
            descricao: 'Atuei como estagiário na manutenção de equipamentos e principalmente na arquiteturação de nuvem.',
            imagem: LeaderRH,
        },
        {
            nome: 'Voluntário Code Club',
            descricao: 'Auxiliei nas aulas de introdução à programação para crianças, usando Python e Scratch 2.',
            imagem: CodeClub,
        },
    ]

    return (
        <ContainerProjetos id="projects">
            <TituloSessao>Projetos</TituloSessao>
            <GridCards>
        {projetos.map((projeto, i) => (
            <CardProjeto key={i}>
                <IconeProjeto>{projeto.icone}</IconeProjeto>
                <h3>{projeto.nome}</h3>
                <p>{projeto.descricao}</p>
                <div>
                    {projeto.demo && !projeto.repositorio && (
                        <BotaoProjeto href={projeto.demo} target="_blank" rel="noopener noreferrer">
                            Demo
                        </BotaoProjeto>
                    )}
                    {projeto.repositorio && !projeto.demo && (
                        <BotaoProjeto href={projeto.repositorio} target="_blank" rel="noopener noreferrer">
                            Repositório
                        </BotaoProjeto>
                    )}
                    {projeto.demo && projeto.repositorio && (
                        <>
                            <BotaoProjeto href={projeto.demo} target="_blank" rel="noopener noreferrer">
                                Demo
                            </BotaoProjeto>
                            <BotaoProjeto href={projeto.repositorio} target="_blank" rel="noopener noreferrer">
                                Repositório
                            </BotaoProjeto>
                        </>
                    )}
                </div>
            </CardProjeto>
        ))}
    </GridCards>

            <TituloSessao>Experiências</TituloSessao>
            <GridExperiencias>
                {experiencias.map((exp, i) => (
                    <CardExperiencia key={i}>
                        <ImagemExperiencia src={exp.imagem} alt={exp.nome} />
                        <div>
                            <h3>{exp.nome}</h3>
                            <p>{exp.descricao}</p>
                        </div>
                    </CardExperiencia>
                ))}
            </GridExperiencias>
        </ContainerProjetos>
    )
}

export default Projects
