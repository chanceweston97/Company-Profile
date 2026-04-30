export function WestonLogo({ className }: { className?: string }) {
  return (
    <svg
      width="180"
      height="64"
      viewBox="0 0 176 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Westons Tech Solutions logo"
      className={className}
    >
      <g transform="translate(0,8)" fill="currentColor">
        <path
          d="M0 0 L18 48 L30 24 L42 48 L60 0 L48 0 L36 28 L30 14 L24 28 L12 0 Z"
        />
      </g>
      <g transform="translate(70,18)" fill="currentColor">
        <text
          x="0"
          y="18"
          fontSize="22"
          fontWeight="700"
          fontFamily="Inter, Segoe UI, Arial, sans-serif"
          letterSpacing="1"
        >
          WESTONS
        </text>
        <text
          x="50"
          y="36"
          textAnchor="middle"
          fontSize="11"
          fontWeight="500"
          fontFamily="Inter, Segoe UI, Arial, sans-serif"
          letterSpacing="0.4"
          opacity="0.9"
        >
          TECH SOLUTIONS
        </text>
      </g>
    </svg>
  );
}
