// Ícones de linha para usar dentro das demos (sem emojis).
// herdam cor via currentColor.

const paths = {
  // construção
  building: <><path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" /><path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" /></>,
  wrench: <><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" /></>,
  ruler: <><path d="M3 17l11-11 4 4L7 21l-4-4z" /><path d="M9 11l2 2M12 8l2 2M15 5l2 2" /></>,
  brick: <><rect x="3" y="4" width="18" height="16" rx="1" /><path d="M3 10h18M3 15h18M8 4v6M14 4v6M11 10v5M16 15v5M6 15v5" /></>,
  // instalações
  snow: <><path d="M12 2v20M4 6l16 12M20 6L4 18" /><path d="M12 2l-2 3m2-3l2 3M12 22l-2-3m2 3l2-3M4 6l.2 3.5M4 6l3.4.8M20 18l-.2-3.5M20 18l-3.4-.8M20 6l-.2 3.5M20 6l-3.4.8M4 18l.2-3.5M4 18l3.4-.8" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  camera: <><path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" /></>,
  bolt: <><path d="M13 2L4.5 13.5H11l-1 8.5L18.5 10H12l1-8z" /></>,
}

export default function DemoIcon({ name, size = 26, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] || null}
    </svg>
  )
}
