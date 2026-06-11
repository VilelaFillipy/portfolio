import { useState } from 'react'
import { Reveal, Counter } from './_shared/anim'
import './SegurosDemo.css'

const seguros = [
  { t: 'Seguro Auto', d: 'Proteção completa para seu veículo com as melhores seguradoras do mercado e franquia reduzida.' },
  { t: 'Seguro Residencial', d: 'Cobertura contra incêndio, roubo, alagamento e responsabilidade civil para o seu lar.' },
  { t: 'Seguro de Vida', d: 'Tranquilidade para a sua família com cobertura de morte, invalidez e diárias hospitalares.' },
  { t: 'Seguro Empresarial', d: 'Proteção do patrimônio da empresa: equipamentos, estoque, responsabilidade civil e mais.' },
]

const seguradoras = ['Porto Seguro', 'Bradesco Seguros', 'Allianz', 'HDI', 'Azul Seguros', 'Tokio Marine']

const processo = [
  { t: 'Consulta', d: 'Entendemos o que precisa proteger e fazemos a cotação nas principais seguradoras.' },
  { t: 'Comparação', d: 'Apresentamos as melhores opções com cobertura e preço lado a lado, sem enrolação.' },
  { t: 'Contratação', d: 'Burocracia zero: cuidamos de toda a papelada e ativação da apólice.' },
  { t: 'Suporte', d: 'Em caso de sinistro, te acompanhamos do início ao fim para garantir seu direito.' },
]

const depoimentos = [
  { n: 'Patrícia Lemos', c: 'Seguro Auto · Mogi das Cruzes', t: 'Bati meu carro e fiquei desesperada. A corretora me ajudou a acionar o seguro e 7 dias depois meu carro estava concertado. Atendimento nota 10!' },
  { n: 'Eduardo Barros', c: 'Seguro Empresarial · Suzano', t: 'Protegi minha oficina com seguro empresarial e ainda economizei comparando as cotações. Indicaria para qualquer empresário.' },
]

const faq = [
  { q: 'A cotação é gratuita?', a: 'Sim. Fazemos a cotação gratuitamente em até 6 seguradoras diferentes, sem nenhum custo ou compromisso.' },
  { q: 'Qual a diferença entre os planos de seguro auto?', a: 'Os planos variam em cobertura (básica, intermediária e completa), franquia e assistência 24h. Comparamos tudo para você decidir com clareza.' },
  { q: 'O que acontece quando eu tenho um sinistro?', a: 'Abrimos o sinistro junto à seguradora por você e acompanhamos todo o processo. Você não precisa lidar sozinho com burocracia numa hora difícil.' },
  { q: 'Posso contratar para outra cidade?', a: 'Sim. Atendemos clientes em todo o Brasil por WhatsApp e videoconferência. A apólice é válida nacionalmente.' },
]

export default function SegurosDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="seg">
      <header className="seg-nav">
        <div className="seg-nav__in">
          <a href="#topo" className="seg-logo"><b>Previne</b> Seguros</a>
          <nav>
            <a href="#seguros">Seguros</a>
            <a href="#processo">Como funciona</a>
            <a href="#contato" className="seg-nav__cta">Cotar agora</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="seg-hero">
        <div className="seg-hero__bg" />
        <div className="seg-wrap seg-hero__in">
          <div className="seg-hero__txt">
            <Reveal as="span" className="seg-badge">
              <span className="seg-badge__dot" /> SUSEP registrado · +6 seguradoras parceiras
            </Reveal>
            <Reveal as="h1" delay={80}>
              Proteja o que mais importa.<br />Com o menor preço.
            </Reveal>
            <Reveal as="p" delay={160}>
              Corretora de seguros independente. Cotamos nas principais seguradoras do Brasil
              e apresentamos a melhor cobertura para o seu perfil.
            </Reveal>
            <Reveal className="seg-hero__actions" delay={240}>
              <a href="https://wa.me/5511976066281" className="seg-btn" target="_blank" rel="noopener noreferrer">
                Fazer cotação grátis
              </a>
              <a href="#seguros" className="seg-btn seg-btn--ghost">Ver coberturas</a>
            </Reveal>
            <Reveal className="seg-hero__stats" delay={320}>
              <div><strong><Counter to={1200} prefix="+" /></strong><span>apólices ativas</span></div>
              <div><strong><Counter to={6} prefix="+" /></strong><span>seguradoras</span></div>
              <div><strong><Counter to={100} suffix="%" /></strong><span>sinistros acompanhados</span></div>
            </Reveal>
          </div>
          <Reveal className="seg-hero__img" from="left">
            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80" alt="Corretor de seguros" loading="eager" />
            <div className="seg-hero__savings">
              <strong>Até 40%</strong>
              <span>de economia na cotação</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEGUROS */}
      <section id="seguros" className="seg-sec">
        <div className="seg-wrap">
          <Reveal as="p" className="seg-kicker">O que protegemos</Reveal>
          <Reveal as="h2" className="seg-h2" delay={60}>Cobertura completa para cada etapa da sua vida</Reveal>
          <div className="seg-grid">
            {seguros.map((s, i) => (
              <Reveal key={s.t} className="seg-card" delay={i * 80}>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <a href="https://wa.me/5511976066281" className="seg-card__cta" target="_blank" rel="noopener noreferrer">Cotar →</a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARCEIRAS */}
      <section className="seg-sec seg-sec--teal">
        <div className="seg-wrap">
          <Reveal as="p" className="seg-kicker seg-kicker--light">Parceiras</Reveal>
          <Reveal as="h2" className="seg-h2 seg-h2--light" delay={60}>As melhores seguradoras do Brasil trabalhando por você</Reveal>
          <div className="seg-brands">
            {seguradoras.map((s, i) => (
              <Reveal key={s} className="seg-brand" delay={i * 50}>
                {s}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="seg-sec seg-sec--soft">
        <div className="seg-wrap">
          <Reveal as="p" className="seg-kicker">Passo a passo</Reveal>
          <Reveal as="h2" className="seg-h2" delay={60}>Da cotação ao sinistro, nós cuidamos de tudo</Reveal>
          <div className="seg-steps">
            {processo.map((p, i) => (
              <Reveal key={p.t} className="seg-step" delay={i * 90}>
                <span className="seg-step__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="seg-sec">
        <div className="seg-wrap">
          <Reveal as="p" className="seg-kicker">Clientes</Reveal>
          <Reveal as="h2" className="seg-h2" delay={60}>Protegidos e satisfeitos</Reveal>
          <div className="seg-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="seg-dep" delay={i * 100}>
                <div className="seg-dep__stars">★★★★★</div>
                <p>"{d.t}"</p>
                <div className="seg-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="seg-sec seg-sec--soft">
        <div className="seg-wrap seg-faq">
          <Reveal className="seg-faq__head" from="right">
            <p className="seg-kicker">Dúvidas</p>
            <h2 className="seg-h2">Perguntas frequentes</h2>
          </Reveal>
          <Reveal className="seg-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`seg-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="seg-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="seg-faq__icn" />
                </button>
                <div className="seg-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="seg-cta">
        <div className="seg-wrap seg-cta__in">
          <Reveal as="h2">Sua cotação em menos de 5 minutos</Reveal>
          <Reveal as="p" delay={80}>Gratuito, sem compromisso e com até 40% de desconto comparado a contratar direto pela seguradora.</Reveal>
          <Reveal delay={160}>
            <a href="https://wa.me/5511976066281" className="seg-btn seg-btn--white seg-btn--lg" target="_blank" rel="noopener noreferrer">
              Cotar no WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="seg-foot">
        <div className="seg-wrap seg-foot__in">
          <div>
            <span className="seg-logo"><b>Previne</b> Seguros</span>
            <p className="seg-foot__desc">Corretora independente · SUSEP registrado · Auto, Vida, Residencial e Empresarial.</p>
          </div>
          <div className="seg-foot__col">
            <p>Mogi das Cruzes · SP</p>
            <p>(11) 9 0000-0000 · contato@previneseguros.com.br</p>
          </div>
        </div>
        <div className="seg-wrap seg-foot__copy">© {new Date().getFullYear()} Previne Seguros · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
