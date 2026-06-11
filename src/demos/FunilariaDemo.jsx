import { useState } from 'react'
import DemoIcon from './_shared/DemoIcon'
import { Reveal, Counter } from './_shared/anim'
import './FunilariaDemo.css'

const servicos = [
  { i: 'building', t: 'Funilaria Completa', d: 'Reparo de amassados, cortes e deformações com resultado original.' },
  { i: 'camera', t: 'Pintura Profissional', d: 'Cabine de pintura com tinta automotiva de alta durabilidade.' },
  { i: 'wrench', t: 'Polimento e Cristalização', d: 'Remoção de riscos e proteção da pintura com alto brilho.' },
  { i: 'ruler', t: 'Revisão Estrutural', d: 'Recuperação de chassis e longarina em casos de colisão severa.' },
]

const diferenciais = [
  { t: 'Orçamento fotográfico', d: 'Enviamos orçamento detalhado com fotos antes de começar.' },
  { t: 'Aprovado pelo seguro', d: 'Trabalhamos com todas as seguradoras do mercado.' },
  { t: 'Cor casada garantida', d: 'Sistema computadorizado de mistura de tintas por código.' },
  { t: 'Garantia de 1 ano', d: 'Pintura e funilaria com garantia real documentada.' },
]

const processo = [
  { t: 'Vistoria', d: 'Avaliamos todos os danos com fotos e laudo técnico.' },
  { t: 'Orçamento', d: 'Orçamento detalhado, aprovado por você ou pela seguradora.' },
  { t: 'Execução', d: 'Funilaria, preparação e pintura em cabine climatizada.' },
  { t: 'Entrega', d: 'Polimento final e entrega com nota fiscal e garantia.' },
]

const depoimentos = [
  { n: 'Marcos Ferreira', c: 'Toyota Corolla · Guarulhos', t: 'Batida lateral severa, pareceu novo depois da BodyWork. Cor casada perfeita, pintura impecável. Seguradora aprovou tudo sem dor de cabeça.' },
  { n: 'Aline Rocha', c: 'Honda HRV · Santo André', t: 'Nunca tinha confiado numa funilaria antes. Eles me mostraram foto de cada etapa. Resultado incrível.' },
]

const faq = [
  { q: 'Vocês trabalham com seguro?', a: 'Sim, somos credenciados pela maioria das seguradoras. Podemos abrir o processo diretamente com a seguradora por você.' },
  { q: 'A cor da pintura vai ficar igual?', a: 'Usamos sistema computadorizado de mistura por código de cor. O resultado é idêntico ao original de fábrica.' },
  { q: 'Quanto tempo leva um reparo completo?', a: 'Depende da extensão do dano. Pequenos reparos saem em 1 a 2 dias. Colisões maiores entre 5 e 10 dias úteis.' },
  { q: 'Posso levar sem sinistro?', a: 'Claro. Atendemos tanto casos de seguro quanto serviços particulares.' },
]

export default function FunilariaDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="fun">
      <header className="fun-nav">
        <div className="fun-nav__in">
          <a href="#topo" className="fun-logo">Body<b>Work</b></a>
          <nav>
            <a href="#servicos">Serviços</a>
            <a href="#processo">Processo</a>
            <a href="#contato" className="fun-nav__cta">Orçamento</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="fun-hero">
        <div className="fun-hero__overlay" />
        <img
          className="fun-hero__bg-img"
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=80"
          alt="Pintura automotiva"
          loading="eager"
        />
        <div className="fun-wrap fun-hero__in">
          <Reveal as="span" className="fun-badge">Funilaria · Pintura · Polimento</Reveal>
          <Reveal as="h1" delay={80}>
            Seu carro como saiu<br />da concessionária
          </Reveal>
          <Reveal as="p" delay={160}>
            Funilaria e pintura profissional com cabine climatizada, cor casada garantida
            e aprovação por qualquer seguradora. Guarulhos e região.
          </Reveal>
          <Reveal className="fun-hero__actions" delay={240}>
            <a href="https://wa.me/5511976066281" className="fun-btn" target="_blank" rel="noopener noreferrer">
              Pedir orçamento
            </a>
            <a href="#servicos" className="fun-btn fun-btn--ghost">Ver serviços</a>
          </Reveal>
          <Reveal className="fun-hero__stats" delay={320}>
            <div><strong><Counter to={3200} prefix="+" /></strong><span>veículos recuperados</span></div>
            <div><strong><Counter to={15} suffix=" anos" /></strong><span>no mercado</span></div>
            <div><strong><Counter to={100} suffix="%" /></strong><span>aprovados pelo seguro</span></div>
          </Reveal>
        </div>
      </section>

      {/* ANTES E DEPOIS */}
      <section className="fun-antes">
        <div className="fun-wrap">
          <Reveal as="p" className="fun-kicker">Resultados reais</Reveal>
          <Reveal as="h2" className="fun-h2" delay={60}>Antes e depois que falam por si</Reveal>
          <div className="fun-comparar">
            <Reveal className="fun-comparar__card" delay={0}>
              <div className="fun-comparar__tag fun-comparar__tag--antes">Antes</div>
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Carro antes do reparo" loading="lazy" />
              <div className="fun-comparar__info">
                <strong>Colisão lateral</strong>
                <span>Amassado + risco profundo</span>
              </div>
            </Reveal>
            <div className="fun-comparar__arrow">→</div>
            <Reveal className="fun-comparar__card fun-comparar__card--depois" delay={120}>
              <div className="fun-comparar__tag fun-comparar__tag--depois">Depois</div>
              <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80" alt="Carro depois do reparo" loading="lazy" />
              <div className="fun-comparar__info">
                <strong>Resultado final</strong>
                <span>Cor casada · Acabamento original</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="fun-sec fun-sec--dark">
        <div className="fun-wrap">
          <Reveal as="p" className="fun-kicker fun-kicker--light">O que fazemos</Reveal>
          <Reveal as="h2" className="fun-h2 fun-h2--light" delay={60}>Serviços de alto padrão</Reveal>
          <div className="fun-grid">
            {servicos.map((s, i) => (
              <Reveal key={s.t} className="fun-card" delay={i * 80}>
                <span className="fun-card__icon"><DemoIcon name={s.i} size={24} /></span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="fun-sec">
        <div className="fun-wrap">
          <Reveal as="p" className="fun-kicker">Como trabalhamos</Reveal>
          <Reveal as="h2" className="fun-h2" delay={60}>Transparência em cada etapa</Reveal>
          <div className="fun-steps">
            {processo.map((p, i) => (
              <Reveal key={p.t} className="fun-step" delay={i * 90}>
                <span className="fun-step__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="fun-sec fun-sec--soft">
        <div className="fun-wrap">
          <Reveal as="p" className="fun-kicker">Por que a BodyWork</Reveal>
          <Reveal as="h2" className="fun-h2" delay={60}>O que nos diferencia</Reveal>
          <div className="fun-difs">
            {diferenciais.map((d, i) => (
              <Reveal key={d.t} className="fun-dif" delay={(i % 2) * 80}>
                <span className="fun-dif__dot" />
                <div><h3>{d.t}</h3><p>{d.d}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="fun-sec">
        <div className="fun-wrap">
          <Reveal as="p" className="fun-kicker">Clientes satisfeitos</Reveal>
          <Reveal as="h2" className="fun-h2" delay={60}>Quem já passou pela BodyWork</Reveal>
          <div className="fun-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="fun-dep" delay={i * 100}>
                <div className="fun-dep__stars">★★★★★</div>
                <p>"{d.t}"</p>
                <div className="fun-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fun-sec fun-sec--soft">
        <div className="fun-wrap fun-faq">
          <Reveal className="fun-faq__head" from="right">
            <p className="fun-kicker">Dúvidas frequentes</p>
            <h2 className="fun-h2">Perguntas comuns</h2>
          </Reveal>
          <Reveal className="fun-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`fun-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="fun-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="fun-faq__icn" />
                </button>
                <div className="fun-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="fun-cta">
        <div className="fun-wrap fun-cta__in">
          <Reveal as="h2">Chega de andar com o carro amassado</Reveal>
          <Reveal as="p" delay={80}>Orçamento gratuito em até 24h. Trabalhamos com todas as seguradoras.</Reveal>
          <Reveal delay={160}>
            <a href="https://wa.me/5511976066281" className="fun-btn fun-btn--lg" target="_blank" rel="noopener noreferrer">
              Solicitar orçamento agora
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="fun-foot">
        <div className="fun-wrap fun-foot__in">
          <div>
            <span className="fun-logo">Body<b>Work</b></span>
            <p className="fun-foot__desc">Funilaria, pintura e polimento com garantia de 1 ano.</p>
          </div>
          <div className="fun-foot__col">
            <p>Guarulhos · SP</p>
            <p>(11) 9 0000-0000 · contato@bodywork.com.br</p>
          </div>
        </div>
        <div className="fun-wrap fun-foot__copy">© {new Date().getFullYear()} BodyWork · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
