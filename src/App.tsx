import type { Post } from './types.ts'
import Card from './components/Card.tsx'
import Navbar from './components/Navbar.tsx'

export default function App({ posts }: { posts: Post[] }) {
  return (
    <>
      <Navbar />
      <main>
        {posts.map(post => (
          <Card key={post.id} {...post} />
        ))}
      </main>
    </>
  )
}