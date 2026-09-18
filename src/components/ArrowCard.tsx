import { truncateText } from "@lib/utils"

export type SearchItem = {
  type: "project" | "research"
  title: string
  summary: string
  url: string
  tags: string[]
}

type Props = {
  entry: SearchItem
  pill?: boolean
}

export default function ArrowCard({ entry, pill }: Props) {
  return (
    <a href={entry.url} target={entry.url.startsWith("/") ? undefined : "_blank"} rel={entry.url.startsWith("/") ? undefined : "noreferrer"} class="group p-4 gap-3 flex items-center border rounded-lg hover:border-brand-300 dark:hover:border-brand-700/60 hover:bg-brand-50/60 dark:hover:bg-brand-500/5 border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div class="w-full">
        <div class="flex flex-wrap items-center gap-2">
          {pill &&
            <div class="text-sm capitalize px-2 py-0.5 rounded-full border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10">
              {entry.type}
            </div>
          }
        </div>
        <div class="font-semibold mt-3 text-slate-900 dark:text-white line-clamp-2 group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
          {entry.title}
        </div>

        <div class="text-sm line-clamp-2 text-slate-600 dark:text-slate-400">
          {entry.summary}
        </div>
        <ul class="flex flex-wrap mt-2 gap-1">
          {entry.tags.map((tag: string) => (
            <li class="text-xs uppercase py-0.5 px-2 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              {truncateText(tag, 20)}
            </li>
          ))}
        </ul>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors shrink-0">
        <polyline points="12 5 19 12 12 19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    </a>
  )
}
