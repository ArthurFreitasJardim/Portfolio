import { Calculator, Laptop2, ShoppingCart, Network } from 'lucide-react'
import { useTranslation } from "react-i18next";

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
import Senior from "../../../assets/senior.png"

const Projects = () => {

    const { t } = useTranslation();

    const projetos = [
        {
            nome: "project_graph_name",
            descricao: "project_graph_desc",
            repositorio: 'https://github.com/ArthurFreitasJardim/biblioteca-grafos-algoritmos',
            icone: <Network size={48} />
        },
        {
            nome: "project_pharmacy_name",
            descricao: "project_pharmacy_desc",
            repositorio: 'https://github.com/seuuser/allin-store',
            icone: <ShoppingCart size={48} />
        },
        {
            nome: "project_nog_name",
            descricao: "project_nog_desc",
            demo: 'https://www.nogdigital.com.br',
            icone: <Laptop2 size={48} />
        },
        {
            nome: "project_calc_name",
            descricao: "project_calc_desc",
            demo: 'https://calculadora-iota-rosy.vercel.app',
            repositorio: 'https://github.com/ArthurFreitasJardim/Calculadora',
            icone: <Calculator size={48} />
        },
    ]

    const experiencias = [
        {
            nome: "exp_intern_name",
            descricao: "exp_intern_desc",
            imagem: LeaderRH,
        },
        {
            nome: "exp_codeclub_name",
            descricao: "exp_codeclub_desc",
            imagem: CodeClub,
        },
        {
            nome: "exp_consistema_name",
            descricao: "exp_consistema_desc",
            imagem: Senior,
        },
    ]

    return (
        <ContainerProjetos id="projects">

            <TituloSessao>{t("projects_title")}</TituloSessao>

            <GridCards>
                {projetos.map((projeto, i) => (
                    <CardProjeto key={i}>
                        <IconeProjeto>{projeto.icone}</IconeProjeto>

                        <h3>{t(projeto.nome)}</h3>

                        <p>{t(projeto.descricao)}</p>

                        <div>

                            {projeto.demo && !projeto.repositorio && (
                                <BotaoProjeto
                                    href={projeto.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t("demo")}
                                </BotaoProjeto>
                            )}

                            {projeto.repositorio && !projeto.demo && (
                                <BotaoProjeto
                                    href={projeto.repositorio}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t("repository")}
                                </BotaoProjeto>
                            )}

                            {projeto.demo && projeto.repositorio && (
                                <>
                                    <BotaoProjeto
                                        href={projeto.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {t("demo")}
                                    </BotaoProjeto>

                                    <BotaoProjeto
                                        href={projeto.repositorio}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {t("repository")}
                                    </BotaoProjeto>
                                </>
                            )}

                        </div>
                    </CardProjeto>
                ))}
            </GridCards>

            <TituloSessao>{t("experience_title")}</TituloSessao>

            <GridExperiencias>
                {experiencias.map((exp, i) => (
                    <CardExperiencia key={i}>
                        <ImagemExperiencia src={exp.imagem} alt={t(exp.nome)} />

                        <div>
                            <h3>{t(exp.nome)}</h3>
                            <p>{t(exp.descricao)}</p>
                        </div>

                    </CardExperiencia>
                ))}
            </GridExperiencias>

        </ContainerProjetos>
    )
}

export default Projects