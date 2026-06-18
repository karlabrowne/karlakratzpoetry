<script lang="ts">
  import { onMount, tick } from 'svelte'
  import { goto } from '$app/navigation'
  import { browser } from '$app/env'
  import {
    search,
    toSections,
    flattenSections,
    type SearchResult,
    type ResultSection,
  } from './search'
  import { searchOpen, searchTrigger } from './searchStore'
  import SearchIcon from './icons/SearchIcon.svelte'
  import { get } from 'svelte/store'

  let query = ''
  let sections: ResultSection[] = []
  let flatResults: SearchResult[] = []
  let activeIndex = 0
  let loading = false
  let error = ''
  let inputEl: HTMLInputElement
  let panelEl: HTMLDivElement
  let wasOpen = false

  $: activeResult = flatResults[activeIndex]

  $: if ($searchOpen && !wasOpen) {
    wasOpen = true
    void resetAndSearch()
  } else if (!$searchOpen) {
    wasOpen = false
  }

  async function resetAndSearch() {
    query = ''
    activeIndex = 0
    error = ''
    await runSearch('')
    await tick()
    inputEl?.focus()
  }

  async function runSearch(value: string) {
    loading = true
    error = ''

    try {
      const groups = await search(value)
      sections = toSections(groups)
      flatResults = flattenSections(sections)
      activeIndex = 0
    } catch (err) {
      sections = []
      flatResults = []
      error = 'Search is unavailable right now.'
      console.error(err)
    } finally {
      loading = false
    }
  }

  function closePalette() {
    $searchOpen = false
    get(searchTrigger)?.focus()
  }

  async function selectResult(result: SearchResult | undefined) {
    if (!result) return
    closePalette()
    await goto(result.href)
  }

  function handleInput(event: Event) {
    const target = event.currentTarget as HTMLInputElement
    query = target.value
    void runSearch(query)
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault()
      closePalette()
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (flatResults.length === 0) return
      if (activeIndex < flatResults.length - 1) {
        activeIndex += 1
        scrollActiveIntoView()
      }
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (flatResults.length === 0) return
      if (activeIndex > 0) {
        activeIndex -= 1
        scrollActiveIntoView()
      }
      return
    }

    if (event.key === 'Enter') {
      event.preventDefault()
      void selectResult(activeResult)
      return
    }

    if (event.key === 'Tab') {
      event.preventDefault()
      inputEl?.focus()
    }
  }

  function scrollActiveIntoView() {
    if (!browser || !panelEl) return
    const activeEl = panelEl.querySelector(`[data-result-index="${activeIndex}"]`)
    activeEl?.scrollIntoView({ block: 'nearest' })
  }

  function handleBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      closePalette()
    }
  }

  function resultId(index: number) {
    return `search-result-${index}`
  }

  function sectionStartIndex(sectionIndex: number) {
    return sections
      .slice(0, sectionIndex)
      .reduce((total, section) => total + section.results.length, 0)
  }

  onMount(() => {
    if ($searchOpen) {
      wasOpen = true
      void resetAndSearch()
    }
  })
</script>

<svelte:window
  on:keydown={(event) => {
    if (!$searchOpen) return
    if (event.key === 'Escape') {
      event.preventDefault()
      closePalette()
    }
  }}
/>

{#if $searchOpen}
  <div class="backdrop" role="presentation" on:click={handleBackdropClick}>
    <div
      bind:this={panelEl}
      class="panel"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div class="search-field">
        <SearchIcon size={18} />
        <input
          bind:this={inputEl}
          id="search-input"
          type="search"
          placeholder="Search by title, category, or words…"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
          aria-controls="search-results"
          aria-activedescendant={activeResult ? resultId(activeIndex) : undefined}
          value={query}
          on:input={handleInput}
          on:keydown={handleKeydown}
        />
      </div>

      <div id="search-results" class="results" role="listbox" aria-label="Search results">
        {#if loading}
          <p class="status">Searching…</p>
        {:else if error}
          <p class="status">{error}</p>
        {:else if flatResults.length === 0}
          <p class="status">No results found.</p>
        {:else}
          {#each sections as section, sectionIndex}
            <p class="group-label">{section.label}</p>
            <ul>
              {#each section.results as result, resultIndex}
                <li>
                  <button
                    id={resultId(sectionStartIndex(sectionIndex) + resultIndex)}
                    type="button"
                    role="option"
                    aria-selected={sectionStartIndex(sectionIndex) + resultIndex ===
                      activeIndex}
                    class:active={sectionStartIndex(sectionIndex) + resultIndex ===
                      activeIndex}
                    data-result-index={sectionStartIndex(sectionIndex) + resultIndex}
                    on:mouseenter={() =>
                      (activeIndex = sectionStartIndex(sectionIndex) + resultIndex)}
                    on:click={() => selectResult(result)}
                  >
                    <span class="title">{result.title}</span>
                    {#if result.subtitle}
                      <span class="subtitle">{result.subtitle}</span>
                    {/if}
                  </button>
                </li>
              {/each}
            </ul>
          {/each}
        {/if}
      </div>

      <div class="footer">
        <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
        <span><kbd>↵</kbd> open</span>
        <span><kbd>esc</kbd> close</span>
      </div>
    </div>
  </div>
{/if}

<style>
  .backdrop {
    position: fixed;
    inset: 0;
    z-index: 30;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 10vh 1rem 1rem;
    background: rgba(22, 38, 41, 0.45);
  }

  .panel {
    width: min(560px, 100%);
    max-height: min(70vh, 520px);
    display: flex;
    flex-direction: column;
    background: var(--garden-50);
    color: var(--garden-950);
    border: 1px solid var(--garden-300);
    border-radius: 12px;
    box-shadow: 0 20px 50px rgba(22, 38, 41, 0.2);
    overflow: hidden;
  }

  .search-field {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 1.1rem;
    border-bottom: 1px solid var(--garden-200);
  }

  .search-field input {
    width: 100%;
    border: none;
    background: transparent;
    color: inherit;
    font: inherit;
    font-size: 1.1rem;
    outline: none;
  }

  .search-field input::placeholder {
    color: var(--garden-600);
    opacity: 0.8;
  }

  .results {
    overflow: auto;
    padding: 0.5rem;
    flex: 1;
  }

  .group-label {
    margin: 0.5rem 0.6rem 0.25rem;
    font-family: var(--ui-font);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--garden-600);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
  }

  button {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.15rem;
    padding: 0.65rem 0.75rem;
    border: none;
    border-radius: 8px;
    background: transparent;
    color: inherit;
    text-align: left;
    cursor: pointer;
    font: inherit;
  }

  button.active,
  button:hover {
    background: var(--garden-100);
  }

  .title {
    font-size: 1rem;
    line-height: 1.3;
  }

  .subtitle {
    font-size: 0.85rem;
    line-height: 1.35;
    color: var(--garden-700);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .status {
    margin: 1rem 0.75rem;
    color: var(--garden-700);
    font-size: 0.95rem;
  }

  .footer {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem 1rem;
    padding: 0.75rem 1rem;
    border-top: 1px solid var(--garden-200);
    font-family: var(--ui-font);
    font-size: 0.75rem;
    color: var(--garden-700);
  }

  kbd {
    display: inline-block;
    margin-right: 0.2rem;
    padding: 0.1rem 0.35rem;
    border: 1px solid var(--garden-300);
    border-radius: 4px;
    background: var(--garden-100);
    font-family: inherit;
    font-size: 0.7rem;
  }

  @media (prefers-color-scheme: dark) {
    .panel {
      background: var(--garden-900);
      color: var(--garden-50);
      border-color: var(--garden-800);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
    }

    .search-field {
      border-bottom-color: var(--garden-800);
    }

    .search-field input::placeholder {
      color: var(--garden-300);
    }

    button.active,
    button:hover {
      background: var(--garden-800);
    }

    .subtitle,
    .status,
    .footer {
      color: var(--garden-200);
    }

    .footer {
      border-top-color: var(--garden-800);
    }

    kbd {
      border-color: var(--garden-700);
      background: var(--garden-800);
    }
  }
</style>
