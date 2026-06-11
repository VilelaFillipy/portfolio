// Ícones de linha (stroke) para os nichos. Sem emojis.
// Cada ícone herda a cor via `currentColor` e o tamanho via prop `size`.

const paths = {
  // Ofícios e Construção — martelo
  'oficios-construcao': (
    <>
      <path d="M14 7l5 5" />
      <path d="M3 21l7.5-7.5" />
      <path d="M14.5 5.5l4 4 2.5-2.5a2.83 2.83 0 0 0-4-4z" />
      <path d="M11 9L9 7m0 0L6.5 4.5a2.12 2.12 0 0 0-3 3L6 10z" />
    </>
  ),
  // Serviços Automotivos — engrenagem
  automotivo: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </>
  ),
  // Saúde e Cuidados — coração com pulso
  saude: (
    <>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      <path d="M3.5 12.5h3l2-3 3 6 2-4 1.5 1h4.5" />
    </>
  ),
  // Corporativo — maleta
  corporativo: (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <path d="M2 13h20" />
    </>
  ),
  // Eventos — taças/brinde
  eventos: (
    <>
      <path d="M8 21h8" />
      <path d="M12 15v6" />
      <path d="M5 3h14l-1.5 7a5.5 5.5 0 0 1-11 0z" />
      <path d="M5.2 4.5h13.6" />
    </>
  ),
  // Educação — capelo de formatura
  educacao: (
    <>
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5" />
      <path d="M22 10v6" />
    </>
  ),
}

export default function NichoIcon({ name, size = 28, ...props }) {
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
