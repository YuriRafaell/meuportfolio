import { motion } from 'framer-motion'
import { ArrowUpRight, Share2, Rocket } from 'lucide-react'

type ProjectCardProps = {
  project: {
    title: string
    summary: string
    problem: string
    challenge: string
    outcome: string
    learning: string
    impact: string
    stack: string[]
    github: string
    deploy?: string
    previewLabel: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-300">
          Destaque
        </span>
      </div>
      <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
        {project.summary}
      </p>
      <div className="mt-6 rounded-2xl border border-dashed border-slate-300/80 bg-slate-50/70 p-4 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-950/60 dark:text-slate-400">
        <p className="font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">Preview</p>
        <p className="mt-2">{project.previewLabel}</p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Problema
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {project.problem}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Desafio
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {project.challenge}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Aprendizado
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {project.learning}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Impacto
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {project.impact}
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-200"
        >
          <Share2 className="size-4" />
          GitHub
        </a>
        {project.deploy ? (
          <a
            href={project.deploy}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-600 dark:bg-cyan-600"
          >
            <Rocket className="size-4" />
            Deploy
            <ArrowUpRight className="size-4" />
          </a>
        ) : null}
      </div>
    </motion.article>
  )
}
