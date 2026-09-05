import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <h1 className="font-bold text-2xl text-black no-underline m-4">
        <Link to="/">내 책장</Link>
      </h1>
    </nav>
  )
}