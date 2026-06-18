<script lang="ts">
  export let size = 16
  export let expanded = false
</script>

<svg
  class:expanded
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <polyline points="6 9 12 15 18 9" />
</svg>

<style>
  svg {
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }

  svg.expanded {
    transform: rotate(180deg);
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      transition: none;
    }
  }
</style>
