import './BrowserPreview.css'

// Mock de "janela de browser" usado como preview do site (placeholder via gradiente).
// Compartilhado entre a seção Projects (home) e a RamosPage.
export default function BrowserPreview({ ramo }) {
  return (
    <div className="project-preview" style={{ '--p1': ramo.cor, '--p2': ramo.cor2 }}>
      <div className="project-preview__bar">
        <span /><span /><span />
        <div className="project-preview__url">{ramo.slug}.com.br</div>
      </div>
      <div className="project-preview__viewport">
        <div className="project-preview__nav">
          <div className="project-preview__logo" />
          <div className="project-preview__menu">
            <i /><i /><i />
          </div>
        </div>
        <div className="project-preview__hero">
          <div className="project-preview__h1" />
          <div className="project-preview__h2" />
          <div className="project-preview__btn" />
        </div>
        <div className="project-preview__cards">
          <div /><div /><div />
        </div>
      </div>
    </div>
  )
}
