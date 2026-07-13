import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="container header-content">
        <div className="wordmark">
          <Link to="/" className="wordmark-link" onClick={close}>
            <img
              src={import.meta.env.BASE_URL + 'forlantis-icon-light.svg'}
              alt=""
              className="header-icon"
            />
            <span className="wordmark-text">
              <span className="wordmark-name">FORLANTIS</span>
              <span className="wordmark-sub">POWER SOLUTIONS</span>
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Hamburger button — mobile only */}
        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`hamburger${open ? ' open' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="nav-mobile">
          <Link to="/" onClick={close}>Home</Link>
          <Link to="/products" onClick={close}>Products</Link>
          <Link to="/about" onClick={close}>About</Link>
          <Link to="/contact" onClick={close}>Contact</Link>
        </nav>
      )}
    </header>
  )
}
