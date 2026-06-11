import { useState } from 'react'
import { Reveal, Counter } from './_shared/anim'
import './BuffetDemo.css'

const cardapio = [
  { emoji: '🎂', t: 'Buffet Infantil', d: 'Decoração temática, cardápio kids e animação inclusa. Pacotes para 30 a 200 crianças.' },
  { emoji: '💍', t: 'Casamentos e Formaturas', d: 'Menu de degustação, chef dedicado, garçons uniformizados e mise en place elegante.' },
  { emoji: '🍽️', t: 'Eventos Corporativos', d: 'Coffee break, almoço executivo e jantares de negócios com serviço discreto e pontual.' },
  { emoji: '🎉', t: 'Festas e Comemorações', d: 'Aniversários, bodas e reuniões familiares com cardápio personalizado e bolo artístico.' },
]

const pacotes = [
  {
    nome: 'Básico',
    desc: 'Ideal para festas infantis e comemorações de até 80 pessoas.',
    preco: 'R$ 85',
    suffix: '/pessoa',
    itens: ['Cardápio de 12 itens', 'Louça e talheres', 'Garçons uniformizados', 'Montagem e desmontagem'],
  },
  {
    nome: 'Completo',
    desc: 'Para casamentos, formaturas e eventos especiais.',
    preco: 'R$ 145',
    suffix: '/pessoa',
    destaque: true,
    tag: 'Mais completo',
    itens: ['Cardápio de 22 itens', 'Bolo artístico incluso', 'Open bar premium', 'Chef e sous-chef', 'Maitre dedicado', 'Louça de porcelana'],
  },
  {
    nome: 'Corporativo',
    desc: 'Coffee break e almoços executivos com pontualidade garantida.',
    preco: 'R$ 62',
    suffix: '/pessoa',
    itens: ['Coffee break completo', 'Cardápio executivo', 'Garçons treinados', 'Setup em 60 min'],
  },
]

const processo = [
  { t: 'Degustação', d: 'Venha experimentar o cardápio gratuitamente e escolher os pratos do seu evento.' },
  { t: 'Cardápio', d: 'Personalizamos o menu com suas preferências, restrições alimentares e tema do evento.' },
  { t: 'Contrato', d: 'Formalizamos tudo com clareza: itens, quantidade, horários e condições de pagamento.' },
  { t: 'Evento', d: 'Chegamos 3h antes para montar tudo. Você só precisa aparecer e aproveitar.' },
]

const depoimentos = [
  { n: 'Carla Monteiro', c: 'Casamento · 180 convidados', t: 'Contratei para o meu casamento e foi perfeito. Cada prato impecável, o serviço foi discreto e elegante. Os convidados elogiaram muito a comida e a apresentação.' },
  { n: 'Marcos Duarte', c: 'Evento corporativo · 90 pessoas', t: 'Contratamos para um jantar de negócios com diretores internacionais. Pontualidade, apresentação e sabor exatamente como prometido. Recomendo sem hesitar.' },
]

const faq = [
  { q: 'Vocês atendem em minha cidade?', a: 'Atendemos Mogi das Cruzes e cidades da região (raio de 80 km). Para eventos fora dessa área, consulte sobre taxa de deslocamento.' },
  { q: 'Tem opção para restrições alimentares?', a: 'Sim! Adaptamos o cardápio para vegetarianos, veganos, celíacos e alergias específicas. Basta informar no contrato.' },
  { q: 'Posso fazer degustação antes de contratar?', a: 'Sim, oferecemos degustação gratuita para casamentos e eventos acima de 80 pessoas. Agende pelo WhatsApp.' },
  { q: 'A louça e a decoração da mesa estão incluídas?', a: 'Sim. Todos os pacotes incluem louça, talheres, taças e toalhas de mesa. A decoração floral é opcional e cobrada à parte.' },
]

export default function BuffetDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="buf">
      <header className="buf-nav">
        <div className="buf-nav__in">
          <a href="#topo" className="buf-logo"><b>Sabor &</b> Festa</a>
          <nav>
            <a href="#cardapio">Cardápio</a>
            <a href="#pacotes">Pacotes</a>
            <a href="#contato" className="buf-nav__cta">Solicitar orçamento</a>
          </nav>
        </div>
      </header>

      {/* HERO — split */}
      <section id="topo" className="buf-hero">
        <div className="buf-hero__left">
          <div className="buf-hero__txt">
            <Reveal as="span" className="buf-hero__badge">
              🍽️ Buffet · Mogi das Cruzes
            </Reveal>
            <Reveal as="h1" delay={80}>
              O buffet que faz o seu evento <em>inesquecível</em>
            </Reveal>
            <Reveal as="p" delay={160}>
              Cardápio personalizado, chef dedicado e serviço impecável — do infantil ao casamento de luxo.
              Degustação gratuita antes de contratar.
            </Reveal>
            <Reveal className="buf-hero__actions" delay={240}>
              <a href="https://wa.me/5511976066281" className="buf-btn buf-btn--lg" target="_blank" rel="noopener noreferrer">
                Solicitar orçamento
              </a>
              <a href="#cardapio" className="buf-btn buf-btn--ghost">Ver cardápio</a>
            </Reveal>
            <Reveal className="buf-hero__stats" delay={320}>
              <div><strong><Counter to={1400} suffix="+" /></strong><span>eventos realizados</span></div>
              <div><strong><Counter to={18} suffix=" anos" /></strong><span>de experiência</span></div>
              <div><strong><Counter to={99} suffix="%" /></strong><span>satisfação</span></div>
            </Reveal>
          </div>
        </div>
        <div className="buf-hero__right">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80" alt="Mesa de buffet" loading="eager" />
          <div className="buf-hero__tag">
            <strong>Degustação</strong>
            <span>100% gratuita</span>
          </div>
        </div>
      </section>

      {/* CARDÁPIO */}
      <section id="cardapio" className="buf-sec buf-sec--soft">
        <div className="buf-wrap">
          <Reveal as="p" className="buf-kicker">O que oferecemos</Reveal>
          <Reveal as="h2" className="buf-h2" delay={60}>Para cada ocasião, um cardápio sob medida</Reveal>
          <div className="buf-cardapio">
            {cardapio.map((c, i) => (
              <Reveal key={c.t} className="buf-card" delay={i * 70}>
                <span className="buf-card__emoji">{c.emoji}</span>
                <div>
                  <h3>{c.t}</h3>
                  <p>{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ESPECIALIDADE */}
      <section className="buf-esp">
        <div className="buf-wrap buf-esp__in">
          <Reveal className="buf-esp__txt" from="right">
            <p className="buf-kicker" style={{ color: '#fed7aa' }}>Nossa especialidade</p>
            <h2 className="buf-h2" style={{ color: '#fff', marginBottom: 16 }}>Ingredientes frescos, sabor que se lembra</h2>
            <p className="buf-esp__txt p">Trabalhamos com fornecedores locais e ingredientes frescos diariamente.
              Nosso chef tem 15 anos de experiência em alta gastronomia e supervisiona cada detalhe do seu evento.</p>
            <div className="buf-esp__nums">
              <div><strong><Counter to={15} suffix=" anos" /></strong><span>do chef principal</span></div>
              <div><strong><Counter to={80} suffix="+" /></strong><span>itens no cardápio</span></div>
              <div><strong><Counter to={12} suffix="h" /></strong><span>máx. antecedência</span></div>
            </div>
            <a href="https://wa.me/5511976066281" className="buf-btn" style={{ background: '#fff', color: '#c2410c' }} target="_blank" rel="noopener noreferrer">
              Agendar degustação
            </a>
          </Reveal>
          <Reveal className="buf-esp__img" from="left" delay={120}>
            <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80" alt="Chef preparando prato" />
          </Reveal>
        </div>
      </section>

      {/* PACOTES */}
      <section id="pacotes" className="buf-sec">
        <div className="buf-wrap">
          <Reveal as="p" className="buf-kicker buf-kicker--amber">Investimento</Reveal>
          <Reveal as="h2" className="buf-h2" delay={60}>Pacotes para cada tipo de evento</Reveal>
          <div className="buf-pacotes">
            {pacotes.map((p, i) => (
              <Reveal key={p.nome} className={`buf-pacote${p.destaque ? ' buf-pacote--dest' : ''}`} delay={i * 80}>
                {p.tag && <span className="buf-pacote__tag">{p.tag}</span>}
                <h3>{p.nome}</h3>
                <p className="buf-pacote__desc">{p.desc}</p>
                <div className="buf-pacote__preco">{p.preco}<small>{p.suffix}</small></div>
                <ul className="buf-pacote__itens">
                  {p.itens.map((it) => <li key={it}>{it}</li>)}
                </ul>
                <a href="https://wa.me/5511976066281" className={`buf-btn${p.destaque ? '' : ' buf-btn--outline'}`} style={{ width: '100%', justifyContent: 'center' }} target="_blank" rel="noopener noreferrer">
                  Solicitar orçamento
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="buf-sec buf-sec--soft">
        <div className="buf-wrap">
          <Reveal as="p" className="buf-kicker">Como funciona</Reveal>
          <Reveal as="h2" className="buf-h2" delay={60}>Da degustação ao seu evento em 4 passos</Reveal>
          <div className="buf-steps">
            {processo.map((p, i) => (
              <Reveal key={p.t} className="buf-step" delay={i * 90}>
                <span className="buf-step__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="buf-sec">
        <div className="buf-wrap">
          <Reveal as="p" className="buf-kicker">Clientes</Reveal>
          <Reveal as="h2" className="buf-h2" delay={60}>Quem provou aprovou</Reveal>
          <div className="buf-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="buf-dep" delay={i * 100}>
                <div className="buf-dep__stars">★★★★★</div>
                <p>"{d.t}"</p>
                <div className="buf-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="buf-sec buf-sec--soft">
        <div className="buf-wrap buf-faq">
          <Reveal className="buf-faq__head" from="right">
            <p className="buf-kicker">Dúvidas</p>
            <h2 className="buf-h2">Perguntas frequentes</h2>
          </Reveal>
          <Reveal className="buf-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`buf-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="buf-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="buf-faq__icn" />
                </button>
                <div className="buf-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="buf-cta">
        <div className="buf-wrap buf-cta__in">
          <Reveal as="h2">Seu próximo evento merece o melhor buffet</Reveal>
          <Reveal as="p" delay={80}>Solicite um orçamento sem compromisso e agende sua degustação gratuita.</Reveal>
          <Reveal delay={160}>
            <a href="https://wa.me/5511976066281" className="buf-btn buf-btn--lg" style={{ background: '#fff', color: '#c2410c' }} target="_blank" rel="noopener noreferrer">
              Pedir orçamento pelo WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="buf-foot">
        <div className="buf-wrap buf-foot__in">
          <div>
            <span className="buf-logo"><b>Sabor &</b> Festa</span>
            <p className="buf-foot__desc">Buffet para eventos · Infantil, casamentos e corporativo · Mogi das Cruzes.</p>
          </div>
          <div className="buf-foot__col">
            <p>Mogi das Cruzes · SP</p>
            <p>(11) 9 0000-0000 · contato@saborefesta.com.br</p>
          </div>
        </div>
        <div className="buf-wrap buf-foot__copy">© {new Date().getFullYear()} Sabor & Festa · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
