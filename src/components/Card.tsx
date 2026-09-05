import type { Post } from '../App.tsx'  
import { BrowserRouter, Link } from 'react-router-dom'

export default function Card(post: Post) {
    return (
        <BrowserRouter>
            <Link to={`/posts/${post.id}`}>
                <div>
                    <img src={post.cover} alt={`${post.title} cover`} />
                    <h3 className="font-bold text-xl text-black m-2">{post.title}</h3>
                    <p className="text-black m-2">{post.author}</p>
                    <p className="text-black m-2">★ {post.rating}/5</p>
                </div>
            </Link>
        </BrowserRouter>
    )
}