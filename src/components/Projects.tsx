import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import apoioEmocionalImage from '../images/apoio.png';
import emBreveImage from '../images/em_breve.png';
import consuladoImage from '../images/visto.png';

export function Projects() {
  const projects = [
    {
      title: 'Apoio Emocional',
      description: 'App em Flutter/Dart para pessoas com ansiedade e depressão, ainda em desenvolvimento.',
      tech: ['Flutter', 'Dart'],
      github: null,  // Repositório privado
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
      github: null, // Repositório privado
      live: "#",
      image: consuladoImage
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Projetos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aqui estão alguns dos projetos que desenvolvi.
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