type Props = {
    onSearchInput: (e: Event) => void;
    query: () => string;
    setQuery: (value: string) => void;
    placeholderText: string;
    autoFocus?: boolean;
};

export default function SearchBar({ onSearchInput, query, setQuery, placeholderText, autoFocus = false }: Props) {
    return (<div class="relative glass-panel">
        <svg class="absolute size-6 left-2 top-[0.45rem] stroke-neutral-400 dark:stroke-neutral-500 pointer-events-none">
            <use href={`/ui.svg#search`} />
        </svg>
        <input name="search" type="text" value={query()} onInput={onSearchInput} autocomplete="off" spellcheck={false} placeholder={placeholderText} autofocus={autoFocus || undefined} class="w-full px-10 py-1.5 rounded outline-none placeholder-neutral-400 dark:placeholder-neutral-500 text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200/70 hover:dark:bg-slate-800 focus:bg-slate-100 focus:dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:dark:border-brand-400" />
        {query().length > 0 && (
            <button
                onClick={() => setQuery("")}
                class="absolute flex justify-center items-center h-full w-10 right-0 top-0 stroke-neutral-400 dark:stroke-neutral-500 hover:stroke-neutral-600 hover:dark:stroke-neutral-300"
            >
                <svg class="size-5">
                    <use href={`/ui.svg#x`} />
                </svg>
            </button>
        )}
    </div>)
}
