import { motion } from 'framer-motion'
import {
  CloudCog,
  Cpu,
  Palette,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'

type SkillCardProps = {
  skill: {
    name: string
    level: string
    description: string
    tags: string[]
    icon: string
  }
}

const iconMap = {
  cloud: CloudCog,
  ui: Palette,
  architecture: Workflow,
  performance: Cpu,
  quality: ShieldCheck,
  motion: Sparkles,
}

export function SkillCard({ skill }: SkillCardProps) {
  const Icon = iconMap[skill.icon as keyof typeof iconMap] ?? Sparkles

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/70"
    >
      <div className="flex items-center justify-between">
        <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-300">
          <Icon className="size-6" />
        </div>
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-600 dark:text-cyan-300">
          {skill.level}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
        {skill.name}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {skill.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {skill.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  )
}
