import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, 'Informe seu nome completo'),
  email: z.string().email('Informe um e-mail válido'),
  message: z.string().min(10, 'Escreva uma mensagem com ao menos 10 caracteres'),
})

export type ContactFormValues = z.infer<typeof contactSchema>

export const heroStats = [
  { label: 'Front-end', value: 'React • Vue • Angular' },
  { label: 'Projetos e iniciativas', value: '4+' },
  { label: 'Hackathons e eventos', value: '6+' },
]

export const skills = [
  {
    name: 'Interfaces web e produtos digitais',
    level: 'Intermediário',
    description:
      'Construo interfaces responsivas, acessíveis e com foco em clareza, performance e experiência de uso.',
    tags: ['React', 'Vue', 'Angular', 'UX'],
    icon: 'ui',
  },
  {
    name: 'Arquitetura Front-End',
    level: 'Intermediário',
    description:
      'Organizo aplicações com componentização, estrutura bem definida e pensamento voltado à escalabilidade.',
    tags: ['TypeScript', 'Componentização', 'Clean Code'],
    icon: 'architecture',
  },
  {
    name: 'Automação e análise de dados',
    level: 'Intermediário',
    description:
      'Aplicação de automação e análise de dados em contextos acadêmicos e institucionais para otimizar processos.',
    tags: ['Google Apps Script', 'Dados', 'Processos'],
    icon: 'quality',
  },
  {
    name: 'Pesquisa, inovação e impacto',
    level: 'Intermediário',
    description:
      'Atuo em projetos que unem tecnologia, pesquisa e soluções com aplicação prática.',
    tags: ['PDI', 'Inovação', 'Pesquisa'],
    icon: 'performance',
  },
  {
    name: 'Experiência em movimento',
    level: 'Básico',
    description:
      'Uso micro animações e transições para elevar a percepção de valor e tornar a interface mais viva.',
    tags: ['Framer Motion', 'Micro-interactions'],
    icon: 'motion',
  },
  {
    name: 'Cloud e evolução',
    level: 'Básico',
    description:
      'Estou expandindo minha atuação para cloud, arquitetura e soluções mais completas, com foco em AWS e escalabilidade.',
    tags: ['AWS', 'Cloud', 'Escalabilidade'],
    icon: 'cloud',
  },
]

export const projects = [
  {
    title: 'Portfólio profissional',
    summary:
      'Aplicação criada para consolidar minha presença profissional com foco em narrativa, usabilidade e apresentação de projetos para recrutadores.',
    problem: 'Eu precisava de um canal centralizado para mostrar minha trajetória, competências e projetos com uma experiência mais profissional.',
    challenge: 'Organizar o conteúdo de forma clara, responsiva e visualmente forte sem perder performance e acessibilidade.',
    outcome: 'Criei uma vitrine que reforça minha identidade técnica e facilita a compreensão do meu perfil em uma primeira análise.',
    learning: 'Aprendi a equilibrar storytelling, UX e comunicação técnica em uma interface de alto impacto.',
    impact: 'Aumentei a clareza da apresentação profissional e a percepção de maturidade para oportunidades de carreira.',
    stack: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
    github: 'https://github.com/YuriRafaell/meuportfolio',
    deploy: '',
    previewLabel: 'Interface profissional',
  },
  {
    title: 'Hackers do Bem',
    summary:
      'Repositório vinculado a uma iniciativa da RNP com foco em tecnologia, inovação e impacto social.',
    problem: 'Era necessário organizar e compartilhar o material de um projeto voltado a tecnologia e ações com propósito.',
    challenge: 'Estruturar o conteúdo de forma acessível e alinhada com a proposta do projeto.',
    outcome: 'Contribuí para a visibilidade e organização do projeto em um contexto de inovação e comunidade.',
    learning: 'Aprendi a valorizar documentação e comunicação clara em projetos com forte componente social.',
    impact: 'Ampliou a estrutura de apresentação do projeto e reforçou a sua identidade técnica e institucional.',
    stack: ['Documentação', 'Tecnologia', 'Impacto social'],
    github: 'https://github.com/YuriRafaell/Hackers_do_Bem',
    deploy: '',
    previewLabel: 'Iniciativa RNP',
  },
  {
    title: 'Atividades do IMD',
    summary:
      'Repositório com atividades e projetos do curso técnico em Informática para Internet do IMD.',
    problem: 'Organizar exercícios e entregas ao longo da formação para consolidar o aprendizado prático.',
    challenge: 'Manter uma base sólida em desenvolvimento web em diferentes módulos e tecnologias.',
    outcome: 'Reforçou minha prática de desenvolvimento e a disciplina de estudos durante a formação técnica.',
    learning: 'Consolidei fundamentos de desenvolvimento web e organização de projetos acadêmicos.',
    impact: 'Fortaleceu minha base técnica e minha capacidade de aprender rápido em contextos práticos.',
    stack: ['HTML', 'JavaScript', 'Desenvolvimento web'],
    github: 'https://github.com/YuriRafaell/IMD_',
    deploy: '',
    previewLabel: 'Base técnica',
  },
]

export const academicExperience = [
  {
    title: 'Bacharelado em Ciências e Tecnologia',
    meta: 'UFRN — 2020/2025',
    description:
      'Formação com base sólida em lógica, resolução de problemas, tecnologia e pensamento científico.',
    highlights: ['Tecnologia', 'Pesquisa', 'Pensamento analítico'],
  },
  {
    title: 'Engenharia Biomédica',
    meta: 'UFRN — 2026',
    description:
      'Formação complementar em engenharia biomédica, com interesse em tecnologia aplicada à saúde, inovação e soluções com impacto real.',
    highlights: ['Inovação', 'Saúde', 'Tecnologia'],
  },
  {
    title: 'Ensino Técnico em Informática para Internet',
    meta: 'IMD — 2020/2022',
    description:
      'Formação técnica que consolidou minha base em desenvolvimento web, programação e trabalho com projetos práticos.',
    highlights: ['Desenvolvimento web', 'Programação', 'Projetos'],
  },
]

export const professionalExperience = [
  {
    title: 'Pesquisador Front-End no NAVI',
    meta: '2026',
    description:
      'Atuação no desenvolvimento de soluções front-end com foco em React e Vue no âmbito de um projeto de pesquisa-ação aplicado ao ecossistema de programação, controle e avaliação no SUS.',
    highlights: ['React', 'Vue', 'Pesquisa', 'SUS'],
  },
  {
    title: 'Pesquisa, Desenvolvimento e Inovação na RNP',
    meta: '2023/2024',
    description:
      'Atuei em pesquisa e desenvolvimento para análise de dados, visualizações e prototipagem em contextos de rede e infraestrutura.',
    highlights: ['RNP', 'Dados', 'Inovação', 'PoC'],
  },
  {
    title: 'CORE Engenharia Biomédica',
    meta: '2024/2025',
    description:
      'Atuação em gestão comercial, automação de processos e análise de dados com uso de ferramentas como Google Apps Script.',
    highlights: ['Automação', 'Dados', 'Liderança', 'Processos'],
  },
  {
    title: 'IEEE EMBS',
    meta: '2025/atual',
    description:
      'Participação em eventos, apoio a ações e integração com a comunidade internacional em engenharia biomédica e inovação.',
    highlights: ['Eventos', 'Comunidade', 'IEEE', 'Inovação'],
  },
  {
    title: 'Intercâmbio acadêmico em Portugal',
    meta: '2024/2025',
    description:
      'Semestre de Engenharia Biomédica no Instituto Politécnico de Coimbra, ampliando minha visão acadêmica e internacional.',
    highlights: ['Portugal', 'Internacional', 'Engenharia Biomédica'],
  },
  {
    title: 'Hackathons e projetos de impacto',
    meta: '2024/2026',
    description:
      'Participação em iniciativas de inovação e desenvolvimento tecnológico, incluindo o Hackathon do Sol 2026 e o Aveiro Tech City Hackathon.',
    highlights: ['Hackathon', 'Inovação', 'Tecnologia'],
  },
]

export const hackathons = [
  {
    title: 'Hackathon do Sol 2026',
    meta: '2026',
    description:
      'Maratona de programação e inovação com carga horária de 60 horas, realizada em Natal/RN.',
    highlights: ['Inovação', 'Desenvolvimento', 'Equipe'],
  },
  {
    title: 'Aveiro Tech City Hackathon',
    meta: '2024',
    description:
      'Edição internacional de desenvolvimento tecnológico e inovação, realizada em Portugal.',
    highlights: ['Hackathon', 'Inovação', 'Tecnologia'],
  },
]

export const technicalActivity = [
  {
    title: 'Linguagens predominantes',
    items: ['TypeScript', 'JavaScript', 'HTML', 'Python'],
  },
  {
    title: 'Repositórios em destaque',
    items: ['meuportfolio', 'Hackers_do_Bem', 'IMD_'],
  },
  {
    title: 'Estatísticas públicas',
    items: ['26 repositórios', '5 contribuições no último ano', 'Foco em front-end e projetos práticos'],
  },
]

export const certifications = [
  {
    title: 'Inteligência Artificial I — Conceitos e Prompts',
    meta: 'UFPB — 2026',
    description: 'Curso complementar com foco em conceitos de IA, uso de prompts e aplicação prática de ferramentas contemporâneas.',
    highlights: ['IA', 'Prompts', 'Inovação'],
  },
  {
    title: 'Business Intelligence',
    meta: 'FIAP — 2023',
    description: 'Formação voltada a análise de dados, visualização de informações e interpretação de cenários.',
    highlights: ['Dados', 'BI', 'Análise'],
  },
  {
    title: 'Data Science',
    meta: 'Let’s Code — 2021',
    description: 'Curso introdutório que ampliou minha visão sobre dados, automação e construção de soluções com base em informação.',
    highlights: ['Dados', 'Automação', 'Python'],
  },
]

export const events = [
  {
    title: 'BioSignal Student Meet 2025',
    meta: '2025',
    description: 'Participação em simpósio organizado por membros do IEEE voltado à Engenharia Biomédica e inovação.',
    highlights: ['IEEE', 'Inovação', 'Comunidade'],
  },
  {
    title: 'Pulso’25',
    meta: '2025',
    description: 'Atuação em encontro voltado a troca de conhecimento, tecnologia e networking.',
    highlights: ['Networking', 'Tecnologia', 'Eventos'],
  },
  {
    title: 'Workshop de Tecnologias de Redes PoP-RN',
    meta: '2023',
    description: 'Participação em oficina sobre redes, infraestrutura e tecnologias aplicadas.',
    highlights: ['Redes', 'Infraestrutura', 'Tecnologia'],
  },
]

export const achievements = [
  {
    title: 'Hackathon do Sol 2026',
    description: 'Participação em maratona de programação e inovação com foco em desenvolvimento e trabalho em equipe.',
  },
  {
    title: 'Aveiro Tech City Hackathon',
    description: 'Participação em edição internacional voltada a tecnologia, inovação e soluções com impacto.',
  },
  {
    title: 'Intercâmbio acadêmico em Portugal',
    description: 'Semestre de Engenharia Biomédica ampliando minha visão acadêmica e internacional.',
  },
  {
    title: 'Publicação científica',
    description: 'Participação em produção científica com tema voltado à inovação e tecnologia aplicada.',
  },
  {
    title: 'Bolsas e programas',
    description: 'Atuação em programas e iniciativas que reforçaram minha formação e presença em projetos institucionais.',
  },
]
