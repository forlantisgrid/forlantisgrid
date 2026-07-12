import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="wordmark">
          <Link to="/" className="wordmark-link">
            <span className="wordmark-name">FORLANTIS</span>
            <span className="wordmark-sub">POWER SOLUTIONS</span>
          </Link>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
