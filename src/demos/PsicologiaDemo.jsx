import { useState } from 'react'
import { Reveal, Counter } from './_shared/anim'
import './PsicologiaDemo.css'

const abordagens = [
  { t: 'Terapia Cognitivo-Comportamental', d: 'Identificação e reestruturação de pensamentos e padrões de comportamento.' },
  { t: 'Ansiedade e Depressão', d: 'Acompanhamento especializado para transtornos do humor e ansiedade.' },
  { t: 'Relacionamentos', d: 'Terapia de casal, familiar e questões de autoestima e vínculos afetivos.' },
  { t: 'Desenvolvimento Pessoal', d: 'Autoconhecimento, propósito e evolução da inteligência emocional.' },
]

const diferenciais = [
  { t: 'Sessões presenciais e online', d: 'Atendimento pelo consultório ou por videochamada segura.' },
  { t: 'Sigilo absoluto', d: 'Todo conteúdo das sessões é confidencial por ética profissional.' },
  { t: 'Primeira sessão de acolhimento', d: '1ª consulta dedicada a entender sua história sem julgamentos.' },
  { t: 'Sem fila de espera', d: 'Agenda flexível, com horários matutinos, vespertinos e noturnos.' },
]

const processo = [
  { t: 'Primeiro contato', d: 'Você envia uma mensagem e agendamos uma sessão sem burocracia.' },
  { t: 'Sessão de acolhimento', d: 'Espaço seguro para você se apresentar e ser ouvido sem pressa.' },
  { t: 'Plano terapêutico', d: 'Definimos juntos objetivos, frequência e abordagem do tratamento.' },
  { t: 'Evolução', d: 'Acompanhamento contínuo com revisões periódicas do progresso.' },
]

const depoimentos = [
  { n: 'L.M.', c: 'Paciente online · Mogi das Cruzes', t: 'Depois de anos evitando, decidi começar. A Dra. Camila criou um espaço tão acolhedor que me surpreendi abrindo assuntos que nunca tinha contado a ninguém. Terapia mudou minha vida.' },
  { n: 'P.S.', c: 'Terapia presencial · Suzano', t: 'Ansiedade me paralisava. Com a ajuda dela aprendi a reconhecer meus gatilhos e a lidar muito melhor. Recomendo a qualquer pessoa.' },
]

const faq = [
  { q: 'Como funciona a terapia online?', a: 'As sessões são realizadas por videochamada segura, com o mesmo ambiente de acolhimento e sigilo das consultas presenciais.' },
  { q: 'Com que frequência devo fazer terapia?', a: 'O mais comum é sessões semanais de 50 minutos. A frequência pode variar conforme suas necessidades e objetivos.' },
  { q: 'Não sei se preciso de terapia. O que faço?', a: 'A sessão de acolhimento é justamente para esclarecer isso. Muitas pessoas chegam com essa dúvida e saem com clareza sobre os próximos passos.' },
  { q: 'O conteúdo da sessão fica em sigilo?', a: 'Sim. O sigilo profissional é um dever ético da psicóloga. Tudo que é dito em sessão permanece entre você e a profissional.' },
]

export default function PsicologiaDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="psi">
      <header className="psi-nav">
        <div className="psi-nav__in">
          <a href="#topo" className="psi-logo">Dra. <b>Camila Torres</b></a>
          <nav>
            <a href="#abordagens">Terapia</a>
            <a href="#processo">Como funciona</a>
            <a href="#contato" className="psi-nav__cta">Agendar sessão</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="psi-hero">
        <div className="psi-hero__bg" />
        <div className="psi-wrap psi-hero__in">
          <div className="psi-hero__txt">
            <Reveal as="span" className="psi-pill">
              <span className="psi-pill__dot" /> Presencial e Online · CRP 06/00000
            </Reveal>
            <Reveal as="h1" delay={80}>
              Um espaço seguro para ser quem você é
            </Reveal>
            <Reveal as="p" delay={160}>
              Psicóloga com abordagem cognitivo-comportamental. Atendimento humanizado
              para ansiedade, depressão, relacionamentos e autoconhecimento.
            </Reveal>
            <Reveal className="psi-hero__actions" delay={240}>
              <a href="https://wa.me/5511976066281" className="psi-btn" target="_blank" rel="noopener noreferrer">
                Agendar 1ª sessão
              </a>
              <a href="#abordagens" className="psi-btn psi-btn--ghost">Saiba mais</a>
            </Reveal>
            <Reveal className="psi-hero__stats" delay={320}>
              <div><strong><Counter to={300} prefix="+" /></strong><span>pacientes atendidos</span></div>
              <div><strong><Counter to={6} suffix=" anos" /></strong><span>de experiência</span></div>
              <div><strong><Counter to={4} suffix=",9 ★" /></strong><span>avaliação</span></div>
            </Reveal>
          </div>
          <Reveal className="psi-hero__img" from="left">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" alt="Psicóloga em consultório" loading="eager" />
            <div className="psi-hero__online">
              <span className="psi-online__dot" />
              <div>
                <strong>Atendimento online</strong>
                <span>disponível</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABORDAGENS */}
      <section id="abordagens" className="psi-sec">
        <div className="psi-wrap">
          <Reveal as="p" className="psi-kicker">Áreas de atuação</Reveal>
          <Reveal as="h2" className="psi-h2" delay={60}>Cada pessoa tem sua própria jornada</Reveal>
          <div className="psi-grid">
            {abordagens.map((a, i) => (
              <Reveal key={a.t} className="psi-card" delay={i * 80}>
                <h3>{a.t}</h3>
                <p>{a.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUE — ONLINE */}
      <section className="psi-online-sec">
        <div className="psi-wrap psi-online-sec__in">
          <Reveal className="psi-online-sec__txt" from="right">
            <p className="psi-kicker psi-kicker--light">Terapia online</p>
            <h2 className="psi-h2 psi-h2--light">O conforto de cuidar de você de onde estiver</h2>
            <p>Sessões por videochamada com o mesmo acolhimento, sigilo e eficácia da consulta presencial. Basta um celular ou computador.</p>
            <ul className="psi-online-sec__list">
              <li>Plataforma segura e criptografada</li>
              <li>Sem deslocamento, sem trânsito</li>
              <li>Horários flexíveis, incluindo noites</li>
            </ul>
            <a href="https://wa.me/5511976066281" className="psi-btn psi-btn--white" target="_blank" rel="noopener noreferrer">
              Agendar sessão online
            </a>
          </Reveal>
          <Reveal className="psi-online-sec__img" from="left" delay={100}>
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" alt="Sessão de terapia online" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="psi-sec psi-sec--soft">
        <div className="psi-wrap">
          <Reveal as="p" className="psi-kicker">Como funciona</Reveal>
          <Reveal as="h2" className="psi-h2" delay={60}>Do primeiro contato à evolução</Reveal>
          <div className="psi-steps">
            {processo.map((p, i) => (
              <Reveal key={p.t} className="psi-step" delay={i * 90}>
                <span className="psi-step__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="psi-sec">
        <div className="psi-wrap">
          <Reveal as="p" className="psi-kicker">Por que me escolher</Reveal>
          <Reveal as="h2" className="psi-h2" delay={60}>Terapia que se adapta a você</Reveal>
          <div className="psi-difs">
            {diferenciais.map((d, i) => (
              <Reveal key={d.t} className="psi-dif" delay={(i % 2) * 80}>
                <span className="psi-dif__leaf">✦</span>
                <div><h3>{d.t}</h3><p>{d.d}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="psi-sec psi-sec--soft">
        <div className="psi-wrap">
          <Reveal as="p" className="psi-kicker">Pacientes</Reveal>
          <Reveal as="h2" className="psi-h2" delay={60}>Histórias de transformação</Reveal>
          <p className="psi-deps__nota">Por preservar a identidade dos pacientes, os depoimentos são exibidos com iniciais.</p>
          <div className="psi-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="psi-dep" delay={i * 100}>
                <div className="psi-dep__stars">★★★★★</div>
                <p>"{d.t}"</p>
                <div className="psi-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="psi-sec">
        <div className="psi-wrap psi-faq">
          <Reveal className="psi-faq__head" from="right">
            <p className="psi-kicker">Dúvidas</p>
            <h2 className="psi-h2">Perguntas frequentes</h2>
          </Reveal>
          <Reveal className="psi-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`psi-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="psi-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="psi-faq__icn" />
                </button>
                <div className="psi-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="psi-cta">
        <div className="psi-wrap psi-cta__in">
          <Reveal as="h2">Dê o primeiro passo hoje</Reveal>
          <Reveal as="p" delay={80}>Sem julgamentos, sem pressa. A 1ª sessão é um espaço só seu, para começar no seu ritmo.</Reveal>
          <Reveal delay={160}>
            <a href="https://wa.me/5511976066281" className="psi-btn psi-btn--white psi-btn--lg" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="psi-foot">
        <div className="psi-wrap psi-foot__in">
          <div>
            <span className="psi-logo">Dra. <b>Camila Torres</b></span>
            <p className="psi-foot__desc">Psicóloga · CRP 06/00000 · Atendimento presencial e online.</p>
          </div>
          <div className="psi-foot__col">
            <p>Suzano · SP</p>
            <p>(11) 9 0000-0000 · contato@dracamilatorres.com.br</p>
          </div>
        </div>
        <div className="psi-wrap psi-foot__copy">© {new Date().getFullYear()} Dra. Camila Torres · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
