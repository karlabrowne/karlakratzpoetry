export function blocksToPlainText(blocks) {
  if (!Array.isArray(blocks)) return ''
  return blocks
    .flatMap((block) => (block.children ?? []).map((child) => child.text ?? ''))
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}
