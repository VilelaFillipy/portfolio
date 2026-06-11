import { useState } from 'react'
import { Reveal, Counter } from './_shared/anim'
import './MarmorariaDemo.css'

const pedras = [
  { t: 'Mármore', d: 'Carrara, Travertino e Crema Marfil para ambientes sofisticados.', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700&q=80' },
  { t: 'Granito', d: 'Resistência e beleza para cozinhas e áreas de alto tráfego.', img: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=700&q=80' },
  { t: 'Quartzo', d: 'Superfícies homogêneas, antibacterianas e de baixa manutenção.', img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=700&q=80' },
]

const aplicacoes = [
  'Bancadas de cozinha', 'Lavatórios e banheiros', 'Escadas e soleiras',
  'Mesas e aparadores', 'Fachadas e revestimentos', 'Pisos e paredes',
]

const processo = [
  { t: 'Seleção da pedra', d: 'Você escolhe a chapa no nosso estoque, vendo o veio real.' },
  { t: 'Medição a laser', d: 'Gabarito digital garante encaixe milimétrico.' },
  { t: 'Corte CNC', d: 'Recortes, furos e acabamentos de borda com precisão.' },
  { t: 'Instalação', d: 'Montagem cuidadosa e finalização impecável no local.' },
]

const galeria = [
  'https://images.unsplash.com/photo-1556909211-d5e9c43e3a64?w=700&q=80',
  'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=700&q=80',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=700&q=80',
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80',
]

const depoimentos = [
  { n: 'Fernanda Lima', c: 'Apartamento · Mogi', t: 'A bancada de Carrara ficou um espetáculo. Atendimento atencioso e instalação perfeita.' },
  { n: 'Studio Arq+', c: 'Arquitetura', t: 'Acabamento de borda impecável e prazo cumprido. Viraram nossa marmoraria de confiança.' },
]

const faq = [
  { q: 'Posso ver a chapa antes de comprar?', a: 'Sim! Em nosso showroom você escolhe a chapa exata, vendo o veio e a tonalidade reais.' },
  { q: 'Qual a diferença entre mármore e quartzo?', a: 'O mármore é natural e nobre; o quartzo é uma superfície de engenharia, mais resistente a manchas.' },
  { q: 'Vocês fazem a medição?', a: 'Sim, fazemos medição a laser no local para garantir encaixe perfeito.' },
  { q: 'Qual o prazo de instalação?', a: 'Em média 7 dias úteis após a aprovação e medição.' },
]

export default function MarmorariaDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="mrm">
      <header className="mrm-nav">
        <div className="mrm-nav__in">
          <a href="#topo" className="mrm-logo">PETRA<span>·</span>MÁRMORES</a>
          <nav>
            <a href="#pedras">Materiais</a>
            <a href="#processo">Processo</a>
            <a href="#apps">Aplicações</a>
            <a href="#contato" className="mrm-nav__cta">Orçamento</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="mrm-hero">
        <div className="mrm-hero__in">
          <Reveal as="span" className="mrm-eyebrow">Marmoraria de alto padrão</Reveal>
          <Reveal as="h1" delay={80}>A elegância natural da pedra na sua casa</Reveal>
          <Reveal as="p" delay={160}>
            Bancadas, revestimentos e detalhes em mármore, granito e quartzo
            com corte de precisão e acabamento impecável.
          </Reveal>
          <Reveal delay={240}>
            <a href="#contato" className="mrm-btn">Solicitar orçamento</a>
          </Reveal>
          <Reveal className="mrm-hero__stats" delay={320}>
            <div><strong><Counter to={2500} prefix="+" /></strong><span>bancadas instaladas</span></div>
            <div><strong><Counter to={25} /></strong><span>tipos de pedra</span></div>
            <div><strong><Counter to={7} suffix=" dias" /></strong><span>prazo médio</span></div>
          </Reveal>
        </div>
        <Reveal className="mrm-hero__img" from="left">
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80" alt="Bancada de mármore" loading="eager" />
        </Reveal>
      </section>

      {/* MATERIAIS */}
      <section id="pedras" className="mrm-sec">
        <div className="mrm-wrap">
          <Reveal as="p" className="mrm-kicker">Nossos materiais</Reveal>
          <Reveal as="h2" className="mrm-h2" delay={60}>Pedras nobres selecionadas</Reveal>
          <div className="mrm-pedras">
            {pedras.map((p, i) => (
              <Reveal key={p.t} className="mrm-pedra" delay={i * 100} from="scale">
                <div className="mrm-pedra__img"><img src={p.img} alt={p.t} loading="lazy" /></div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER TÉCNICO */}
      <section className="mrm-banner">
        <div className="mrm-wrap mrm-banner__in">
          <Reveal className="mrm-banner__txt" from="right">
            <p className="mrm-kicker mrm-kicker--light">Tecnologia</p>
            <h2>Corte a jato d'água e CNC</h2>
            <p>
              Precisão milimétrica em cada peça, encaixes perfeitos e bordas
              trabalhadas que valorizam qualquer ambiente.
            </p>
          </Reveal>
          <Reveal className="mrm-banner__img" from="left" delay={120}>
            <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80" alt="Corte de pedra com precisão" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="mrm-sec mrm-sec--soft">
        <div className="mrm-wrap">
          <Reveal as="p" className="mrm-kicker">Como funciona</Reveal>
          <Reveal as="h2" className="mrm-h2" delay={60}>Do showroom à instalação</Reveal>
          <div className="mrm-steps">
            {processo.map((p, i) => (
              <Reveal key={p.t} className="mrm-step" delay={i * 90}>
                <span className="mrm-step__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APLICAÇÕES */}
      <section id="apps" className="mrm-sec">
        <div className="mrm-wrap">
          <Reveal as="p" className="mrm-kicker">Onde aplicamos</Reveal>
          <Reveal as="h2" className="mrm-h2" delay={60}>Soluções para cada ambiente</Reveal>
          <div className="mrm-apps">
            {aplicacoes.map((a, i) => (
              <Reveal key={a} className="mrm-app" delay={(i % 3) * 70}>
                <span className="mrm-app__dot" />{a}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="mrm-gal-sec">
        <div className="mrm-wrap">
          <Reveal as="p" className="mrm-kicker" style={{ textAlign: 'left' }}>Portfólio</Reveal>
          <Reveal as="h2" className="mrm-h2" style={{ textAlign: 'left' }} delay={60}>Ambientes que assinamos</Reveal>
        </div>
        <div className="mrm-gal">
          {galeria.map((src, i) => (
            <Reveal key={i} className="mrm-gal__item" delay={(i % 4) * 70} from="scale">
              <img src={src} alt={`Projeto ${i + 1}`} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="mrm-sec mrm-sec--soft">
        <div className="mrm-wrap">
          <Reveal as="p" className="mrm-kicker">Clientes</Reveal>
          <Reveal as="h2" className="mrm-h2" delay={60}>Quem escolheu Petra</Reveal>
          <div className="mrm-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="mrm-dep" delay={i * 100}>
                <p>“{d.t}”</p>
                <div className="mrm-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mrm-sec">
        <div className="mrm-wrap mrm-faq">
          <Reveal className="mrm-faq__head" from="right">
            <p className="mrm-kicker" style={{ textAlign: 'left' }}>Dúvidas</p>
            <h2 className="mrm-h2" style={{ textAlign: 'left' }}>Perguntas frequentes</h2>
          </Reveal>
          <Reveal className="mrm-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`mrm-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="mrm-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="mrm-faq__icn" />
                </button>
                <div className="mrm-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="mrm-cta">
        <div className="mrm-wrap">
          <Reveal as="h2">Transforme seu projeto em algo atemporal</Reveal>
          <Reveal as="p" delay={100}>Visite nosso showroom ou solicite um orçamento online.</Reveal>
          <Reveal delay={180}><a href="#topo" className="mrm-btn mrm-btn--dark">Falar com um consultor</a></Reveal>
        </div>
      </section>

      <footer className="mrm-foot">
        <div className="mrm-wrap mrm-foot__in">
          <span className="mrm-logo">PETRA<span>·</span>MÁRMORES</span>
          <div className="mrm-foot__info">
            <p>Mogi das Cruzes · SP · Showroom seg a sáb</p>
            <p>(11) 9 0000-0000 · contato@petramarmores.com.br</p>
          </div>
        </div>
        <div className="mrm-wrap mrm-foot__copy">© {new Date().getFullYear()} Petra Mármores · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
