import { useState } from 'react'
import { Reveal, Counter } from './_shared/anim'
import './ConsultorioDemo.css'

const especialidades = [
  { t: 'Clínica Geral', d: 'Consultas de rotina, check-up e acompanhamento de saúde integral.' },
  { t: 'Cardiologia', d: 'Avaliação cardiovascular com ECG e holter digital no próprio consultório.' },
  { t: 'Endocrinologia', d: 'Diabetes, tireoide e acompanhamento hormonal com follow-up periódico.' },
  { t: 'Medicina Preventiva', d: 'Exames periódicos, vacinação e programa de saúde personalizado.' },
]

const diferenciais = [
  { t: 'Agenda online 24h', d: 'Consultas agendadas pelo WhatsApp a qualquer hora.' },
  { t: 'Telemedicina disponível', d: 'Consultas por videochamada para retornos e urgências menores.' },
  { t: 'Laudos no mesmo dia', d: 'Resultados de exames integrados ao prontuário eletrônico.' },
  { t: 'Ambiente acolhedor', d: 'Consultório moderno com tempo de espera mínimo.' },
]

const processo = [
  { t: 'Agendamento', d: 'Marque pelo WhatsApp em menos de 2 minutos.' },
  { t: 'Anamnese', d: 'Consulta completa com histórico e exame físico detalhado.' },
  { t: 'Diagnóstico', d: 'Hipóteses, exames complementares e encaminhamentos quando necessário.' },
  { t: 'Acompanhamento', d: 'Retorno programado e canal direto pelo WhatsApp.' },
]

const depoimentos = [
  { n: 'Ana Paula Souza', c: 'Paciente · Santo André', t: 'Finalmente encontrei um médico que ouve de verdade. Consulta completa, sem pressa, com atenção total. Minha família toda vem aqui.' },
  { n: 'Roberto Neves', c: 'Cardiologia · Guarulhos', t: 'ECG e avaliação cardiológica completa em uma consulta. Resultado na hora, relatório detalhado. Excelente!' },
]

const faq = [
  { q: 'Vocês aceitam planos de saúde?', a: 'Atendemos Unimed, Bradesco Saúde, SulAmérica, Amil e planos corporativos. Consulte disponibilidade para o seu plano.' },
  { q: 'É possível fazer check-up completo?', a: 'Sim. Temos pacotes de check-up anual com avaliação clínica, exames de sangue e eletrocardiograma.' },
  { q: 'O atendimento por telemedicina é válido?', a: 'Sim. As teleconsultas emitem receitas e atestados válidos com assinatura digital do médico.' },
  { q: 'Qual o tempo de espera para consulta?', a: 'Agendamos com hora marcada e mantemos o horário. O tempo de espera médio é inferior a 10 minutos.' },
]

export default function ConsultorioDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="con">
      <header className="con-nav">
        <div className="con-nav__in">
          <a href="#topo" className="con-logo">Clínica <b>Saúde+</b></a>
          <nav>
            <a href="#especialidades">Especialidades</a>
            <a href="#processo">Como funciona</a>
            <a href="#contato" className="con-nav__cta">Agendar consulta</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="con-hero">
        <div className="con-hero__bg" />
        <div className="con-wrap con-hero__in">
          <div className="con-hero__txt">
            <Reveal as="span" className="con-badge">
              <span className="con-badge__dot" /> Médicos especialistas · Particular e convênio
            </Reveal>
            <Reveal as="h1" delay={80}>Saúde de qualidade. Com quem você confia.</Reveal>
            <Reveal as="p" delay={160}>
              Consultas particulares e por convênio com médicos especializados,
              prontuário eletrônico e laudo no mesmo dia. Santo André e região.
            </Reveal>
            <Reveal className="con-hero__actions" delay={240}>
              <a href="https://wa.me/5511976066281" className="con-btn" target="_blank" rel="noopener noreferrer">
                Agendar pelo WhatsApp
              </a>
              <a href="#especialidades" className="con-btn con-btn--ghost">Ver especialidades</a>
            </Reveal>
            <Reveal className="con-hero__stats" delay={320}>
              <div><strong><Counter to={5200} prefix="+" /></strong><span>pacientes</span></div>
              <div><strong><Counter to={4} /></strong><span>especialidades</span></div>
              <div><strong><Counter to={4} suffix=",8 ★" /></strong><span>avaliação</span></div>
            </Reveal>
          </div>
          <Reveal className="con-hero__img" from="left">
            <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80" alt="Médico em consultório" loading="eager" />
            <div className="con-hero__tele">
              <strong>Telemedicina</strong>
              <span>disponível</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section id="especialidades" className="con-sec">
        <div className="con-wrap">
          <Reveal as="p" className="con-kicker">Especialidades</Reveal>
          <Reveal as="h2" className="con-h2" delay={60}>Cuidado médico completo para você e sua família</Reveal>
          <div className="con-grid">
            {especialidades.map((s, i) => (
              <Reveal key={s.t} className="con-card" delay={i * 80}>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <a href="https://wa.me/5511976066281" className="con-card__cta" target="_blank" rel="noopener noreferrer">Agendar →</a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHECK-UP DESTAQUE */}
      <section className="con-checkup">
        <div className="con-wrap con-checkup__in">
          <Reveal className="con-checkup__txt" from="right">
            <p className="con-kicker con-kicker--light">Check-up anual</p>
            <h2 className="con-h2 con-h2--light">Prevenir é sempre mais inteligente que tratar</h2>
            <p>Pacote completo com consulta clínica, exames de sangue, ECG e avaliação de risco cardiovascular.</p>
            <ul className="con-checkup__list">
              <li>Hemograma completo e perfil lipídico</li>
              <li>Eletrocardiograma digital</li>
              <li>Relatório médico detalhado</li>
              <li>Acompanhamento por 12 meses</li>
            </ul>
            <a href="https://wa.me/5511976066281" className="con-btn con-btn--white" target="_blank" rel="noopener noreferrer">
              Solicitar check-up
            </a>
          </Reveal>
          <Reveal className="con-checkup__img" from="left" delay={100}>
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" alt="Consulta médica" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="con-sec con-sec--soft">
        <div className="con-wrap">
          <Reveal as="p" className="con-kicker">Passo a passo</Reveal>
          <Reveal as="h2" className="con-h2" delay={60}>Do agendamento ao acompanhamento</Reveal>
          <div className="con-steps">
            {processo.map((p, i) => (
              <Reveal key={p.t} className="con-step" delay={i * 90}>
                <span className="con-step__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="con-sec">
        <div className="con-wrap">
          <Reveal as="p" className="con-kicker">Por que a Saúde+</Reveal>
          <Reveal as="h2" className="con-h2" delay={60}>Medicina centrada em você</Reveal>
          <div className="con-difs">
            {diferenciais.map((d, i) => (
              <Reveal key={d.t} className="con-dif" delay={(i % 2) * 80}>
                <span className="con-dif__check">✓</span>
                <div><h3>{d.t}</h3><p>{d.d}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="con-sec con-sec--soft">
        <div className="con-wrap">
          <Reveal as="p" className="con-kicker">Pacientes</Reveal>
          <Reveal as="h2" className="con-h2" delay={60}>O que dizem nossos pacientes</Reveal>
          <div className="con-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="con-dep" delay={i * 100}>
                <div className="con-dep__stars">★★★★★</div>
                <p>"{d.t}"</p>
                <div className="con-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="con-sec">
        <div className="con-wrap con-faq">
          <Reveal className="con-faq__head" from="right">
            <p className="con-kicker">Dúvidas</p>
            <h2 className="con-h2">Perguntas frequentes</h2>
          </Reveal>
          <Reveal className="con-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`con-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="con-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="con-faq__icn" />
                </button>
                <div className="con-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="con-cta">
        <div className="con-wrap con-cta__in">
          <Reveal as="h2">Agende sua consulta hoje</Reveal>
          <Reveal as="p" delay={80}>Atendimento ágil, médico que ouve e resultado no mesmo dia. Santo André e região.</Reveal>
          <Reveal delay={160}>
            <a href="https://wa.me/5511976066281" className="con-btn con-btn--white con-btn--lg" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="con-foot">
        <div className="con-wrap con-foot__in">
          <div>
            <span className="con-logo">Clínica <b>Saúde+</b></span>
            <p className="con-foot__desc">Medicina especializada com agenda digital e atendimento humanizado.</p>
          </div>
          <div className="con-foot__col">
            <p>Santo André · SP</p>
            <p>(11) 9 0000-0000 · contato@clinicasaudemais.com.br</p>
          </div>
        </div>
        <div className="con-wrap con-foot__copy">© {new Date().getFullYear()} Clínica Saúde+ · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
