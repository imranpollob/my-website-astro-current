import rss from "@astrojs/rss"
import { SITE } from "@consts"
import { publications, researchProjects } from "@data/research"
import { projects } from "@data/projects"

type Context = {
  site: string
}

export async function GET(context: Context) {
  const items = [
    ...researchProjects.map((project) => ({
      title: project.title,
      description: project.summary,
      link: `/research#${project.slug}`,
    })),
    ...publications.map((paper) => ({
      title: paper.title,
      description: paper.summary,
      link: `/research#${paper.slug}`,
      pubDate: new Date(paper.year, 0, 1),
    })),
    ...projects.map((project) => ({
      title: project.title,
      description: project.description,
      link: project.liveUrl ?? project.githubUrl ?? "/projects",
    })),
  ]

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items,
  })
}
