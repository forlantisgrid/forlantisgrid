/**
 * variant="dark"  — navy mark + gold accent, for white/light backgrounds (About page)
 * variant="light" — white mark + gold accent, for dark backgrounds (Footer)
 */
export default function Logo({ height = 120, className = '', variant = 'dark' }) {
  const mark = variant === 'light' ? '#ffffff' : '#0a1728'
  const gold = '#d9a441'

  return (
    <svg
      viewBox="0 0 460 385"
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Forlantis Power Solutions"
      className={className}
      style={{ display: 'block', width: 'auto' }}
    >
      {/* F lettermark — bold, slight italic lean via skewX */}
      <g transform="translate(115, 12) skewX(-8)">
        <path
          d="M 0,0 H 90 V 35 H 42 V 82 H 78 V 112 H 42 V 185 H 0 Z"
          fill={mark}
        />
      </g>

      {/* P lettermark — bold, with evenodd bowl counter */}
      <path
        transform="translate(218, 12)"
        d="M 0,0 H 40 V 185 H 0 Z M 40,0 C 128,0 128,165 40,165 Z M 40,32 C 98,32 98,133 40,133 Z"
        fillRule="evenodd"
        fill={mark}
      />

      {/* Lightning bolt — clean polygon, intentionally crisp */}
      <path
        d="M 198,48 L 234,48 L 212,118 L 248,118 L 178,224 L 200,148 L 166,148 Z"
        fill={gold}
      />

      {/* FORLANTIS */}
      <text
        x="230"
        y="264"
        textAnchor="middle"
        fontFamily="'Archivo Expanded', 'Archivo', Arial, sans-serif"
        fontWeight="800"
        fontSize="46"
        letterSpacing="6"
        fill={mark}
      >FORLANTIS</text>

      {/* — POWER SOLUTIONS — */}
      <text
        x="230"
        y="298"
        textAnchor="middle"
        fontFamily="'Archivo', Arial, sans-serif"
        fontWeight="600"
        fontSize="14"
        letterSpacing="5"
        fill={gold}
      >— POWER SOLUTIONS —</text>
    </svg>
  )
}
