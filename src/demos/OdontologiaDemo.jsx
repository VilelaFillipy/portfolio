import { useState } from 'react'
import { Reveal, Counter } from './_shared/anim'
import './OdontologiaDemo.css'

const servicos = [
  { t: 'Clareamento Dental', d: 'Clareamento a laser ou com moldeiras, resultados em uma sessão.' },
  { t: 'Implantes', d: 'Implantes de titânio com osseointegração e prótese definitiva.' },
  { t: 'Ortodontia', d: 'Aparelho metálico, cerâmico ou invisível com acompanhamento mensal.' },
  { t: 'Dentística Estética', d: 'Facetas, lentes de contato dental e restaurações em resina.' },
  { t: 'Periodontia', d: 'Tratamento de gengiva, raspagem e cirurgia periodontal.' },
  { t: 'Endodontia', d: 'Canal com anestesia eficaz, sem dor e em sessão única quando possível.' },
]

const processo = [
  { t: 'Avaliação gratuita', d: 'Consulta inicial completa com raio-X panorâmico digital.' },
  { t: 'Plano de tratamento', d: 'Apresentamos todas as opções com prazos e formas de pagamento.' },
  { t: 'Tratamento', d: 'Procedimentos realizados com tecnologia e máximo conforto.' },
  { t: 'Acompanhamento', d: 'Retornos regulares e suporte por WhatsApp entre consultas.' },
]

const depoimentos = [
  { n: 'Renata Almeida', c: 'Paciente há 4 anos · Mogi das Cruzes', t: 'Fiz implante e clareamento aqui. O resultado é incrível e o atendimento é muito humano. Nunca tive medo de dentista, mas aqui fica ainda mais tranquilo.' },
  { n: 'Lucas Prado', c: 'Ortodontia · Suzano', t: 'Comecei o aparelho na Sorriso Pleno e em menos de 18 meses meu sorriso mudou completamente. Equipe incrível!' },
]

const faq = [
  { q: 'A primeira consulta é mesmo gratuita?', a: 'Sim. A avaliação inicial com raio-X panorâmico é gratuita e sem compromisso.' },
  { q: 'Vocês fazem atendimento de urgência?', a: 'Sim. Reservamos horários diários para dor de dente e emergências odontológicas.' },
  { q: 'Quais convênios aceitam?', a: 'Atendemos Unimed, Bradesco Saúde, SulAmérica e planos corporativos. Consulte disponibilidade.' },
  { q: 'Como funciona o pagamento parcelado?', a: 'Parcelamos em até 18x sem juros no cartão de crédito para tratamentos maiores.' },
]

export default function OdontologiaDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="odo">
      <header className="odo-nav">
        <div className="odo-nav__in">
          <a href="#topo" className="odo-logo">Sorriso<b>Pleno</b></a>
          <nav>
            <a href="#servicos">Serviços</a>
            <a href="#processo">Como funciona</a>
            <a href="#contato" className="odo-nav__cta">Agendar consulta</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="odo-hero">
        <div className="odo-hero__blob" />
        <div className="odo-wrap odo-hero__in">
          <div className="odo-hero__txt">
            <Reveal as="span" className="odo-pill">
              <span className="odo-pill__dot" /> Avaliação gratuita com raio-X
            </Reveal>
            <Reveal as="h1" delay={80}>
              O sorriso que você merece, com o cuidado que você precisa
            </Reveal>
            <Reveal as="p" delay={160}>
              Clínica odontológica completa com especialistas em estética, implantes
              e ortodontia. Tecnologia digital, ambiente acolhedor e parcelamento sem juros.
            </Reveal>
            <Reveal className="odo-hero__actions" delay={240}>
              <a href="https://wa.me/5511976066281" className="odo-btn" target="_blank" rel="noopener noreferrer">
                Agendar pelo WhatsApp
              </a>
              <a href="#servicos" className="odo-btn odo-btn--ghost">Ver especialidades</a>
            </Reveal>
            <Reveal className="odo-hero__stats" delay={320}>
              <div><strong><Counter to={3200} prefix="+" /></strong><span>pacientes atendidos</span></div>
              <div><strong><Counter to={18} suffix="x" /></strong><span>sem juros</span></div>
              <div><strong><Counter to={4} suffix=",9 ★" /></strong><span>no Google</span></div>
            </Reveal>
          </div>
          <Reveal className="odo-hero__img" from="left">
            <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80" alt="Dentista sorrindo com paciente" loading="eager" />
            <div className="odo-hero__tag">
              <strong>1ª consulta</strong>
              <span>gratuita + raio-X</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="odo-sec">
        <div className="odo-wrap">
          <Reveal as="p" className="odo-kicker">Especialidades</Reveal>
          <Reveal as="h2" className="odo-h2" delay={60}>Cuidado completo para o seu sorriso</Reveal>
          <div className="odo-grid">
            {servicos.map((s, i) => (
              <Reveal key={s.t} className="odo-card" delay={i * 70}>
                <span className="odo-card__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUE — ESTÉTICA */}
      <section className="odo-estetica">
        <div className="odo-wrap odo-estetica__in">
          <Reveal className="odo-estetica__img" from="right">
            <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80" alt="Sorriso após tratamento estético" loading="lazy" />
            <div className="odo-estetica__badge">
              <strong><Counter to={1} suffix=" sessão" /></strong>
              <span>de clareamento</span>
            </div>
          </Reveal>
          <Reveal className="odo-estetica__txt" from="left" delay={100}>
            <p className="odo-kicker odo-kicker--blue">Estética dental</p>
            <h2 className="odo-h2">Um sorriso que transforma a autoestima</h2>
            <p>
              Clareamento, facetas e lentes de contato dental com planejamento digital —
              você vê o resultado antes de começar o tratamento.
            </p>
            <ul className="odo-estetica__list">
              <li>Simulação digital do resultado</li>
              <li>Clareamento com resultado visível na 1ª sessão</li>
              <li>Facetas ultra-finas sem desgaste dental</li>
            </ul>
            <a href="https://wa.me/5511976066281" className="odo-btn" target="_blank" rel="noopener noreferrer">
              Solicitar simulação gratuita
            </a>
          </Reveal>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="odo-sec odo-sec--soft">
        <div className="odo-wrap">
          <Reveal as="p" className="odo-kicker">Passo a passo</Reveal>
          <Reveal as="h2" className="odo-h2" delay={60}>Da primeira consulta ao sorriso final</Reveal>
          <div className="odo-steps">
            {processo.map((p, i) => (
              <Reveal key={p.t} className="odo-step" delay={i * 90}>
                <span className="odo-step__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="odo-sec">
        <div className="odo-wrap">
          <Reveal as="p" className="odo-kicker">Pacientes</Reveal>
          <Reveal as="h2" className="odo-h2" delay={60}>Histórias que nos motivam</Reveal>
          <div className="odo-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="odo-dep" delay={i * 100}>
                <div className="odo-dep__stars">★★★★★</div>
                <p>"{d.t}"</p>
                <div className="odo-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="odo-sec odo-sec--soft">
        <div className="odo-wrap odo-faq">
          <Reveal className="odo-faq__head" from="right">
            <p className="odo-kicker">Dúvidas frequentes</p>
            <h2 className="odo-h2">Perguntas comuns</h2>
          </Reveal>
          <Reveal className="odo-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`odo-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="odo-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="odo-faq__icn" />
                </button>
                <div className="odo-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="odo-cta">
        <div className="odo-wrap odo-cta__in">
          <Reveal as="h2">Agende sua avaliação gratuita</Reveal>
          <Reveal as="p" delay={80}>Raio-X panorâmico incluído. Atendemos Mogi das Cruzes, Suzano e região.</Reveal>
          <Reveal delay={160}>
            <a href="https://wa.me/5511976066281" className="odo-btn odo-btn--white odo-btn--lg" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="odo-foot">
        <div className="odo-wrap odo-foot__in">
          <div>
            <span className="odo-logo">Sorriso<b>Pleno</b></span>
            <p className="odo-foot__desc">Clínica odontológica completa com foco em estética e bem-estar.</p>
          </div>
          <div className="odo-foot__col">
            <p>Mogi das Cruzes · SP</p>
            <p>(11) 9 0000-0000 · contato@sorrisopleno.com.br</p>
          </div>
        </div>
        <div className="odo-wrap odo-foot__copy">© {new Date().getFullYear()} SorrisoPleno · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
