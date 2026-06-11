import { useState } from 'react'
import DemoIcon from './_shared/DemoIcon'
import { Reveal, Counter } from './_shared/anim'
import './PneusDemo.css'

const servicos = [
  { i: 'ruler', t: 'Alinhamento 3D', d: 'Sistema computadorizado para alinhamento preciso de direção e suspensão.' },
  { i: 'bolt', t: 'Balanceamento', d: 'Eliminação de vibrações com balanceamento dinâmico digital.' },
  { i: 'wrench', t: 'Troca de Pneus', d: 'Montagem e desmontagem profissional de todas as marcas e tamanhos.' },
  { i: 'building', t: 'Suspensão', d: 'Amortecedores, buchas e rotulas com diagnóstico de geometria.' },
]

const marcas = ['Michelin', 'Pirelli', 'Bridgestone', 'Goodyear', 'Continental', 'Dunlop']

const processo = [
  { t: 'Escolha o pneu', d: 'Mais de 200 modelos em estoque para o seu perfil de uso.' },
  { t: 'Preço na hora', d: 'Consulta sem enrolação: fale conosco e receba o valor em minutos.' },
  { t: 'Montagem expressa', d: 'Troca rápida enquanto você aguarda no conforto da recepção.' },
  { t: 'Alinhamento e balanceamento', d: 'Sai alinhado, balanceado e com calibragem verificada.' },
]

const diferenciais = [
  { t: 'Mais de 200 pneus em estoque', d: 'Raramente precisamos encomendar. Sai no mesmo dia.' },
  { t: 'Preço sem jogo', d: 'Cotação transparente antes de qualquer serviço.' },
  { t: 'Alinhamento com garantia', d: 'Se a direção puxar em 30 dias, fazemos de graça novamente.' },
  { t: 'Todos os tamanhos', d: 'Carros de passeio, SUVs, vans e pickups.' },
]

const depoimentos = [
  { n: 'Eduardo Batista', c: 'Toyota Hilux · Mogi das Cruzes', t: 'Fui em dois lugares antes e o preço era abusivo. Na RodaBem, pneu Michelin com montagem e alinhamento em conta. Entrega expressa, sem enrolação.' },
  { n: 'Fernanda Costa', c: 'Jeep Renegade · Suzano', t: 'Excelente atendimento, me explicaram tudo antes de trocar. Alinhamento 3D ficou perfeito. Melhor loja de pneus da região.' },
]

const faq = [
  { q: 'Vocês trabalham com todas as marcas de pneu?', a: 'Sim. Trabalhamos com Michelin, Pirelli, Bridgestone, Goodyear, Continental, Dunlop e mais. Temos opções para todos os orçamentos.' },
  { q: 'Quando preciso fazer alinhamento?', a: 'Recomenda-se a cada 10.000 km ou sempre que notar que o volante puxa para um lado, desgaste irregular ou após bater num buraco forte.' },
  { q: 'Quanto tempo leva a troca de 4 pneus?', a: 'Em média 40 a 60 minutos incluindo montagem, balanceamento e alinhamento.' },
  { q: 'Vocês aceitam pneus usados para desconto?', a: 'Sim, recebemos pneus usados para descarte correto e podemos abater no valor do serviço conforme o estado.' },
]

export default function PneusDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="rod">
      <header className="rod-nav">
        <div className="rod-nav__in">
          <a href="#topo" className="rod-logo">Roda<b>Bem</b></a>
          <nav>
            <a href="#servicos">Serviços</a>
            <a href="#marcas">Marcas</a>
            <a href="#contato" className="rod-nav__cta">Cotação</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="rod-hero">
        <div className="rod-hero__bg" />
        <div className="rod-wrap rod-hero__in">
          <div className="rod-hero__txt">
            <Reveal as="span" className="rod-badge">Pneus · Alinhamento · Balanceamento</Reveal>
            <Reveal as="h1" delay={80}>
              Pneus e alinhamento com preço na hora
            </Reveal>
            <Reveal as="p" delay={160}>
              Mais de 200 pneus em estoque das melhores marcas. Alinhamento 3D,
              balanceamento digital e montagem rápida enquanto você espera.
            </Reveal>
            <Reveal className="rod-hero__actions" delay={240}>
              <a href="https://wa.me/5511976066281" className="rod-btn" target="_blank" rel="noopener noreferrer">
                Pedir cotação agora
              </a>
              <a href="#servicos" className="rod-btn rod-btn--outline">Ver serviços</a>
            </Reveal>
            <Reveal className="rod-hero__stats" delay={320}>
              <div><strong><Counter to={200} prefix="+" /></strong><span>modelos em estoque</span></div>
              <div><strong><Counter to={8500} prefix="+" /></strong><span>pneus montados</span></div>
              <div><strong><Counter to={4} suffix=",8 ★" /></strong><span>no Google</span></div>
            </Reveal>
          </div>
          <Reveal className="rod-hero__img" from="left">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Pneus e serviço automotivo" loading="eager" />
          </Reveal>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="rod-sec">
        <div className="rod-wrap">
          <Reveal as="p" className="rod-kicker">O que fazemos</Reveal>
          <Reveal as="h2" className="rod-h2" delay={60}>Serviços completos de pneus e suspensão</Reveal>
          <div className="rod-grid">
            {servicos.map((s, i) => (
              <Reveal key={s.t} className="rod-card" delay={i * 80}>
                <span className="rod-card__icon"><DemoIcon name={s.i} size={22} /></span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <section id="marcas" className="rod-marcas">
        <div className="rod-wrap">
          <Reveal as="p" className="rod-kicker">Marcas disponíveis</Reveal>
          <Reveal as="h2" className="rod-h2" delay={60}>Trabalhamos com as melhores do mundo</Reveal>
          <Reveal className="rod-marcas__grid" delay={100}>
            {marcas.map((m) => (
              <div key={m} className="rod-marca">{m}</div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="rod-sec rod-sec--dark">
        <div className="rod-wrap">
          <Reveal as="p" className="rod-kicker rod-kicker--light">Como funciona</Reveal>
          <Reveal as="h2" className="rod-h2 rod-h2--light" delay={60}>Simples, rápido e sem surpresa</Reveal>
          <div className="rod-steps">
            {processo.map((p, i) => (
              <Reveal key={p.t} className="rod-step" delay={i * 90}>
                <span className="rod-step__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="rod-sec">
        <div className="rod-wrap">
          <Reveal as="p" className="rod-kicker">Por que a RodaBem</Reveal>
          <Reveal as="h2" className="rod-h2" delay={60}>O que nos diferencia</Reveal>
          <div className="rod-difs">
            {diferenciais.map((d, i) => (
              <Reveal key={d.t} className="rod-dif" delay={(i % 2) * 80}>
                <span className="rod-dif__check">✓</span>
                <div><h3>{d.t}</h3><p>{d.d}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="rod-sec rod-sec--soft">
        <div className="rod-wrap">
          <Reveal as="p" className="rod-kicker">Clientes</Reveal>
          <Reveal as="h2" className="rod-h2" delay={60}>Quem já rodou com a RodaBem</Reveal>
          <div className="rod-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="rod-dep" delay={i * 100}>
                <div className="rod-dep__stars">★★★★★</div>
                <p>"{d.t}"</p>
                <div className="rod-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="rod-sec">
        <div className="rod-wrap rod-faq">
          <Reveal className="rod-faq__head" from="right">
            <p className="rod-kicker">Dúvidas frequentes</p>
            <h2 className="rod-h2">Perguntas comuns</h2>
          </Reveal>
          <Reveal className="rod-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`rod-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="rod-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="rod-faq__icn" />
                </button>
                <div className="rod-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="rod-cta">
        <div className="rod-wrap rod-cta__in">
          <Reveal as="h2">Precisa de pneu ou alinhamento?</Reveal>
          <Reveal as="p" delay={80}>Cotação instantânea pelo WhatsApp. Mais de 200 modelos em estoque esperando por você.</Reveal>
          <Reveal delay={160}>
            <a href="https://wa.me/5511976066281" className="rod-btn rod-btn--lg" target="_blank" rel="noopener noreferrer">
              Pedir cotação pelo WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="rod-foot">
        <div className="rod-wrap rod-foot__in">
          <div>
            <span className="rod-logo">Roda<b>Bem</b></span>
            <p className="rod-foot__desc">Pneus, alinhamento e balanceamento com preço justo e serviço rápido.</p>
          </div>
          <div className="rod-foot__col">
            <p>Mogi das Cruzes · SP</p>
            <p>(11) 9 0000-0000 · contato@rodabem.com.br</p>
          </div>
        </div>
        <div className="rod-wrap rod-foot__copy">© {new Date().getFullYear()} RodaBem · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
