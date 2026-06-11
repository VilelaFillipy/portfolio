import { useState } from 'react'
import DemoIcon from './_shared/DemoIcon'
import { Reveal, Counter } from './_shared/anim'
import './InstalacoesDemo.css'

const solucoes = [
  { i: 'snow', t: 'Ar-Condicionado', d: 'Instalação, manutenção e higienização de split, multi-split e VRF.' },
  { i: 'sun', t: 'Energia Solar', d: 'Projeto e instalação de painéis fotovoltaicos com economia garantida.' },
  { i: 'camera', t: 'Segurança Eletrônica', d: 'Câmeras, alarmes e controle de acesso monitorados pelo celular.' },
  { i: 'bolt', t: 'Elétrica Geral', d: 'Quadros, automação residencial e adequação de carga com segurança.' },
]

const beneficios = [
  { t: 'Técnicos certificados', d: 'Equipe treinada e com certificação NR-35 e NR-10.' },
  { t: 'Garantia real', d: 'Serviço com garantia e suporte pós-instalação.' },
  { t: 'Orçamento na hora', d: 'Resposta rápida pelo WhatsApp com preço transparente.' },
  { t: 'Atendimento ágil', d: 'Equipe disponível para instalação no mesmo dia.' },
]

const processo = [
  { t: 'Diagnóstico', d: 'Avaliamos sua necessidade e o local da instalação.' },
  { t: 'Proposta', d: 'Orçamento transparente com simulação de economia.' },
  { t: 'Instalação', d: 'Execução limpa e segura por técnicos certificados.' },
  { t: 'Suporte', d: 'Manutenção e suporte contínuo após a entrega.' },
]

const depoimentos = [
  { n: 'Roberto Alves', c: 'Residência · Mogi', t: 'Instalaram meu sistema solar e a conta de luz despencou. Atendimento nota 10.' },
  { n: 'Loja Center', c: 'Comércio · Suzano', t: 'Câmeras e ar-condicionado instalados em um dia. Profissionais e organizados.' },
]

const faq = [
  { q: 'Quanto economizo com energia solar?', a: 'Em média de 80% a 95% na conta de luz, com retorno do investimento em poucos anos.' },
  { q: 'Vocês fazem manutenção de ar-condicionado?', a: 'Sim, oferecemos limpeza, higienização e manutenção preventiva e corretiva.' },
  { q: 'As câmeras dão pra ver pelo celular?', a: 'Sim, instalamos sistemas com acesso remoto em tempo real pelo aplicativo.' },
  { q: 'O orçamento é gratuito?', a: 'Sim, fazemos a avaliação e o orçamento sem custo e sem compromisso.' },
]

export default function InstalacoesDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="ins">
      <header className="ins-nav">
        <div className="ins-nav__in">
          <a href="#topo" className="ins-logo"><span className="ins-logo__dot" />Tec<b>Instala</b></a>
          <nav>
            <a href="#sol">Soluções</a>
            <a href="#processo">Processo</a>
            <a href="#porque">Por que nós</a>
            <a href="#contato" className="ins-nav__cta">Orçamento</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="ins-hero">
        <div className="ins-hero__bg" />
        <div className="ins-wrap ins-hero__in">
          <div className="ins-hero__txt">
            <Reveal as="span" className="ins-pill"><span className="ins-pill__dot" /> Atendimento no mesmo dia</Reveal>
            <Reveal as="h1" delay={80}>Conforto, economia e segurança em uma só empresa</Reveal>
            <Reveal as="p" delay={160}>
              Instalação e manutenção de ar-condicionado, energia solar e segurança
              eletrônica com técnicos certificados e garantia.
            </Reveal>
            <Reveal className="ins-hero__actions" delay={240}>
              <a href="#contato" className="ins-btn">Pedir orçamento</a>
              <a href="#sol" className="ins-btn ins-btn--ghost">Ver soluções</a>
            </Reveal>
            <Reveal className="ins-hero__stats" delay={320}>
              <div><strong><Counter to={1800} prefix="+" /></strong><span>instalações</span></div>
              <div><strong><Counter to={95} suffix="%" /></strong><span>economia solar</span></div>
              <div><strong><Counter to={4} suffix=",9" /></strong><span>avaliação</span></div>
            </Reveal>
          </div>
          <Reveal className="ins-hero__card" from="left">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80" alt="Técnico instalando equipamento" loading="eager" />
          </Reveal>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section id="sol" className="ins-sec">
        <div className="ins-wrap">
          <Reveal as="p" className="ins-kicker">Nossas soluções</Reveal>
          <Reveal as="h2" className="ins-h2" delay={60}>Tudo para sua casa ou empresa</Reveal>
          <div className="ins-sol">
            {solucoes.map((s, i) => (
              <Reveal key={s.t} className="ins-sol__card" delay={i * 80}>
                <span className="ins-sol__icon"><DemoIcon name={s.i} size={26} /></span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <span className="ins-sol__arrow">→</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENERGIA SOLAR */}
      <section className="ins-eco">
        <div className="ins-wrap ins-eco__in">
          <Reveal className="ins-eco__txt" from="right">
            <p className="ins-kicker ins-kicker--light">Energia solar</p>
            <h2 className="ins-h2 ins-h2--light">Reduza até 95% da sua conta de luz</h2>
            <p>
              Geramos um projeto fotovoltaico sob medida com simulação de economia
              e retorno do investimento. Financiamento facilitado.
            </p>
            <ul className="ins-eco__list">
              <li>Projeto e homologação inclusos</li>
              <li>Painéis com 25 anos de garantia</li>
              <li>Monitoramento pelo celular</li>
            </ul>
            <a href="#contato" className="ins-btn ins-btn--white">Simular economia</a>
          </Reveal>
          <Reveal className="ins-eco__img" from="left" delay={120}>
            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=80" alt="Painéis solares" loading="lazy" />
            <div className="ins-eco__badge"><strong><Counter to={95} suffix="%" /></strong><span>menos na conta</span></div>
          </Reveal>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="ins-sec ins-sec--soft">
        <div className="ins-wrap">
          <Reveal as="p" className="ins-kicker">Como funciona</Reveal>
          <Reveal as="h2" className="ins-h2" delay={60}>Simples do orçamento ao suporte</Reveal>
          <div className="ins-steps">
            {processo.map((p, i) => (
              <Reveal key={p.t} className="ins-step" delay={i * 90}>
                <span className="ins-step__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE NÓS */}
      <section id="porque" className="ins-sec">
        <div className="ins-wrap">
          <Reveal as="p" className="ins-kicker">Por que escolher a gente</Reveal>
          <Reveal as="h2" className="ins-h2" delay={60}>Confiança do início ao fim</Reveal>
          <div className="ins-ben">
            {beneficios.map((b, i) => (
              <Reveal key={b.t} className="ins-ben__item" delay={(i % 2) * 80}>
                <span className="ins-ben__check">✓</span>
                <div><h3>{b.t}</h3><p>{b.d}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="ins-sec ins-sec--soft">
        <div className="ins-wrap">
          <Reveal as="p" className="ins-kicker">Clientes</Reveal>
          <Reveal as="h2" className="ins-h2" delay={60}>Quem já instalou com a TecInstala</Reveal>
          <div className="ins-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="ins-dep" delay={i * 100}>
                <div className="ins-dep__stars">★★★★★</div>
                <p>{d.t}</p>
                <div className="ins-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ins-sec">
        <div className="ins-wrap ins-faq">
          <Reveal className="ins-faq__head" from="right">
            <p className="ins-kicker">Dúvidas frequentes</p>
            <h2 className="ins-h2">Perguntas comuns</h2>
          </Reveal>
          <Reveal className="ins-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`ins-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="ins-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="ins-faq__icn" />
                </button>
                <div className="ins-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="ins-cta">
        <div className="ins-wrap ins-cta__in">
          <Reveal as="h2">Peça seu orçamento agora mesmo</Reveal>
          <Reveal as="p" delay={100}>Atendimento rápido e sem compromisso para toda a região.</Reveal>
          <Reveal delay={180}><a href="#topo" className="ins-btn ins-btn--lg">Falar com um especialista</a></Reveal>
        </div>
      </section>

      <footer className="ins-foot">
        <div className="ins-wrap ins-foot__in">
          <div>
            <span className="ins-logo">Tec<b>Instala</b></span>
            <p className="ins-foot__desc">Climatização, energia solar e segurança eletrônica com garantia.</p>
          </div>
          <div className="ins-foot__col">
            <p>Mogi / Suzano · SP</p>
            <p>(11) 9 0000-0000 · contato@tecinstala.com.br</p>
          </div>
        </div>
        <div className="ins-wrap ins-foot__copy">© {new Date().getFullYear()} TecInstala · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
