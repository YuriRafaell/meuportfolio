import React from 'react';
import { Code, Briefcase, GraduationCap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre Mim</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Sou desenvolvedor front-end com mais de 2 anos de experiência, começando com o curso
          técnico de Informática para Internet em 2022 no Instituto Metrópole Digital (IMD/UFRN).
          Já trabalhei em alguns projetos front-end utilizando tecnologias modernas e frameworks,
          e tive a oportunidade de estagiar no Secretaria Municipal de Planejamento de Natal (SEMPLA)
          e na Rede Nacional de Ensino e Pesquisa (RNP).
          Atualmente, sou estudante de Ciências e Tecnologia, com ênfase em Engenharia Biomédica na
          Universidade Federal do Rio Grande do Norte (UFRN), e continuo aprimorando minhas habilidades no desenvolvimento web.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <Code className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Habilidades Técnicas</h3>
            <p className="text-gray-600">
            HTML | CSS | JavaScript | TypeScript | Node.js | React.js | Vue.js | 
            Angular.js | PHP | Python | Dart      </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Experiência</h3>
            <p className="text-gray-600">
              2 anos desenvolvo soluções web escaláveis e eficientes, buscando sempre evoluir.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Educação</h3>
            <p className="text-gray-600">
              Graduando em Ciências e Tecnologia na UFRN | Técnico em Informática para Internet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}