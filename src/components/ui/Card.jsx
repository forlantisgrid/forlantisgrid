export default function Card({ children, className = '', dark = false }) {
  return (
    <div className={`card ${dark ? 'dark' : ''} ${className}`}>
      {children}
    </div>
  )
}
