import type { Post } from './types.ts'
export default function App({ posts }: { posts: Post[] }) {
  return (
    <main>
      {posts.map(post => (
        <article key={post.id}>
          <header>
            <h2>{post.title}</h2>
          </header>
          <figure>
            <img src={post.cover} alt={`${post.title} cover`} />
            <figcaption>Author: {post.author}</figcaption>
          </figure>
          <p>Review: {post.review}</p>
          <p>Memo: {post.memo}</p>
          <p>Rating: {post.rating}</p>
        </article>
      ))}
    </main>
  )
}