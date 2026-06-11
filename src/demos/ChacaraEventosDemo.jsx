import { useState } from 'react'
import { Reveal, Counter } from './_shared/anim'
import './ChacaraEventosDemo.css'

const espacos = [
  {
    t: 'Salão Principal',
    sub: 'Até 400 convidados',
    tag: 'Mais pedido',
    bg: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
  },
  {
    t: 'Jardim Externo',
    sub: 'Cerimônias ao ar livre',
    tag: 'Casamentos',
    bg: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
  },
  {
    t: 'Espaço Gourmet',
    sub: 'Jantares até 80 pessoas',
    tag: 'Eventos íntimos',
    bg: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80',
  },
]

const pacotes = [
  {
    nome: 'Essencial',
    desc: 'Para festas e celebrações de até 150 convidados.',
    preco: 'R$ 4.500',
    de: 'a partir de',
    itens: ['Salão por 8 horas', 'Mesas e cadeiras', 'Estacionamento grátis', 'Equipe de limpeza', 'Suporte no dia'],
  },
  {
    nome: 'Premium',
    desc: 'Casamentos e eventos especiais com estrutura completa.',
    preco: 'R$ 9.800',
    de: 'a partir de',
    destaque: true,
    tag: 'Mais escolhido',
    itens: ['Salão principal + jardim', 'Iluminação cênica', 'Pista de dança', 'Camarim privativo', 'Coordenador dedicado', 'Estacionamento VIP'],
  },
  {
    nome: 'Corporativo',
    desc: 'Reuniões, confraternizações e lançamentos de produto.',
    preco: 'R$ 3.200',
    de: 'a partir de',
    itens: ['Sala de reunião A/V', 'Coffee break incluso', 'Wi-Fi de alta velocidade', 'Projetor + tela 4K', 'Estacionamento grátis'],
  },
]

const processo = [
  { t: 'Visita', d: 'Agende uma visita guiada para conhecer os espaços pessoalmente, sem compromisso.' },
  { t: 'Proposta', d: 'Receba uma proposta personalizada com datas disponíveis e condições especiais.' },
  { t: 'Reserva', d: 'Confirme a data com entrada de 30% e o restante parcelado até o evento.' },
  { t: 'Celebre', d: 'No dia do evento, toda a equipe estará pronta para que você só aproveite.' },
]

const depoimentos = [
  { n: 'Amanda & Ricardo', c: 'Casamento · março de 2025', ev: 'Casamento', t: 'O jardim estava simplesmente deslumbrante. Minha cerimônia foi exatamente como eu sonhei. A equipe antecipou cada detalhe e eu não precisei me preocupar com nada.' },
  { n: 'Felipe Costa', c: 'Confraternização empresarial · nov. 2024', ev: 'Corporativo', t: 'Realizamos a festa de fim de ano da empresa com 200 funcionários. Organização impecável, equipe super atenciosa e o espaço impressionou a todos.' },
]

const faq = [
  { q: 'Posso contratar fornecedores externos?', a: 'Sim! Trabalhamos com lista de fornecedores parceiros recomendados, mas você tem total liberdade para trazer seu buffet, DJ e decoração preferidos.' },
  { q: 'A chácara tem hospedagem?', a: 'Temos 4 suítes disponíveis para os noivos ou anfitriões, com diária a partir de R$ 350. Ideal para o dia seguinte ao evento.' },
  { q: 'O que acontece em caso de chuva?', a: 'Nossa estrutura de tendas cobertas e o salão principal garantem que qualquer evento ocorra independente do clima. Planejamos sempre com plano B.' },
  { q: 'Há estacionamento?', a: 'Sim. Temos área de estacionamento com capacidade para 120 veículos, mais área externa para ônibus fretados.' },
]

export default function ChacaraEventosDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="cha">
      <header className="cha-nav">
        <div className="cha-nav__in">
          <a href="#topo" className="cha-logo"><b>Vila</b> das Flores</a>
          <nav>
            <a href="#espacos">Espaços</a>
            <a href="#pacotes">Pacotes</a>
            <a href="#contato" className="cha-nav__cta">Agendar visita</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="cha-hero">
        <div className="cha-hero__bg" />
        <div className="cha-hero__overlay" />
        <div className="cha-hero__in">
          <div className="cha-hero__txt">
            <Reveal as="span" className="cha-hero__badge">
              ✦ Chácara de Eventos · Mogi das Cruzes
            </Reveal>
            <Reveal as="h1" delay={80}>
              O cenário perfeito para o dia <em>mais importante</em> da sua vida
            </Reveal>
            <Reveal as="p" delay={160}>
              3.000 m² de área verde, salão climatizado, jardim exuberante e equipe dedicada
              para que você só precise aparecer e sorrir.
            </Reveal>
            <Reveal className="cha-hero__actions" delay={240}>
              <a href="https://wa.me/5511976066281" className="cha-btn cha-btn--lg" target="_blank" rel="noopener noreferrer">
                Agendar visita gratuita
              </a>
              <a href="#pacotes" className="cha-btn cha-btn--ghost">Ver pacotes</a>
            </Reveal>
            <Reveal className="cha-hero__stats" delay={320}>
              <div><strong><Counter to={320} suffix="+" /></strong><span>eventos realizados</span></div>
              <div><strong><Counter to={12} suffix=" anos" /></strong><span>de experiência</span></div>
              <div><strong><Counter to={98} suffix="%" /></strong><span>avaliações 5 estrelas</span></div>
            </Reveal>
          </div>
        </div>
        <div className="cha-scroll">
          <div className="cha-scroll__arrow" />
          <span>Rolar</span>
        </div>
      </section>

      {/* ESPAÇOS */}
      <section id="espacos" className="cha-sec">
        <div className="cha-wrap">
          <Reveal as="p" className="cha-kicker">Nossos espaços</Reveal>
          <Reveal as="h2" className="cha-h2" delay={60}>Ambientes para cada tipo de celebração</Reveal>
          <Reveal as="p" className="cha-lead" delay={120}>
            Do casamento íntimo à festa de 400 pessoas, temos o espaço ideal — com estrutura profissional e toda a infraestrutura inclusa.
          </Reveal>
          <div className="cha-espacos">
            {espacos.map((e, i) => (
              <Reveal key={e.t} className="cha-espaco" delay={i * 80}>
                <div className="cha-espaco__bg" style={{ backgroundImage: `url(${e.bg})` }} />
                <div className="cha-espaco__overlay" />
                <div className="cha-espaco__info">
                  <h3>{e.t}</h3>
                  <span>{e.sub}</span>
                </div>
                <span className="cha-espaco__tag">{e.tag}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA HIGHLIGHT */}
      <section className="cha-galeria">
        <div className="cha-wrap cha-galeria__in">
          <Reveal className="cha-galeria__txt" from="right">
            <p className="cha-kicker cha-kicker--light">Por que nos escolher</p>
            <h2 className="cha-h2 cha-h2--light" style={{ marginBottom: 16 }}>Cada detalhe pensado para você</h2>
            <p className="cha-lead cha-lead--light" style={{ marginBottom: 18 }}>
              Não somos apenas um espaço — somos parceiros no planejamento do seu evento.
              Da visita ao dia da festa, você tem uma equipe exclusiva.
            </p>
            <ul className="cha-galeria__list">
              <li>Coordenadora de eventos dedicada ao seu dia</li>
              <li>Jardim iluminado para cerimônias noturnas</li>
              <li>Pista de dança profissional de 80 m²</li>
              <li>Gerador próprio — sem risco de queda de energia</li>
              <li>Equipe de segurança e brigadistas no local</li>
            </ul>
            <a href="https://wa.me/5511976066281" className="cha-btn" target="_blank" rel="noopener noreferrer">
              Falar com uma consultora
            </a>
          </Reveal>
          <Reveal className="cha-galeria__mosaic" from="left" delay={120}>
            <div className="cha-galeria__img">
              <img src="https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=900&q=80" alt="Casamento no jardim" />
            </div>
            <div className="cha-galeria__img">
              <img src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&q=80" alt="Decoração de salão" />
            </div>
            <div className="cha-galeria__img">
              <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80" alt="Festa na chácara" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PACOTES */}
      <section id="pacotes" className="cha-sec cha-sec--soft">
        <div className="cha-wrap">
          <Reveal as="p" className="cha-kicker cha-kicker--gold">Investimento</Reveal>
          <Reveal as="h2" className="cha-h2" delay={60}>Pacotes para todos os tipos de evento</Reveal>
          <Reveal as="p" className="cha-lead" delay={120}>
            Preços transparentes e condições especiais para reservas antecipadas. Sem letras miúdas.
          </Reveal>
          <div className="cha-pacotes">
            {pacotes.map((p, i) => (
              <Reveal key={p.nome} className={`cha-pacote${p.destaque ? ' cha-pacote--dest' : ''}`} delay={i * 80}>
                {p.tag && <span className="cha-pacote__tag">{p.tag}</span>}
                <h3>{p.nome}</h3>
                <p className="cha-pacote__desc">{p.desc}</p>
                <div className="cha-pacote__price">{p.preco}<span> /evento</span></div>
                <p className="cha-pacote__from">{p.de}</p>
                <ul className="cha-pacote__list">
                  {p.itens.map((it) => <li key={it}>{it}</li>)}
                </ul>
                <a href="https://wa.me/5511976066281" className={`cha-btn${p.destaque ? '' : ' cha-btn--outline'}`} style={{ width: '100%', justifyContent: 'center' }} target="_blank" rel="noopener noreferrer">
                  Solicitar proposta
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="cha-sec">
        <div className="cha-wrap">
          <Reveal as="p" className="cha-kicker">Como funciona</Reveal>
          <Reveal as="h2" className="cha-h2" delay={60}>Da visita ao seu evento em 4 passos</Reveal>
          <div className="cha-steps">
            {processo.map((p, i) => (
              <Reveal key={p.t} className="cha-step" delay={i * 90}>
                <span className="cha-step__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="cha-sec cha-sec--soft">
        <div className="cha-wrap">
          <Reveal as="p" className="cha-kicker">Depoimentos</Reveal>
          <Reveal as="h2" className="cha-h2" delay={60}>O que nossos clientes dizem</Reveal>
          <div className="cha-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="cha-dep" delay={i * 100}>
                <div className="cha-dep__stars">★★★★★</div>
                <p>"{d.t}"</p>
                <div className="cha-dep__who">
                  <strong>{d.n}</strong>
                  <span>{d.c}</span>
                  <div><span className="cha-dep__event">{d.ev}</span></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cha-sec">
        <div className="cha-wrap cha-faq">
          <Reveal className="cha-faq__head" from="right">
            <p className="cha-kicker">Dúvidas</p>
            <h2 className="cha-h2">Perguntas frequentes</h2>
          </Reveal>
          <Reveal className="cha-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`cha-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="cha-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="cha-faq__icn" />
                </button>
                <div className="cha-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="cha-cta">
        <div className="cha-wrap cha-cta__in">
          <Reveal as="h2">Seu evento inesquecível começa com uma visita</Reveal>
          <Reveal as="p" delay={80}>Agende uma visita gratuita, conheça cada espaço pessoalmente e receba uma proposta exclusiva.</Reveal>
          <Reveal delay={160}>
            <a href="https://wa.me/5511976066281" className="cha-btn cha-btn--lg" style={{ background: '#fff', color: '#9d174d' }} target="_blank" rel="noopener noreferrer">
              Agendar visita pelo WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="cha-foot">
        <div className="cha-wrap cha-foot__in">
          <div>
            <span className="cha-logo"><b>Vila</b> das Flores</span>
            <p className="cha-foot__desc">Chácara de eventos · Casamentos, festas e corporativo · Mogi das Cruzes.</p>
          </div>
          <div className="cha-foot__col">
            <p>Mogi das Cruzes · SP</p>
            <p>(11) 9 0000-0000 · contato@viladasflores.com.br</p>
          </div>
        </div>
        <div className="cha-wrap cha-foot__copy">© {new Date().getFullYear()} Vila das Flores · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
