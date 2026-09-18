import rss from "@astrojs/rss"
import { SITE } from "@consts"
import { researchPapers } from "@data/research"
import projectsData from "./projects/projects.json"

type Context = {
  site: string
}

type Project = (typeof projectsData.portfolio.projects)["Blockchain Engineering"][number]

export async function GET(context: Context) {
  const projects: Project[] = (Object.values(projectsData.portfolio.projects) as Project[][]).flat()

  const items = [
    ...projects.map((project) => ({
      title: project.title,
      description: project.description,
      link: project.url,
    })),
    ...researchPapers.map((paper) => ({
      title: paper.title,
      description: paper.summary,
      link: paper.url,
      pubDate: new Date(paper.year, 0, 1),
    })),
  ]

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items,
  })
}
