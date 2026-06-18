import { writable } from 'svelte/store'

export const searchOpen = writable(false)
export const searchTrigger = writable<HTMLElement | null>(null)
