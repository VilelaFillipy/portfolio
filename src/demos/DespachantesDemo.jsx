import { useState } from 'react'
import { Reveal, Counter } from './_shared/anim'
import './DespachantesDemo.css'

const servicos = [
  { t: 'Transferência de Veículos', d: 'Transferência rápida, sem fila no DETRAN. Prazo: 3 a 5 dias úteis com documentação correta.' },
  { t: 'Licenciamento e IPVA', d: 'Regularização de licenciamento atrasado, parcelamento do IPVA e quitação de multas.' },
  { t: 'Habilitação e CNH', d: '2ª via de CNH, renovação, adição de categoria e mudança de cidade.' },
  { t: 'Registro de Imóveis', d: 'Escritura, registro em cartório, ITBI e regularização de imóveis junto à prefeitura.' },
]

const diferenciais = [
  { t: 'DETRAN credenciado', d: 'Despachante credenciado junto ao DETRAN/SP. Atendimento legal e sem intermediários.' },
  { t: 'Prazo garantido', d: 'Informamos o prazo real antes de começar. Sem enrolação e sem desculpa.' },
  { t: 'Sem filas', d: 'Você não precisa ir ao DETRAN. Retiramos, protocolamos e entregamos para você.' },
  { t: 'Orçamento no WhatsApp', d: 'Envie os documentos por foto e receba o orçamento em minutos.' },
]

const processo = [
  { t: 'Consulta rápida', d: 'Descreva o serviço pelo WhatsApp e receba o orçamento em até 1 hora.' },
  { t: 'Documentação', d: 'Orientamos exatamente quais documentos separar. Sem idas desnecessárias ao cartório.' },
  { t: 'Protocolo', d: 'Cuidamos de toda a tramitação nos órgãos competentes.' },
  { t: 'Entrega', d: 'Documento pronto entregue pessoalmente ou por motoboy na sua casa ou empresa.' },
]

const depoimentos = [
  { n: 'André Luiz', c: 'Transferência · Mogi das Cruzes', t: 'Comprei um carro e temia a burocracia da transferência. Em 4 dias úteis estava tudo resolvido. Documentação impecável, sem nenhum problema.' },
  { n: 'Cristina Ramos', c: 'Regularização de CNH · Suzano', t: 'Minha CNH estava vencida há 1 ano e eu não tinha tempo para nada. Eles cuidaram de tudo, eu só assinei o papel. Super recomendo!' },
]

const faq = [
  { q: 'Preciso ir pessoalmente ao DETRAN?', a: 'Na maioria dos casos, não. Com procuração, cuidamos de toda a tramitação. Orientamos o que é exigido presença física caso a caso.' },
  { q: 'Qual o prazo para transferência de veículo?', a: 'De 3 a 5 dias úteis com documentação completa. Prazo maior em casos com pendências de multa ou restrições no veículo.' },
  { q: 'Vocês regularizam veículo com multas?', a: 'Sim. Verificamos as débitos, orientamos sobre parcelamento ou quitação e fazemos a regularização completa.' },
  { q: 'Como envio a documentação?', a: 'Por foto no WhatsApp mesmo. Conferimos se está completa e já iniciamos o processo. A documentação original é coletada por motoboy.' },
]

export default function DespachantesDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="dsp">
      <header className="dsp-nav">
        <div className="dsp-nav__in">
          <a href="#topo" className="dsp-logo">Despacha<b>Fácil</b></a>
          <nav>
            <a href="#servicos">Serviços</a>
            <a href="#processo">Como funciona</a>
            <a href="#contato" className="dsp-nav__cta">Orçamento rápido</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="dsp-hero">
        <div className="dsp-hero__bg" />
        <div className="dsp-wrap dsp-hero__in">
          <div className="dsp-hero__txt">
            <Reveal as="span" className="dsp-badge">
              <span className="dsp-badge__dot" /> DETRAN credenciado · Mogi das Cruzes
            </Reveal>
            <Reveal as="h1" delay={80}>
              Documentação resolvida.<br />Sem fila. Sem demora.
            </Reveal>
            <Reveal as="p" delay={160}>
              Despachante credenciado para veículos, CNH e imóveis.
              Você manda os documentos pelo WhatsApp — nós resolvemos tudo.
            </Reveal>
            <Reveal className="dsp-hero__actions" delay={240}>
              <a href="https://wa.me/5511976066281" className="dsp-btn" target="_blank" rel="noopener noreferrer">
                Orçamento no WhatsApp
              </a>
              <a href="#servicos" className="dsp-btn dsp-btn--ghost">Ver serviços</a>
            </Reveal>
            <Reveal className="dsp-hero__stats" delay={320}>
              <div><strong><Counter to={2800} prefix="+" /></strong><span>processos concluídos</span></div>
              <div><strong><Counter to={14} suffix=" anos" /></strong><span>de experiência</span></div>
              <div><strong><Counter to={5} suffix=" dias" /></strong><span>prazo médio</span></div>
            </Reveal>
          </div>
          <Reveal className="dsp-hero__visual" from="left">
            <div className="dsp-hero__card-stack">
              <div className="dsp-doc dsp-doc--1">
                <span>🚗</span>
                <div><strong>Transferência</strong><small>Concluída em 4 dias</small></div>
              </div>
              <div className="dsp-doc dsp-doc--2">
                <span>📋</span>
                <div><strong>Licenciamento</strong><small>Regularizado</small></div>
              </div>
              <div className="dsp-doc dsp-doc--3">
                <span>🪪</span>
                <div><strong>CNH Renovada</strong><small>Entregue em casa</small></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="dsp-sec">
        <div className="dsp-wrap">
          <Reveal as="p" className="dsp-kicker">Serviços</Reveal>
          <Reveal as="h2" className="dsp-h2" delay={60}>Resolvemos a burocracia que toma o seu tempo</Reveal>
          <div className="dsp-grid">
            {servicos.map((s, i) => (
              <Reveal key={s.t} className="dsp-card" delay={i * 80}>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <a href="https://wa.me/5511976066281" className="dsp-card__cta" target="_blank" rel="noopener noreferrer">Solicitar →</a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUE VELOCIDADE */}
      <section className="dsp-speed">
        <div className="dsp-wrap dsp-speed__in">
          <Reveal className="dsp-speed__txt" from="right">
            <p className="dsp-kicker dsp-kicker--light">Sem filas no DETRAN</p>
            <h2 className="dsp-h2 dsp-h2--light">Você não precisa perder meio dia de trabalho</h2>
            <p>Com procuração simples, cuidamos de toda a tramitação. Você só assina uma vez — nós fazemos o resto, do protocolo à entrega.</p>
            <ul className="dsp-speed__list">
              <li>Coleta de documentos por motoboy</li>
              <li>Acompanhamento pelo WhatsApp em tempo real</li>
              <li>Entrega em domicílio ou empresa</li>
              <li>Sem surpresas: orçamento fixo combinado antes</li>
            </ul>
            <a href="https://wa.me/5511976066281" className="dsp-btn dsp-btn--white" target="_blank" rel="noopener noreferrer">
              Começar agora
            </a>
          </Reveal>
          <Reveal className="dsp-speed__img" from="left" delay={100}>
            <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80" alt="Despachante em trabalho" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="dsp-sec dsp-sec--soft">
        <div className="dsp-wrap">
          <Reveal as="p" className="dsp-kicker">Como funciona</Reveal>
          <Reveal as="h2" className="dsp-h2" delay={60}>4 passos e o documento está pronto</Reveal>
          <div className="dsp-steps">
            {processo.map((p, i) => (
              <Reveal key={p.t} className="dsp-step" delay={i * 90}>
                <span className="dsp-step__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="dsp-sec">
        <div className="dsp-wrap">
          <Reveal as="p" className="dsp-kicker">Por que a DespacheFácil</Reveal>
          <Reveal as="h2" className="dsp-h2" delay={60}>Agilidade e seriedade em cada processo</Reveal>
          <div className="dsp-difs">
            {diferenciais.map((d, i) => (
              <Reveal key={d.t} className="dsp-dif" delay={(i % 2) * 80}>
                <span className="dsp-dif__icon">✦</span>
                <div><h3>{d.t}</h3><p>{d.d}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="dsp-sec dsp-sec--soft">
        <div className="dsp-wrap">
          <Reveal as="p" className="dsp-kicker">Clientes</Reveal>
          <Reveal as="h2" className="dsp-h2" delay={60}>Quem resolveu com a gente</Reveal>
          <div className="dsp-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="dsp-dep" delay={i * 100}>
                <div className="dsp-dep__stars">★★★★★</div>
                <p>"{d.t}"</p>
                <div className="dsp-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="dsp-sec">
        <div className="dsp-wrap dsp-faq">
          <Reveal className="dsp-faq__head" from="right">
            <p className="dsp-kicker">Dúvidas</p>
            <h2 className="dsp-h2">Perguntas frequentes</h2>
          </Reveal>
          <Reveal className="dsp-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`dsp-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="dsp-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="dsp-faq__icn" />
                </button>
                <div className="dsp-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="dsp-cta">
        <div className="dsp-wrap dsp-cta__in">
          <Reveal as="h2">Resolva agora pelo WhatsApp</Reveal>
          <Reveal as="p" delay={80}>Mande uma foto dos documentos e receba o orçamento em menos de 1 hora.</Reveal>
          <Reveal delay={160}>
            <a href="https://wa.me/5511976066281" className="dsp-btn dsp-btn--white dsp-btn--lg" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="dsp-foot">
        <div className="dsp-wrap dsp-foot__in">
          <div>
            <span className="dsp-logo">Despacha<b>Fácil</b></span>
            <p className="dsp-foot__desc">Despachante credenciado DETRAN/SP · Veículos, CNH e imóveis. Mogi das Cruzes e região.</p>
          </div>
          <div className="dsp-foot__col">
            <p>Mogi das Cruzes · SP</p>
            <p>(11) 9 0000-0000 · contato@despachafacil.com.br</p>
          </div>
        </div>
        <div className="dsp-wrap dsp-foot__copy">© {new Date().getFullYear()} DespacheFácil · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
