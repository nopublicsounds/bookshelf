import { useParams, Link } from 'react-router-dom'
import type { Post } from '../types.ts'

export default function PostDetail({ posts }: { posts: Post[] }) {
  const { id } = useParams()
  const post = posts.find(item => item.id === id)

  if (!post) {
    return (
      <div className="p-6">
        <p>not found</p>
      </div>
    )
  }

  return (
    <div className="p-6 text-black">
      <img src={post.cover} alt={`${post.title} cover`} className="mt-4 w-full max-w-md" />
      <h1 className="mt-4 text-3xl font-bold">{post.title}</h1>
      <p className="mt-2">{post.author}</p>
      <p className="mt-2">★ {post.rating}/5</p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">리뷰</h2>
        <p>{post.review}</p>
      </div>
    </div>
  )
}
