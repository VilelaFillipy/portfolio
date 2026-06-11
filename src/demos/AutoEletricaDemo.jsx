import { useState } from 'react'
import DemoIcon from './_shared/DemoIcon'
import { Reveal, Counter } from './_shared/anim'
import './AutoEletricaDemo.css'

const servicos = [
  { i: 'bolt', t: 'Injeção Eletrônica', d: 'Diagnóstico e reparo do sistema de injeção com scanner profissional.' },
  { i: 'bolt', t: 'Sistema de Partida', d: 'Motor de arranque, alternador e bateria com teste de carga completo.' },
  { i: 'wrench', t: 'Módulos e Central', d: 'Reprogramação e reparo de centrais eletrônicas e módulos.' },
  { i: 'sun', t: 'Elétrica Geral', d: 'Curto, fusíveis, chicote e instalação de som e acessórios.' },
]

const diferenciais = [
  { t: 'Scanner OBD em tempo real', d: 'Leitura de todas as falhas do veículo sem custo.' },
  { t: 'Atendimento de urgência', d: 'Carro não liga? Atendemos em domicílio na região.' },
  { t: 'Técnicos certificados', d: 'Equipe treinada nas principais montadoras do mercado.' },
  { t: 'Orçamento fixo', d: 'Valor combinado antes de começar, sem surpresas na hora de pagar.' },
]

const diagnostico = [
  { t: 'Check da memória de falhas', d: 'Lemos todos os códigos de erro do computador de bordo.' },
  { t: 'Teste de sensores', d: 'Verificamos lambda, MAP, TPS e demais sensores em tempo real.' },
  { t: 'Análise elétrica', d: 'Medição de tensão, corrente e resistência em cada circuito.' },
  { t: 'Relatório e orçamento', d: 'Explicamos o problema com clareza e aprovamos antes de começar.' },
]

const depoimentos = [
  { n: 'Rodrigo Santos', c: 'VW Voyage · Mogi das Cruzes', t: 'Carro travava sem motivo. Três oficinas não acharam o problema. Na VoltAuto resolveram em 2 horas. Diagnóstico impressionante.' },
  { n: 'Cláudia Moura', c: 'Fiat Argo · Suzano', t: 'Luz de injeção acesa há semanas. Resolveram tudo com nota fiscal, garantia e preço justo. Recomendo de olhos fechados.' },
]

const faq = [
  { q: 'Carro não liga, vocês atendem em domicílio?', a: 'Sim. Para casos de urgência atendemos em domicílio em Mogi, Suzano e municípios vizinhos.' },
  { q: 'O diagnóstico eletrônico tem custo?', a: 'A leitura inicial de falhas é gratuita. Se o diagnóstico exigir desmontagem ou testes mais extensos, informamos antes.' },
  { q: 'Atendem carros importados?', a: 'Sim. Temos equipamento de diagnóstico para todas as marcas nacionais e importadas.' },
  { q: 'Quanto tempo leva um diagnóstico completo?', a: 'Em média 30 a 60 minutos para a leitura e análise inicial. Reparos simples saem no mesmo dia.' },
]

export default function AutoEletricaDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="vel">
      <header className="vel-nav">
        <div className="vel-nav__in">
          <a href="#topo" className="vel-logo">
            <span className="vel-logo__bolt"><DemoIcon name="bolt" size={16} /></span>
            Volt<b>Auto</b>
          </a>
          <nav>
            <a href="#servicos">Serviços</a>
            <a href="#diagnostico">Diagnóstico</a>
            <a href="#contato" className="vel-nav__cta">Urgência</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="vel-hero">
        <div className="vel-hero__grid" />
        <div className="vel-wrap vel-hero__in">
          <div className="vel-hero__txt">
            <Reveal as="span" className="vel-badge">
              <DemoIcon name="bolt" size={14} /> Diagnóstico gratuito · Atendimento urgente
            </Reveal>
            <Reveal as="h1" delay={80}>
              Elétrica automotiva com diagnóstico preciso
            </Reveal>
            <Reveal as="p" delay={160}>
              Scanner OBD em tempo real, técnicos certificados e orçamento transparente.
              Resolvemos o que outras oficinas não acham.
            </Reveal>
            <Reveal className="vel-hero__actions" delay={240}>
              <a href="https://wa.me/5511976066281" className="vel-btn" target="_blank" rel="noopener noreferrer">
                Atendimento de urgência
              </a>
              <a href="#servicos" className="vel-btn vel-btn--outline">Ver serviços</a>
            </Reveal>
            <Reveal className="vel-hero__stats" delay={320}>
              <div><strong><Counter to={2600} prefix="+" /></strong><span>diagnósticos</span></div>
              <div><strong><Counter to={98} suffix="%" /></strong><span>resolvidos na 1ª visita</span></div>
              <div><strong><Counter to={8} suffix=" anos" /></strong><span>de experiência</span></div>
            </Reveal>
          </div>
          <Reveal className="vel-hero__visual" from="left">
            <div className="vel-hero__screen">
              <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80" alt="Diagnóstico eletrônico automotivo" loading="eager" />
              <div className="vel-hero__scan">
                <span className="vel-scan__dot" />
                <div>
                  <strong>Scanner conectado</strong>
                  <span>Lendo dados em tempo real</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="vel-sec">
        <div className="vel-wrap">
          <Reveal as="p" className="vel-kicker">O que resolvemos</Reveal>
          <Reveal as="h2" className="vel-h2" delay={60}>Especialistas em elétrica automotiva</Reveal>
          <div className="vel-grid">
            {servicos.map((s, i) => (
              <Reveal key={s.t} className="vel-card" delay={i * 80}>
                <span className="vel-card__icon"><DemoIcon name={s.i} size={22} /></span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGNÓSTICO */}
      <section id="diagnostico" className="vel-diag">
        <div className="vel-wrap vel-diag__in">
          <Reveal className="vel-diag__img" from="right">
            <img src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80" alt="Scanner automotivo" loading="lazy" />
            <div className="vel-diag__badge">
              <span className="vel-scan__dot" />
              <strong>Diagnóstico</strong>
              <span>gratuito</span>
            </div>
          </Reveal>
          <Reveal className="vel-diag__txt" from="left" delay={100}>
            <p className="vel-kicker vel-kicker--light">Como diagnosticamos</p>
            <h2 className="vel-h2 vel-h2--light">Tecnologia que encontra o problema certo</h2>
            <div className="vel-diag__steps">
              {diagnostico.map((d, i) => (
                <div key={d.t} className="vel-diag__step">
                  <span className="vel-diag__step-n">{String(i + 1).padStart(2, '0')}</span>
                  <div><strong>{d.t}</strong><p>{d.d}</p></div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="vel-sec">
        <div className="vel-wrap">
          <Reveal as="p" className="vel-kicker">Por que a VoltAuto</Reveal>
          <Reveal as="h2" className="vel-h2" delay={60}>Confiança nos detalhes</Reveal>
          <div className="vel-difs">
            {diferenciais.map((d, i) => (
              <Reveal key={d.t} className="vel-dif" delay={(i % 2) * 80}>
                <span className="vel-dif__icon"><DemoIcon name="bolt" size={18} /></span>
                <div><h3>{d.t}</h3><p>{d.d}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="vel-sec vel-sec--dark">
        <div className="vel-wrap">
          <Reveal as="p" className="vel-kicker vel-kicker--light">Clientes</Reveal>
          <Reveal as="h2" className="vel-h2 vel-h2--light" delay={60}>Quem já confiou na VoltAuto</Reveal>
          <div className="vel-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="vel-dep" delay={i * 100}>
                <div className="vel-dep__stars">★★★★★</div>
                <p>"{d.t}"</p>
                <div className="vel-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="vel-sec">
        <div className="vel-wrap vel-faq">
          <Reveal className="vel-faq__head" from="right">
            <p className="vel-kicker">Dúvidas frequentes</p>
            <h2 className="vel-h2">Perguntas comuns</h2>
          </Reveal>
          <Reveal className="vel-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`vel-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="vel-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="vel-faq__icn" />
                </button>
                <div className="vel-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="vel-cta">
        <div className="vel-wrap vel-cta__in">
          <Reveal as="h2">Carro com problema elétrico?</Reveal>
          <Reveal as="p" delay={80}>Diagnóstico gratuito e atendimento de urgência em Mogi, Suzano e região.</Reveal>
          <Reveal delay={160}>
            <a href="https://wa.me/5511976066281" className="vel-btn vel-btn--lg" target="_blank" rel="noopener noreferrer">
              Falar agora no WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="vel-foot">
        <div className="vel-wrap vel-foot__in">
          <div>
            <span className="vel-logo">Volt<b>Auto</b></span>
            <p className="vel-foot__desc">Auto elétrica com diagnóstico computadorizado e atendimento de urgência.</p>
          </div>
          <div className="vel-foot__col">
            <p>Mogi das Cruzes · SP</p>
            <p>(11) 9 0000-0000 · contato@voltauto.com.br</p>
          </div>
        </div>
        <div className="vel-wrap vel-foot__copy">© {new Date().getFullYear()} VoltAuto · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
