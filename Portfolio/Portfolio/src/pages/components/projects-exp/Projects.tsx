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
            nome: 'Petshop Finder',
            descricao: 'Aplicação para localizar petshops próximos com React e Node.js.',
            demo: 'https://petshopfinder.vercel.app',
            repositorio: 'https://github.com/seuuser/petshop-finder',
            imagem: '/imgs/petshopfinder.png',
        },
        {
            nome: 'All-In Store',
            descricao: 'Loja virtual desenvolvida com foco em performance e UX.',
            demo: 'https://allin.vercel.app',
            repositorio: 'https://github.com/seuuser/allin-store',
            imagem: '/imgs/allin.png',
        },
    ]

    const experiencias = [
        {
            nome: 'Estágio em Desenvolvimento',
            descricao: 'Atuei como estagiário desenvolvendo soluções web com React e Spring Boot.',
            imagem: '/imgs/empresa1.png',
        },
        {
            nome: 'Voluntário ONG Dog Anjos Cat',
            descricao: 'Participei do desenvolvimento de um sistema para gestão de adoções e voluntários.',
            imagem: '/imgs/ong.png',
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