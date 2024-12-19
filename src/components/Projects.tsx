import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import apoioEmocionalImage from '../images/apoio.png';
import emBreveImage from '../images/em_breve.png';
import consuladoImage from '../images/visto.png';
import dicasImage from '../images/dicas.png';
import loginImage from '../images/login.png';
import ejectImage from '../images/EJECT.png';
import foodboxImage from '../images/foodbox.png';
import jogoImage from '../images/jogo.png';

export function Projects() {
  const projects = [
    {
      title: 'Apoio Emocional',
      description: 'App em Flutter/Dart para pessoas com ansiedade e depressão, ainda em desenvolvimento.',
      tech: ['Flutter', 'Dart'],
      github: null,  
      live: 'https://www.figma.com/proto/e1rDRExR1g0A0NdIZ6bdle/Prototipo_Apoio_Emocional_PDM?node-id=6-2&starting-point-node-id=6%3A2',
      image: apoioEmocionalImage
    },
    {
      title: "Conecta CORE",
      description: "Projeto em Python para troca de mensagem entre uma EJ e leads, ainda em desenvolvimento.",
      tech: ["Python"],
      github: "https://github.com/YuriRafaell/padronizacao_CORE",
      live: "#",
      image: emBreveImage
    },
    {
      title: "Quero meu visto",
      description: "Site do Consulado de Portugal em Recife para ter uma média da aprovação do visto, ainda em desenvolvimento.",
      tech: ['JavaScript', 'React', 'Vite'],
      github: null, 
      live: "#",
      image: consuladoImage
    },
    {
      title: 'Cripto PDF',
      description: 'Projeto em Python para criptografar PDFs, ainda em desenvolvimento.',
      tech: ['Python'],
      github: 'https://github.com/YuriRafaell/cripto_PDF',
      live: '#',
      image: emBreveImage
    },
    {
      title: 'Dicas do Yuri',
      description: 'Repositório com dicas de desenvolvimento.',
      tech: ['Git', 'Dicas'],
      github: 'https://github.com/YuriRafaell/Dicas_do_Yuri',
      live: '#',
      image: dicasImage
    },
    {
      title: 'Recipe App API',
      description: 'API para aplicativo de receitas, ainda em desenvolvimento.',
      tech: ['Python'],
      github: 'https://github.com/YuriRafaell/recipe-app-api',
      live: '#',
      image: emBreveImage
    },
    {
      title: 'What to watch',
      description: 'Aplicativo para sugestões de filmes e series, ainda em desenvolvimento.',
      tech: ['Python'],
      github: 'https://github.com/YuriRafaell/What_to_watch',
      live: '#',
      image: emBreveImage
    },
    {
      title: 'Tudo em uma calculadora',
      description: 'Calculadora em JavaScript, finalizada, mas precisa de melhorias.',
      tech: ['JavaScript'],
      github: 'https://github.com/YuriRafaell/Minha-primeira-aplicacao-JS',
      live: '#',
      image: emBreveImage
    },
    {
      title: 'Sistema login com python',
      description: 'Sistema de login simples feito com Python',
      tech: ['Python'],
      github: 'https://github.com/YuriRafaell/Sistema-login-com-python',
      live: '#',
      image: loginImage
    },
    {
      title: 'Desafio da EJECT',
      description: 'Site para PS de uma EJ, desenvolvido em JavaScript.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/YuriRafaell/Desafio-da-EJECT',
      live: 'https://yurirafaell.github.io/Desafio-da-EJECT/',
      image: ejectImage
    },
    {
      title: 'FoodBox',
      description: 'Site de pedidos de comida, desenvolvido em HTML.',
      tech: ['HTML'],
      github: 'https://github.com/YuriRafaell/FoodBox',
      live: 'https://k1xif.csb.app/',
      image: foodboxImage
    },
    {
      title: 'Equacionando',
      description: 'Jogo educacional de equação, feito em JavaScript.',
      tech: ['JavaScript'],
      github: 'https://github.com/YuriRafaell/Equacionando',
      live: 'https://editor.p5js.org/Steffany/full/PjS3SAgoP',
      image: jogoImage
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Projetos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aqui estão alguns dos projetos que desenvolvi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <Github size={20} className="mr-1" />
                      Código
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-900"
                    >
                      <ExternalLink size={20} className="mr-1" />
                      Demo
                    </a>
                  )}
                  {!project.github && !project.live && (
                    <p className="text-gray-600">Projeto em andamento ou privado</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}