import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pt: {
    translation: {
      about: "Sobre",
      skills: "Competências",
      projects: "Projetos/Experiências",

      about_title: "-Sobre Mim-",

      about_p1:
        "Oi! Eu sou o Arthur, tenho 20 anos e moro em Belo Horizonte, MG. Sou estudante de Engenharia de Software, atualmente cursando o 5º período no turno noturno. Desde o início da graduação, venho me dedicando ao máximo para aprofundar meus conhecimentos em programação e tecnologia, sempre buscando os melhores resultados em cada projeto ou desafio que enfrento.",

      about_p2:
        "Antes da faculdade, tive a oportunidade de cursar o ensino médio técnico em programação no colégio COTEMIG. Foi ali que dei meus primeiros passos no mundo da tecnologia, aprendendo linguagens e ferramentas como HTML, CSS, JavaScript, Python, Java, SQL, Swift e C++. Essa base sólida me preparou muito bem para a graduação e me ajudou a entender com mais facilidade os conceitos mais avançados que estudo hoje.",

      about_p3:
        "Além da formação, também tive algumas experiências práticas que reforçaram minha paixão pela área. Atuei durante dois meses como monitor no projeto CODECLUB, onde ensinei o básico sobre programação e introdução à lógica para crianças de 9 a 15 anos. Além disso, atuei por um mês na empresa LEADER-RH onde realizei o estudo para a implementação da nuvem na empresa.",

      about_p4:
        "Sou uma pessoa curiosa, prática e apaixonada por inovação. Gosto de pensar em soluções que realmente façam diferença no dia a dia das pessoas. Nos meus momentos livres, estou quase sempre envolvido com futebol, videogame e música. Seja bem-vindo(a)!",

      skills_title: "Competências",
      skills_tooltip:
        "Experiências com 1 de conhecimento são tecnologias que tive um contato muito breve, seja em aulas práticas ou apenas visualizando outras pessoas utilizando",

      knowledge: "Conhecimento",

      soft_communication: "Comunicação",
      soft_team: "Equipe",
      soft_learning: "Aprendizado",

      soft_communication_desc: "Facilidade em Comunicar",
      soft_team_desc: "Gosto de Trabalhar em equipe",
      soft_learning_desc: "Facilidade no aprendizado",

      projects_title: "Projetos",
      experience_title: "Experiências",

      demo: "Demo",
      repository: "Repositório",

      project_graph_name: "Projeto Grafos",
      project_graph_desc: "Aplicação para manipulação e visualização de grafos feita em Python",

      project_pharmacy_name: "Drogaria Iporanga",
      project_pharmacy_desc: "E-commerce feito para farmácia, utiliza banco de dados e comunicação por API",

      project_nog_name: "NOG Digital",
      project_nog_desc: "Site em Typescript e React produzido para minha empresa em parceria com um amigo, oferecendo soluções digitais",

      project_calc_name: "Calculadora Básica",
      project_calc_desc: "Calculadora semelhante à do iPhone construída com HTML, CSS e JavaScript",

      exp_intern_name: "Estágio em TI",
      exp_intern_desc: "Atuei na manutenção de equipamentos e principalmente na arquitetura de nuvem",

      exp_codeclub_name: "Voluntário Code Club",
      exp_codeclub_desc: "Auxiliei em aulas de programação para crianças utilizando Python e Scratch",

      exp_consistema_name: "Consistema",
      exp_consistema_desc: "Atuo na elaboração de planilhas, atendimento a clientes e identificação de bugs", 
      about_highlight: "Focado em desenvolvimento full-stack e criação de soluções digitais eficientes."
    }
  },

  en: {
    translation: {
      about: "About",
      skills: "Skills",
      projects: "Projects/Experience",

      about_title: "-About Me-",

      about_p1:
        "Hi! I'm Arthur, I'm 20 years old and I live in Belo Horizonte, Brazil. I'm a Software Engineering student currently in my 5th semester studying at night. Since the beginning of my degree, I've dedicated myself to deepening my knowledge in programming and technology, always aiming to achieve the best results in every project or challenge I face.",

      about_p2:
        "Before university, I studied technical high school in programming at COTEMIG. That was where I took my first steps into the technology world, learning languages and tools such as HTML, CSS, JavaScript, Python, Java, SQL, Swift and C++. This strong foundation prepared me very well for university and helped me understand more advanced concepts more easily.",

      about_p3:
        "In addition to my academic background, I had practical experiences that strengthened my passion for technology. I worked for two months as a mentor in the CODECLUB project, where I taught programming basics and logic to children aged 9 to 15. I also worked for one month at LEADER-RH, where I studied the implementation of cloud computing for the company.",

      about_p4:
        "I am a curious, practical person passionate about innovation. I enjoy thinking about solutions that truly make a difference in people's daily lives. In my free time, I am usually involved with football, video games and music. Welcome!",

      skills_title: "Skills",
      skills_tooltip:
        "Skills with level 1 indicate technologies I had very brief contact with, either through practical classes or by observing others using them.",

      knowledge: "Knowledge",

      soft_communication: "Communication",
      soft_team: "Teamwork",
      soft_learning: "Learning",

      soft_communication_desc: "Good communication skills",
      soft_team_desc: "Enjoy working in teams",
      soft_learning_desc: "Fast learner",

      projects_title: "Projects",
      experience_title: "Experience",

      demo: "Demo",
      repository: "Repository",

      project_graph_name: "Graph Project",
      project_graph_desc: "Application for graph manipulation and visualization built with Python",

      project_pharmacy_name: "Iporanga Pharmacy",
      project_pharmacy_desc: "E-commerce built for a pharmacy using database and API communication",

      project_nog_name: "NOG Digital",
      project_nog_desc: "Website built with Typescript and React for my company in partnership with a friend",

      project_calc_name: "Basic Calculator",
      project_calc_desc: "Calculator similar to the iPhone one built with HTML, CSS and JavaScript",

      exp_intern_name: "IT Intern",
      exp_intern_desc: "Worked with equipment maintenance and mainly cloud architecture",

      exp_codeclub_name: "Code Club Volunteer",
      exp_codeclub_desc: "Helped teach programming to children using Python and Scratch",

      exp_consistema_name: "Consistema",
      exp_consistema_desc: "Work with spreadsheets, customer support and bug identification",
      
      about_highlight: "Focused on full-stack development and building efficient digital solutions."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;