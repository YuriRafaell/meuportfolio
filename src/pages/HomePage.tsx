import { motion } from 'framer-motion'
import {
  ArrowRight,
  Share2,
  Users,
  Mail,
  Monitor,
  Moon,
  Sparkles,
  SunMedium,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ContactSection } from '../components/ContactSection'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { SkillCard } from '../components/SkillCard'
import { TimelineSection } from '../components/TimelineSection'
import {
  achievements,
  certifications,
  events,
  heroStats,
  professionalExperience,
  projects,
  skills,
  technicalActivity,
} from '../data/portfolio'

export function HomePage() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const { data: profileSummary } = useQuery({
    queryKey: ['portfolio-summary'],
    queryFn: async () => {
      await new Promise((resolve) => window.setTimeout(resolve, 250))
      return {
        title: 'Desenvolvedor Front-End com experiência em pesquisa, inovação e desenvolvimento de soluções digitais',
        body: 'Atuo na construção de interfaces, projetos de pesquisa e iniciativas de inovação com foco em tecnologia, impacto e experiência de usuário.',
      }
    },
  })

  const summary = useMemo(
    () =>
      profileSummary ?? {
        title: 'Desenvolvedor Front-End com experiência em pesquisa, inovação e desenvolvimento de soluções digitais',
        body: 'Atuo na construção de interfaces, projetos de pesquisa e iniciativas de inovação com foco em tecnologia, impacto e experiência de usuário.',
      },
    [profileSummary],
  )

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_32%),linear-gradient(135deg,_#f8fbff_0%,_#f3f7ff_45%,_#f8fafc_100%)] text-slate-900 transition-colors dark:bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.18),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#0f172a_60%,_#111827_100%)] dark:text-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20 mb-8 rounded-full border border-white/60 bg-white/70 px-4 py-3 shadow-[0_20px_80px_-35px_rgba(15,23,42,0.45)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">
                Yuri Araújo
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Front-End Developer</p>
            </div>
            <button
              type="button"
              onClick={() => setIsDark((value) => !value)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
              aria-label="Alternar tema"
            >
              {isDark ? <SunMedium className="size-4" /> : <Moon className="size-4" />}
              {isDark ? 'Claro' : 'Escuro'}
            </button>
          </div>
        </header>

        <main className="space-y-24 pb-24">
          <section className="grid items-center gap-10 rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.45)] backdrop-blur lg:grid-cols-[1.2fr_0.8fr] lg:p-12 dark:border-slate-800 dark:bg-slate-900/70">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-700 dark:text-cyan-300">
                <Sparkles className="size-4" />
                Desenvolvedor Front-End com experiência em pesquisa, inovação e soluções digitais
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                Yuri Rafael
              </h1>
              <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">
                Desenvolvedor Front-End com atuação em projetos acadêmicos, institucionais e de inovação, com vivência em React, Vue, Angular e tecnologia aplicada a problemas reais.
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                {summary.body}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://github.com/YuriRafaell" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                  <Share2 className="size-4" />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/yuri-rafael-04762b200/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                  <Users className="size-4" />
                  LinkedIn
                </a>
                <a href="/Yuri-Rafael-Santos-de-Araujo-CV.pdf" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600 dark:bg-cyan-600">
                  <Mail className="size-4" />
                  Currículo
                  <ArrowRight className="size-4" />
                </a>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                    <p className="text-2xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-cyan-500/20 via-white to-violet-500/20 p-6 shadow-[0_30px_120px_-40px_rgba(34,211,238,0.35)] dark:border-slate-800"
            >
              <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/70 bg-white/80 p-6 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white dark:bg-cyan-600">
                      Perfil
                    </span>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-300">
                      Open to work
                    </span>
                  </div>
                  <div className="mt-8 flex items-center gap-5">
                    <img
                      src="/src/assets/eu-avatar.jpg"
                      alt="Yuri Rafael"
                      className="size-20 rounded-3xl object-cover object-center shadow-lg"
                    />
                    <div>
                      <p className="text-lg font-semibold text-slate-900 dark:text-white">Yuri Rafael</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Júnior • React • TypeScript</p>
                    </div>
                  </div>
                  <div className="mt-8 rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                      Diferencial
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      Combino experiência em front-end, pesquisa, inovação, participação em projetos institucionais e vivência internacional para entregar soluções com propósito e execução técnica sólida.
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Monitor className="size-4" />
                  Deploy ready • SEO básico • WCAG consciente
                </div>
              </div>
            </motion.div>
          </section>

          <section id="about" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <SectionHeading
                eyebrow="Sobre mim"
                title="Trajetória marcada por tecnologia, pesquisa e impacto"
                description="Minha trajetória conecta formação acadêmica, desenvolvimento web, projetos de pesquisa e iniciativas de inovação com aplicação prática em contextos reais."
              />
              <div className="mt-8 space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
                <p>
                  Sou bacharel em Ciências e Tecnologia e estudante de Engenharia Biomédica pela UFRN, com experiência em desenvolvimento web, automação de processos e análise de dados. Minha formação e minha atuação em projetos institucionais me aproximaram de temas como front-end, inovação, pesquisa e soluções digitais com impacto.
                </p>
                <p>
                  Atuo no NAVI no desenvolvimento de soluções front-end com React e Vue, participei da RNP em projetos de pesquisa, desenvolvimento e inovação, e também tenho experiência na CORE em automação e análise de dados. Minha atuação no IEEE e no intercâmbio acadêmico em Portugal ampliaram minha visão técnica e internacional.
                </p>
                <p>
                  Tenho interesse crescente em cloud computing e em evoluir para soluções mais completas, com foco em produtos digitais, escalabilidade e impacto real. Minha trajetória mostra não apenas interesse por tecnologia, mas também capacidade de aprender rápido, colaborar e contribuir em ambientes dinâmicos.
                </p>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
                <SectionHeading
                  eyebrow="Formação"
                  title="Base sólida para crescer em produto e tecnologia"
                  description="Minha formação combina computação, engenharia biomédica, pesquisa e uma rotina de aprendizado contínuo em temas relevantes para o mercado."
                />
                <div className="mt-8 space-y-4 text-slate-600 dark:text-slate-300">
                  <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                    <p className="font-semibold text-slate-900 dark:text-white">Bacharelado em Ciências e Tecnologia</p>
                    <p className="mt-1 text-sm">UFRN • 2020/2025</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                    <p className="font-semibold text-slate-900 dark:text-white">Engenharia Biomédica</p>
                    <p className="mt-1 text-sm">UFRN • 2026</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                    <p className="font-semibold text-slate-900 dark:text-white">Ensino técnico em Informática para Internet</p>
                    <p className="mt-1 text-sm">IMD • 2020/2022</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
                <SectionHeading
                  eyebrow="Interesses"
                  title="Tecnologia, cloud e desenvolvimento com impacto"
                  description="Estou construindo uma carreira em torno de produtos digitais bem feitos, tecnologia escalável e soluções que unem prática, inovação e propósito."
                />
                <div className="mt-8 flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Cloud', 'UX', 'Acessibilidade', 'Performance', 'Pesquisa', 'Inovação'].map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="skills">
            <SectionHeading
              eyebrow="Stack tecnológica"
              title="Ferramentas que uso para entregar valor"
              description="Minha stack combina produtividade, escalabilidade e cuidado com detalhes de UX."
              align="center"
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </section>

          <section id="why-me" className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
            <SectionHeading
              eyebrow="Por que me contratar?"
              title="Evidências reais de evolução, compromisso e potencial"
              description="Meu perfil combina prática em desenvolvimento, participação em projetos e iniciativas de impacto, além de uma postura voltada a aprendizado e crescimento."
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                  <p className="font-semibold text-slate-900 dark:text-white">Base técnica sólida</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">Experiência com front-end, organização de projetos e desenvolvimento web com foco em usabilidade e qualidade.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                  <p className="font-semibold text-slate-900 dark:text-white">Projetos e comunidade</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">Participação em hackathons, eventos, projetos acadêmicos e iniciativas de inovação reforçam minha capacidade de colaborar e aprender rápido.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                  <p className="font-semibold text-slate-900 dark:text-white">Visão de crescimento</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">Tenho interesse claro em evoluir para posições full stack e cloud, com foco em soluções escaláveis e impacto real.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                  <p className="font-semibold text-slate-900 dark:text-white">Responsabilidade e iniciativa</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">Atuação em contextos de pesquisa, monitoria, liderança e representação reforça minha postura profissional e proatividade.</p>
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-950/70">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">GitHub e evolução</p>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">Minha presença pública mostra continuidade, organização e interesse por projetos práticos em front-end, documentação e tecnologia aplicada.</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['TypeScript', 'JavaScript', 'HTML', 'Python'].map((item) => (
                    <span key={item} className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">{item}</span>
                  ))}
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  <li>• Repositórios públicos com foco em projetos acadêmicos, iniciativa institucional e presença profissional em tecnologia.</li>
                  <li>• Organização crescente e presença em projetos que demonstram evolução técnica e prática.</li>
                  <li>• Interesse em continuar construindo soluções com boa estrutura, foco em produto e crescimento para posições mais amplas.</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="projects">
            <SectionHeading
              eyebrow="Projetos em destaque"
              title="Casos que reforçam meu pensamento técnico e visão de produto"
              description="Cada projeto mostra como eu organizo problemas, escolho ferramentas e busco entregar soluções com clareza e propósito."
            />
            <div className="mt-10 grid gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>

          <section id="experience" className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <TimelineSection title="Experiência e trajetória" items={professionalExperience} />
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <SectionHeading
                eyebrow="Atividade técnica"
                title="GitHub e presença técnica"
                description="Minha presença pública mostra evolução, organização e interesse por projetos práticos em front-end, tecnologia e desenvolvimento."
              />
              <div className="mt-8 space-y-4">
                {technicalActivity.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                    <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.items.map((entry) => (
                        <span key={entry} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">{entry}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <SectionHeading
                eyebrow="Certificações e formação"
                title="Aprendizado contínuo com foco em tecnologia e inovação"
                description="Minha formação complementar reforça minha presença em temas relevantes para desenvolvimento, dados e transformação digital."
              />
              <div className="mt-8 space-y-5">
                {certifications.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                    <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.meta}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <SectionHeading
                eyebrow="Conquistas"
                title="Marcos que reforçam minha trajetória"
                description="Esses destaques mostram maturidade, iniciativa e capacidade de participar de projetos com relevância técnica e institucional."
              />
              <div className="mt-8 space-y-4">
                {achievements.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                    <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <SectionHeading
                eyebrow="Eventos"
                title="Aprendizado em comunidade e tecnologia"
                description="A participação em eventos reforça minha visão de produto, networking e conexão com tendências do mercado."
              />
              <div className="mt-8 space-y-5">
                {events.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                    <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.meta}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <ContactSection />
          </section>
        </main>
      </div>
    </div>
  )
}
