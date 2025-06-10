import Grafos from '../../../assets/grafos.jpg'
import LeaderRH from '../../../assets/leaderrh.jpg'
import CodeClub from '../../../assets/codeclublogo.jpg'

import {
    BotaoProjeto,
    CardExperiencia,
    CardProjeto,
    ContainerProjetos,
    GridCards,
    ImagemExperiencia,
    ImagemProjeto,
    TituloSessao
} from './Projects.styles'

const Projects = () => {
    const projetos = [
        {
            nome: 'Projeto Grafos',
            descricao: 'Aplicação para manipulação e visualização de grafos feita em Python',
            demo: 'https://github.com/ArthurFreitasJardim/biblioteca-grafos-algoritmos',
            repositorio: 'https://github.com/ArthurFreitasJardim/biblioteca-grafos-algoritmos',
            imagem: Grafos,
        },
        {
            nome: 'Drogaria Iporanga',
            descricao: 'E-commerce feito para fármacia, utiliza banco de dados e comunicação por API',
            demo: 'https://allin.vercel.app',
            repositorio: 'https://github.com/seuuser/allin-store',
            imagem: '',
        },
    ]

    const experiencias = [
        {
            nome: 'Estágio em TI',
            descricao: 'Atuei como estagiário na manutenção de equipamentos,e principalmente na arquiteturação de nuvem',
            imagem: LeaderRH,
        },
        {
            nome: 'Voluntário Code Club',
            descricao: 'Auxiliei nas aula de introdução à programação e lógica de programação para crianças de 9 a 15 anos através do python e de scratch 2.',
            imagem: CodeClub,
        },
    ]

    return (
        <ContainerProjetos id="projects">
            <TituloSessao>Projetos</TituloSessao>
            <GridCards>
                {projetos.map((projeto, i) => (
                    <CardProjeto key={i}>
                        <ImagemProjeto src={projeto.imagem} alt={projeto.nome} />
                        <h3>{projeto.nome}</h3>
                        <p>{projeto.descricao}</p>
                        <div>
                            <BotaoProjeto href={projeto.demo} target="_blank" rel="noopener noreferrer">Demo</BotaoProjeto>
                            <BotaoProjeto href={projeto.repositorio} target="_blank" rel="noopener noreferrer">Repositório</BotaoProjeto>
                        </div>
                    </CardProjeto>
                ))}
            </GridCards>

            <TituloSessao>Experiências</TituloSessao>
            <GridCards>
                {experiencias.map((exp, i) => (
                    <CardExperiencia key={i}>
                        <ImagemExperiencia src={exp.imagem} alt={exp.nome} />
                        <div>
                            <h3>{exp.nome}</h3>
                            <p>{exp.descricao}</p>
                        </div>
                    </CardExperiencia>
                ))}
            </GridCards>
        </ContainerProjetos>
    )
}

export default Projects