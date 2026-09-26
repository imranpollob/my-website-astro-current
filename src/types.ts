export type Page = {
  TITLE: string
  // Optional longer <title> for search results; defaults to TITLE.
  SEO_TITLE?: string
  DESCRIPTION: string
}

export interface Site extends Page {
  HOME_TITLE: string
  AUTHOR: string
}

export type Links = {
  TEXT: string
  HREF: string
  EXTERNAL?: boolean
}[]

export type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}[]

export type IconName =
  | "github"
  | "scholar"
  | "linkedin"
  | "email"
  | "globe"
  | "download"
  | "file"
  | "terminal"
  | "arrow-right"

// A labelled outbound link rendered as a small button (Paper, Code, Live, ...).
export type ResourceLink = {
  label: string
  href: string
  icon?: IconName
}
