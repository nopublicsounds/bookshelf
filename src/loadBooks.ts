import type { Post } from './types.ts'

const files = import.meta.glob('../books/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw.trim() }

  const [, frontmatter, content] = match
  const data: Record<string, unknown> = {}

  for (const line of frontmatter.split(/\r?\n/)) {
    if (!line.trim()) continue
    const separatorIndex = line.indexOf(':')
    if (separatorIndex === -1) continue

    const key = line.slice(0, separatorIndex).trim()
    let value: unknown = line.slice(separatorIndex + 1).trim()

    if (value === 'null') value = null
    else if (typeof value === 'string' && /^".*"$/.test(value)) value = value.slice(1, -1)
    else if (typeof value === 'string' && value !== '' && !Number.isNaN(Number(value))) value = Number(value)

    data[key] = value
  }

  return { data, content: content.trim() }
}

export const posts: Post[] = Object.values(files).map(raw => {
  const { data, content } = parseFrontmatter(raw)
  return {
    id: data.id as string,
    title: data.title as string,
    author: data.author as string,
    cover: data.cover as string,
    rating: data.rating as number,
    memo: (data.memo as string | null) ?? null,
    review: content,
  }
})
