import type { CollectionEntry } from "astro:content"
import { createEffect, createSignal, For, onMount } from "solid-js"
import Fuse from "fuse.js"
import ArrowCard from "@components/ArrowCard"
import { cn } from "@lib/utils"
import SearchBar from "@components/SearchBar"

type Props = {
  entry_name: string
  tags: string[]
  data: CollectionEntry<"blog">[] | CollectionEntry<'projects'>[]
}

export default function SearchCollection({ entry_name, data, tags }: Props) {
  const coerced = data.map((entry) => entry as CollectionEntry<'blog'>);

  const [query, setQuery] = createSignal("");
  const [filter, setFilter] = createSignal(new Set<string>())
  const [collection, setCollection] = createSignal<CollectionEntry<'blog'>[]>([])
  const [descending, setDescending] = createSignal(false);

  // Pagination state
  const POSTS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = createSignal(1);

  const fuse = new Fuse(coerced, {
    keys: ["slug", "data.title", "data.summary", "data.tags"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.1, 
    ignoreLocation: true,
  })

  createEffect(() => {
    const filtered = (query().length < 2
      ? coerced
      : fuse.search(query()).map((result) => result.item)
      ).filter((entry) => {
        const selectedTags = Array.from(filter());
        if (selectedTags.length === 0) return true;
        return selectedTags.some((value) =>
          entry.data.tags.some((tag: string) =>
            tag.toLowerCase() === String(value).toLowerCase()
          )
        );
      });
    setCollection(descending() ? filtered.toReversed() : filtered)
    setCurrentPage(1); // Reset to first page on filter/search change
  })

  function toggleDescending() {
    setDescending(!descending())
  }

  function toggleTag(tag: string) {
    setFilter((prev) =>
      new Set(prev.has(tag)
        ? [...prev].filter((t) => t !== tag)
        : [...prev, tag]
      )
    )
  }

  function clearFilters() {
    setFilter(new Set<string>());
  }

  const onSearchInput = (e: Event) => {
    const target = e.target as HTMLInputElement
    setQuery(target.value)
  }

  function goToPage(page: number) {
    setCurrentPage(page);
  }

  function nextPage() {
    if (currentPage() < Math.ceil(collection().length / POSTS_PER_PAGE)) {
      setCurrentPage(currentPage() + 1);
    }
  }

  function prevPage() {
    if (currentPage() > 1) {
      setCurrentPage(currentPage() - 1);
    }
  }

  // Get posts for current page
  const paginatedPosts = () => {
    const start = (currentPage() - 1) * POSTS_PER_PAGE;
    return collection().slice(start, start + POSTS_PER_PAGE);
  }

  onMount(() => {
    const wrapper = document.getElementById("search-collection-wrapper");
    if (wrapper) {
      wrapper.style.minHeight = "unset";
    }
  })

  return (
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {/* Control Panel*/}
      <div class="col-span-3 sm:col-span-1">
        <div class="sticky top-24 mt-7">
          {/* Search Bar */}
          <SearchBar onSearchInput={onSearchInput} query={query} setQuery={setQuery} placeholderText={`Search ${entry_name}`} />
          {/* Tag Filters */}
          <div class="relative flex flex-row justify-between w-full"><p class="text-sm font-semibold uppercase my-4 text-slate-900 dark:text-white">Tags</p>
            {filter().size > 0 && (
              <button
                onClick={clearFilters}
                class="absolute flex justify-center items-center h-full w-10 right-0 top-0 stroke-neutral-400 dark:stroke-neutral-500 hover:stroke-neutral-600 hover:dark:stroke-neutral-300"
              >
                <svg class="size-5">
                  <use href={`/ui.svg#x`} />
                </svg>
              </button>
            )}</div>
          <ul class="flex flex-wrap sm:flex-col gap-1.5">
            <For each={tags}>
              {(tag) => (
                <li class="sm:w-full glass-panel">
                  <button
                    onClick={() => toggleTag(tag)}
                    class={cn(
                      "w-full px-2 py-1 rounded",
                      "flex gap-2 items-center",
                      "bg-slate-100 dark:bg-slate-800/60",
                      "hover:bg-slate-200/70 hover:dark:bg-slate-800",
                      "transition-colors duration-300 ease-in-out",
                      filter().has(tag)
                        ? "text-brand-700 dark:text-brand-400"
                        : "text-slate-700 dark:text-slate-300"
                    )}
                  >
                    <svg
                      class={cn(
                        "shrink-0 size-5 fill-slate-400 dark:fill-slate-500",
                        "transition-colors duration-300 ease-in-out",
                        filter().has(tag) && "fill-brand-600 dark:fill-brand-400"
                      )}
                    >
                      <use
                        href={`/ui.svg#square`}
                        class={cn(!filter().has(tag) ? "block" : "hidden")}
                      />
                      <use
                        href={`/ui.svg#square-check`}
                        class={cn(filter().has(tag) ? "block" : "hidden")}
                      />
                    </svg>

                    <span class="truncate block min-w-0 pt-[2px]">
                      {tag}
                    </span>
                  </button>

                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
      {/* Posts */}
      <div class="col-span-3 sm:col-span-2">
        <div class="flex flex-col">
          {/* Info Bar */}
          <div class='flex justify-between flex-row mb-2'>
            <div class="text-sm uppercase">
              SHOWING {collection().length} OF {data.length} {entry_name}
            </div>
            <button onClick={toggleDescending} class='flex flex-row gap-1 stroke-neutral-400 dark:stroke-neutral-500 hover:stroke-neutral-600 hover:dark:stroke-neutral-300 text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 hover:dark:text-neutral-300'>
              <div class="text-sm uppercase">
                {descending() ? "DESCENDING" : "ASCENDING"}
              </div>
              <svg
                class="size-5 left-2 top-[0.45rem]"
              >
                <use href={`/ui.svg#sort-descending`} class={descending() ? "block" : "hidden"}></use>
                <use href={`/ui.svg#sort-ascending`} class={descending() ? "hidden" : "block"}></use>
              </svg>
            </button>
          </div>
          <ul class="flex flex-col gap-3">
            {paginatedPosts().map((entry) => (
              <li>
                <ArrowCard entry={entry} />
              </li>
            ))}
          </ul>
          {/* Pagination Controls */}
          <div class="flex justify-center items-center gap-2 mt-4">
            <button
              onClick={prevPage}
              disabled={currentPage() === 1}
              class="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800/60 hover:bg-brand-50 dark:hover:bg-brand-500/10 hover:text-brand-600 dark:hover:text-brand-400 transition-colors disabled:opacity-50 disabled:hover:bg-slate-100 disabled:dark:hover:bg-slate-800/60 disabled:hover:text-current"
            >
              Previous
            </button>
            <span class="mx-2 text-sm">
              Page {currentPage()} of {Math.max(1, Math.ceil(collection().length / POSTS_PER_PAGE))}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage() === Math.ceil(collection().length / POSTS_PER_PAGE) || collection().length === 0}
              class="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800/60 hover:bg-brand-50 dark:hover:bg-brand-500/10 hover:text-brand-600 dark:hover:text-brand-400 transition-colors disabled:opacity-50 disabled:hover:bg-slate-100 disabled:dark:hover:bg-slate-800/60 disabled:hover:text-current"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
