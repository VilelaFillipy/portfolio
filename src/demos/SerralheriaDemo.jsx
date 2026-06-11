import { useState } from 'react'
import { Reveal, Counter } from './_shared/anim'
import './SerralheriaDemo.css'

const servicos = [
  { n: '01', t: 'Portões e Grades', d: 'Automatizados ou manuais, com design moderno e máxima segurança.' },
  { n: '02', t: 'Estruturas Metálicas', d: 'Mezaninos, escadas e coberturas com cálculo estrutural certificado.' },
  { n: '03', t: 'Guarda-Corpos e Vidros', d: 'Vidros temperados e inox com acabamento elegante para sacadas e escadas.' },
  { n: '04', t: 'Esquadrias de Alumínio', d: 'Janelas, portas e fachadas sob medida com vedação de alto desempenho.' },
  { n: '05', t: 'Coberturas e Toldos', d: 'Policarbonato e vidro com estrutura em aço para áreas externas.' },
  { n: '06', t: 'Manutenção e Reformas', d: 'Reparo de portões, automatizadores e soldas com atendimento ágil.' },
]

const etapas = [
  { t: 'Visita técnica', d: 'Medição precisa no local e levantamento das necessidades.' },
  { t: 'Projeto e orçamento', d: 'Desenho técnico, materiais definidos e preço fechado.' },
  { t: 'Fabricação', d: 'Corte a laser, soldagem MIG/TIG e tratamento anticorrosivo.' },
  { t: 'Instalação', d: 'Montagem no local com acabamento e teste de funcionamento.' },
]

const obras = [
  'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80',
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
]

const depoimentos = [
  { n: 'Arq. Camila Reis', c: 'Escritório de Arquitetura', t: 'Parceria de confiança. Entregam exatamente o que é projetado, no prazo e com acabamento de primeira.' },
  { n: 'Marcos Oliveira', c: 'Construtora Horizonte', t: 'Estruturas robustas e bem soldadas. Já é a quarta obra que fechamos com a FerroForte.' },
]

const faq = [
  { q: 'Vocês atendem arquitetos e construtoras?', a: 'Sim, temos linha dedicada a projetos técnicos com ART e cálculo estrutural.' },
  { q: 'Trabalham com vidro temperado?', a: 'Sim, fazemos guarda-corpos, fechamentos e fachadas em vidro temperado e laminado.' },
  { q: 'O orçamento tem custo?', a: 'Não. A visita técnica e o orçamento são gratuitos em toda a região.' },
  { q: 'Qual a garantia dos serviços?', a: 'Oferecemos garantia de fabricação e tratamento anticorrosivo conforme o tipo de obra.' },
]

export default function SerralheriaDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="srl">
      <header className="srl-nav">
        <div className="srl-nav__in">
          <a href="#topo" className="srl-logo">FERRO<span>FORTE</span></a>
          <nav>
            <a href="#serv">Serviços</a>
            <a href="#processo">Processo</a>
            <a href="#obras">Obras</a>
            <a href="#contato" className="srl-nav__cta">Solicitar visita</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="srl-hero">
        <div className="srl-hero__grid">
          <div className="srl-hero__txt">
            <Reveal as="span" className="srl-tag">Serralheria &amp; Vidraçaria · desde 2005</Reveal>
            <Reveal as="h1" delay={80}>Aço e vidro com <em>precisão</em> de engenharia</Reveal>
            <Reveal as="p" delay={160}>
              Projetos sob medida para arquitetos, construtoras e residências exigentes.
              Solidez, acabamento e prazo que você pode confiar.
            </Reveal>
            <Reveal className="srl-hero__actions" delay={240}>
              <a href="#contato" className="srl-btn">Solicitar orçamento</a>
              <a href="#obras" className="srl-btn srl-btn--line">Ver portfólio</a>
            </Reveal>
            <Reveal className="srl-hero__metrics" delay={320}>
              <div><strong><Counter to={800} prefix="+" /></strong><span>obras entregues</span></div>
              <div><strong><Counter to={20} /></strong><span>anos de mercado</span></div>
              <div><strong><Counter to={100} suffix="%" /></strong><span>aço tratado</span></div>
            </Reveal>
          </div>
          <Reveal className="srl-hero__img" from="left">
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&q=80" alt="Estrutura metálica" loading="eager" />
            <div className="srl-hero__img-tag">★★★★★ Avaliação 4,9 · Grande SP</div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="srl-marquee">
        <div className="srl-marquee__track">
          {['SOLDAGEM MIG/TIG', 'CORTE A LASER', 'INOX 304', 'ALUMÍNIO', 'VIDRO TEMPERADO', 'AUTOMAÇÃO', 'SOLDAGEM MIG/TIG', 'CORTE A LASER', 'INOX 304', 'ALUMÍNIO', 'VIDRO TEMPERADO', 'AUTOMAÇÃO'].map((x, i) => (
            <span key={i}>{x} <i>/</i></span>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="serv" className="srl-sec">
        <div className="srl-wrap">
          <Reveal as="p" className="srl-kicker">Soluções completas</Reveal>
          <Reveal as="h2" className="srl-h2" delay={60}>Do projeto à instalação</Reveal>
          <div className="srl-serv">
            {servicos.map((s, i) => (
              <Reveal key={s.n} className="srl-serv__item" delay={(i % 3) * 80}>
                <span className="srl-serv__n">{s.n}</span>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="srl-process">
        <div className="srl-wrap">
          <Reveal as="p" className="srl-kicker srl-kicker--accent">Como trabalhamos</Reveal>
          <Reveal as="h2" className="srl-h2 srl-h2--light" delay={60}>Engenharia em 4 etapas</Reveal>
          <div className="srl-steps">
            {etapas.map((e, i) => (
              <Reveal key={e.t} className="srl-step" delay={i * 90}>
                <span className="srl-step__bar"><i style={{ width: `${(i + 1) * 25}%` }} /></span>
                <span className="srl-step__num">0{i + 1}</span>
                <h3>{e.t}</h3>
                <p>{e.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OBRAS */}
      <section id="obras" className="srl-obras">
        <div className="srl-wrap">
          <Reveal as="p" className="srl-kicker srl-kicker--accent">Portfólio</Reveal>
          <Reveal as="h2" className="srl-h2 srl-h2--light" delay={60}>Obras recentes</Reveal>
        </div>
        <div className="srl-obras__grid">
          {obras.map((src, i) => (
            <Reveal key={i} className="srl-obras__item" delay={(i % 3) * 80} from="scale">
              <img src={src} alt={`Obra ${i + 1}`} loading="lazy" />
              <span className="srl-obras__plus">+</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DESTAQUE / FAIXA NÚMEROS */}
      <section className="srl-band">
        <div className="srl-wrap srl-band__in">
          <Reveal className="srl-band__item"><strong><Counter to={1500} prefix="+" /></strong><span>portões instalados</span></Reveal>
          <Reveal className="srl-band__item" delay={80}><strong><Counter to={48} suffix="h" /></strong><span>resposta ao orçamento</span></Reveal>
          <Reveal className="srl-band__item" delay={160}><strong><Counter to={12} /></strong><span>profissionais na equipe</span></Reveal>
          <Reveal className="srl-band__item" delay={240}><strong>ART</strong><span>em projetos estruturais</span></Reveal>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="srl-sec">
        <div className="srl-wrap">
          <Reveal as="p" className="srl-kicker">Quem confia</Reveal>
          <Reveal as="h2" className="srl-h2" delay={60}>Parceiros que voltam sempre</Reveal>
          <div className="srl-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="srl-dep" delay={i * 100}>
                <span className="srl-dep__mark">”</span>
                <p>{d.t}</p>
                <div className="srl-dep__who">
                  <strong>{d.n}</strong>
                  <span>{d.c}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="srl-sec srl-sec--alt">
        <div className="srl-wrap srl-faq">
          <Reveal className="srl-faq__head" from="right">
            <p className="srl-kicker">Perguntas frequentes</p>
            <h2 className="srl-h2">Tire suas dúvidas</h2>
          </Reveal>
          <Reveal className="srl-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`srl-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="srl-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="srl-faq__icn" />
                </button>
                <div className="srl-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="srl-cta">
        <div className="srl-wrap srl-cta__in">
          <Reveal>
            <h2>Tem um projeto em mãos?</h2>
            <p>Enviamos um técnico para medição e orçamento sem custo.</p>
          </Reveal>
          <Reveal delay={120}>
            <a href="#topo" className="srl-btn srl-btn--lg">Agendar visita técnica</a>
          </Reveal>
        </div>
      </section>

      <footer className="srl-foot">
        <div className="srl-wrap srl-foot__in">
          <div>
            <span className="srl-logo">FERRO<span>FORTE</span></span>
            <p>Serralheria e Vidraçaria · Suzano / SP</p>
          </div>
          <div className="srl-foot__contact">
            <p>(11) 9 0000-0000</p>
            <p>contato@ferroforte.com.br</p>
            <p>Seg a Sex · 7h30 às 18h</p>
          </div>
        </div>
        <div className="srl-wrap srl-foot__copy">© {new Date().getFullYear()} FerroForte · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
