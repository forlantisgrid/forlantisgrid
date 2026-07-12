import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="wordmark">
          <Link to="/">F O R L A N T I S</Link>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
