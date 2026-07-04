import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Share2, Users, Mail } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { SectionHeading } from './SectionHeading'
import { contactSchema, type ContactFormValues } from '../data/portfolio'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((resolve) => window.setTimeout(resolve, 600))
    console.info('Mensagem recebida', data)
    setSubmitted(true)
    reset()
  }

  return (
    <section id="contact" className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos conversar sobre sua próxima oportunidade"
          description="Se quiser trocar ideias sobre produtos, tecnologia ou processos, estou disponível para conversar."
        />
        <div className="mt-8 space-y-4 text-slate-600 dark:text-slate-300">
          <a href="mailto:yuri.araujo.709@gmail.com" className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-800">
            <Mail className="size-5" />
            yuri.araujo.709@gmail.com
          </a>
          <a href="https://github.com/YuriRafaell" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-800">
            <Share2 className="size-5" />
            github.com/YuriRafaell
          </a>
          <a href="https://www.linkedin.com/in/yuri-rafael-04762b200/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-800">
            <Users className="size-5" />
            linkedin.com/in/yuri-rafael-04762b200
          </a>
        </div>
      </div>
      <div className="rounded-[2rem] border border-slate-200/80 bg-white/80 p-8 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Nome
            </label>
            <input
              id="name"
              {...register('name')}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950"
              placeholder="Seu nome"
            />
            {errors.name ? <p className="mt-2 text-sm text-rose-500">{errors.name.message}</p> : null}
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950"
              placeholder="seu@email.com"
            />
            {errors.email ? <p className="mt-2 text-sm text-rose-500">{errors.email.message}</p> : null}
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Mensagem
            </label>
            <textarea
              id="message"
              rows={5}
              {...register('message')}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950"
              placeholder="Conte-me sobre a oportunidade"
            />
            {errors.message ? <p className="mt-2 text-sm text-rose-500">{errors.message.message}</p> : null}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-cyan-600"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
            <ArrowRight className="size-4" />
          </button>
          {submitted ? <p className="text-sm text-emerald-600 dark:text-emerald-300">Mensagem enviada com sucesso. Em breve entrarei em contato.</p> : null}
        </form>
      </div>
    </section>
  )
}
