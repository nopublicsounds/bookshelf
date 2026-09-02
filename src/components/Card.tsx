import type { Post } from '../App.tsx'  


export default function Card(post: Post) {
    return (
        <div>
            <img src={post.cover} alt={`${post.title} cover`} />
            <h3>{post.title}</h3>
            <p>{post.author}</p>
            <p>평점: {post.rating}</p>
        </div>
    )
}