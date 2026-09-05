import type { Post } from './types.ts'
import Card from './components/Card.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'

export default function App({ posts }: { posts: Post[] }) {
  return (
    <>
      <Navbar />
      <main>
        <section className="grid m-4 md:grid-cols-2 lg:grid-cols-4">
          {posts.map(post => (
            <Card key={post.id} {...post} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}