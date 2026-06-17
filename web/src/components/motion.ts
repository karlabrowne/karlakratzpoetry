import { fade, fly } from 'svelte/transition'
import { browser } from '$app/env'

export function prefersReducedMotion(): boolean {
  if (!browser) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function optionalFade(
  node: Element,
  params: Parameters<typeof fade>[1] = {}
) {
  if (prefersReducedMotion()) return { duration: 0 }
  return fade(node, params)
}

export function optionalFly(
  node: Element,
  params: Parameters<typeof fly>[1] = {}
) {
  if (prefersReducedMotion()) return { duration: 0 }
  return fly(node, params)
}
