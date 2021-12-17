import { writable } from 'svelte/store'

export const displayedPoem = writable<string>()
export const selectedCategory = writable<string>()