import { writable } from 'svelte/store'

export const featuredPoem = writable<string>()
export const selectedCategory = writable<string>()