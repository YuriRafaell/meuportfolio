type TimelineItem = {
  title: string
  meta: string
  description: string
  highlights: string[]
}

type TimelineSectionProps = {
  title: string
  items: TimelineItem[]
}

export function TimelineSection({ title, items }: TimelineSectionProps) {
  return (
    <section className="rounded-3xl border border-slate-200/80 bg-white/80 p-7 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{title}</h3>
      <div className="mt-6 space-y-6">
        {items.map((item) => (
          <div key={item.title} className="border-l border-slate-200 pl-5 dark:border-slate-700">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.meta}</p>
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {item.description}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {item.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
