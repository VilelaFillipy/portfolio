import { useState } from 'react'
import DemoIcon from './_shared/DemoIcon'
import { Reveal, Counter } from './_shared/anim'
import './EsteticaDemo.css'

const servicos = [
  { i: 'camera', t: 'Polimento Técnico', d: 'Remoção de riscos, marcas de chuva ácida e oxidação com acabamento espelhado.' },
  { i: 'sun', t: 'Proteção Cerâmica', d: 'Revestimento cerâmico profissional com garantia de 2 anos de brilho e proteção.' },
  { i: 'snow', t: 'Higienização Completa', d: 'Limpeza interna a vapor, extração de odores e sanitização.' },
  { i: 'wrench', t: 'Detalhamento Premium', d: 'Tratamento completo externo e interno para concessionária e eventos.' },
]

const pacotes = [
  { nome: 'Essencial', desc: 'Lavagem completa + aspiração + limpeza de vidros', tempo: '2h', destaque: false },
  { nome: 'Premium', desc: 'Polimento + cera carnaúba + higienização interna', tempo: '4h', destaque: true },
  { nome: 'Elite', desc: 'Cerâmica + polimento completo + detalhamento total', tempo: '8h', destaque: false },
]

const processo = [
  { t: 'Avaliação', d: 'Inspecionamos a pintura e o estado interno para indicar o melhor serviço.' },
  { t: 'Preparação', d: 'Descontaminação e clay bar para remover partículas metálicas e oleosidade.' },
  { t: 'Execução', d: 'Polimento, proteção ou detalhamento por especialistas certificados.' },
  { t: 'Entrega', d: 'Inspeção final com você presente antes de assinar a saída.' },
]

const depoimentos = [
  { n: 'Thiago Oliveira', c: 'BMW Série 3 · Guarulhos', t: 'Proteção cerâmica incrível. O carro devolve água como nunca. O pessoal da PrimeCar é meticuloso com cada detalhe. Vale cada centavo.' },
  { n: 'Juliana Freitas', c: 'Audi Q3 · Santo André', t: 'Polimento removeu todos os riscos do capô que estavam me incomodando há meses. Acabamento de concessionária. Sem igual na região.' },
]

const faq = [
  { q: 'Quanto tempo dura a proteção cerâmica?', a: 'Em condições normais de uso e com manutenção básica, a cobertura cerâmica dura entre 2 a 3 anos com alto brilho e proteção.' },
  { q: 'Meu carro precisa de polimento antes da cerâmica?', a: 'Sim. O polimento corretivo é essencial antes de qualquer proteção para garantir que a cerâmica adhira a uma superfície sem imperfeições.' },
  { q: 'Quanto tempo fica o carro na PrimeCar?', a: 'Depende do pacote. Lavagem e higienização saem no mesmo dia. Polimento + cerâmica exige 1 a 2 dias para cura adequada.' },
  { q: 'Vocês emitem nota fiscal?', a: 'Sim. Todos os serviços têm nota fiscal e certificado de garantia por escrito.' },
]

export default function EsteticaDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="prc">
      <header className="prc-nav">
        <div className="prc-nav__in">
          <a href="#topo" className="prc-logo">Prime<b>Car</b><span>detailing</span></a>
          <nav>
            <a href="#servicos">Serviços</a>
            <a href="#pacotes">Pacotes</a>
            <a href="#contato" className="prc-nav__cta">Agendar</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="prc-hero">
        <div className="prc-hero__overlay" />
        <img
          className="prc-hero__bg"
          src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1400&q=80"
          alt="Detalhamento automotivo premium"
          loading="eager"
        />
        <div className="prc-wrap prc-hero__in">
          <Reveal as="span" className="prc-badge">Detalhamento Premium · Proteção Cerâmica</Reveal>
          <Reveal as="h1" delay={80}>
            Seu carro merece<br />o melhor acabamento
          </Reveal>
          <Reveal as="p" delay={160}>
            Polimento técnico, proteção cerâmica e detalhamento de alto padrão para
            quem valoriza o estado do seu veículo. Guarulhos e região.
          </Reveal>
          <Reveal className="prc-hero__actions" delay={240}>
            <a href="https://wa.me/5511976066281" className="prc-btn" target="_blank" rel="noopener noreferrer">
              Solicitar agendamento
            </a>
            <a href="#pacotes" className="prc-btn prc-btn--ghost">Ver pacotes</a>
          </Reveal>
          <Reveal className="prc-hero__stats" delay={320}>
            <div><strong><Counter to={1200} prefix="+" /></strong><span>veículos tratados</span></div>
            <div><strong><Counter to={2} suffix=" anos" /></strong><span>garantia cerâmica</span></div>
            <div><strong><Counter to={5} suffix=",0 ★" /></strong><span>avaliação</span></div>
          </Reveal>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="prc-sec">
        <div className="prc-wrap">
          <Reveal as="p" className="prc-kicker">Especialidades</Reveal>
          <Reveal as="h2" className="prc-h2" delay={60}>Cuidado com cada detalhe</Reveal>
          <div className="prc-grid">
            {servicos.map((s, i) => (
              <Reveal key={s.t} className="prc-card" delay={i * 80}>
                <span className="prc-card__icon"><DemoIcon name={s.i} size={22} /></span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PACOTES */}
      <section id="pacotes" className="prc-pkgs">
        <div className="prc-wrap">
          <Reveal as="p" className="prc-kicker prc-kicker--light">Pacotes</Reveal>
          <Reveal as="h2" className="prc-h2 prc-h2--light" delay={60}>Escolha o nível de proteção</Reveal>
          <div className="prc-pkgs__grid">
            {pacotes.map((p, i) => (
              <Reveal key={p.nome} className={`prc-pkg${p.destaque ? ' prc-pkg--dest' : ''}`} delay={i * 100}>
                {p.destaque && <span className="prc-pkg__label">Mais popular</span>}
                <h3>{p.nome}</h3>
                <p>{p.desc}</p>
                <div className="prc-pkg__tempo">
                  <span>Duração</span><strong>{p.tempo}</strong>
                </div>
                <a href="https://wa.me/5511976066281" className="prc-btn prc-btn--pkg" target="_blank" rel="noopener noreferrer">
                  {p.destaque ? 'Agendar agora' : 'Consultar preço'}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="prc-sec">
        <div className="prc-wrap">
          <Reveal as="p" className="prc-kicker">Como trabalhamos</Reveal>
          <Reveal as="h2" className="prc-h2" delay={60}>Processo rigoroso em cada etapa</Reveal>
          <div className="prc-steps">
            {processo.map((p, i) => (
              <Reveal key={p.t} className="prc-step" delay={i * 90}>
                <span className="prc-step__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="prc-sec prc-sec--soft">
        <div className="prc-wrap">
          <Reveal as="p" className="prc-kicker">Clientes</Reveal>
          <Reveal as="h2" className="prc-h2" delay={60}>Quem já confiou na PrimeCar</Reveal>
          <div className="prc-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="prc-dep" delay={i * 100}>
                <div className="prc-dep__stars">★★★★★</div>
                <p>"{d.t}"</p>
                <div className="prc-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="prc-sec">
        <div className="prc-wrap prc-faq">
          <Reveal className="prc-faq__head" from="right">
            <p className="prc-kicker">Dúvidas frequentes</p>
            <h2 className="prc-h2">Perguntas comuns</h2>
          </Reveal>
          <Reveal className="prc-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`prc-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="prc-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="prc-faq__icn" />
                </button>
                <div className="prc-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="prc-cta">
        <div className="prc-wrap prc-cta__in">
          <Reveal as="h2">Pronto para o brilho que merece?</Reveal>
          <Reveal as="p" delay={80}>Agendamento rápido pelo WhatsApp. Avaliação gratuita do estado da pintura.</Reveal>
          <Reveal delay={160}>
            <a href="https://wa.me/5511976066281" className="prc-btn prc-btn--lg" target="_blank" rel="noopener noreferrer">
              Agendar pelo WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="prc-foot">
        <div className="prc-wrap prc-foot__in">
          <div>
            <span className="prc-logo">Prime<b>Car</b> <small>detailing</small></span>
            <p className="prc-foot__desc">Polimento, proteção cerâmica e detalhamento premium com garantia.</p>
          </div>
          <div className="prc-foot__col">
            <p>Guarulhos · SP</p>
            <p>(11) 9 0000-0000 · contato@primecar.com.br</p>
          </div>
        </div>
        <div className="prc-wrap prc-foot__copy">© {new Date().getFullYear()} PrimeCar Detailing · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
