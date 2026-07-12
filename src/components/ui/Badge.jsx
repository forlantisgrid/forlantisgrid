export default function Badge({ children, variant = 'light' }) {
  return (
    <span className={`badge ${variant === 'dark' ? 'dark' : ''}`}>
      {children}
    </span>
  )
}
