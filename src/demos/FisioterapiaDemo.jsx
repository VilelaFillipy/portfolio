import { useState } from 'react'
import { Reveal, Counter } from './_shared/anim'
import './FisioterapiaDemo.css'

const servicos = [
  { t: 'Fisioterapia Ortopédica', d: 'Reabilitação de lesões musculares, articulares e pós-cirúrgicas.' },
  { t: 'Pilates Clínico', d: 'Pilates terapêutico com equipamentos para reequilíbrio postural.' },
  { t: 'Fisioterapia Neurológica', d: 'Reabilitação de AVC, Parkinson e doenças neuromusculares.' },
  { t: 'RPG e Postural', d: 'Correção postural com técnicas globais e exercícios ativos.' },
]

const diferenciais = [
  { t: 'Avaliação postural gratuita', d: 'Diagnóstico inicial completo sem custo e sem compromisso.' },
  { t: 'Agenda online', d: 'Agende sua sessão a qualquer hora pelo WhatsApp ou site.' },
  { t: 'Fisioterapeutas especializados', d: 'Equipe com pós-graduação em ortopedia e esportiva.' },
  { t: 'Planos personalizados', d: 'Protocolo de tratamento adaptado à sua rotina e objetivo.' },
]

const processo = [
  { t: 'Avaliação', d: 'Análise postural e funcional completa do paciente.' },
  { t: 'Diagnóstico', d: 'Identificação dos desequilíbrios e definição de metas.' },
  { t: 'Tratamento', d: 'Sessões com técnicas manuais e exercícios supervisionados.' },
  { t: 'Alta e manutenção', d: 'Programa de exercícios para manter os resultados em casa.' },
]

const depoimentos = [
  { n: 'Mariana Castro', c: 'Pós-cirúrgico · Mogi das Cruzes', t: 'Fiz cirurgia no joelho e pensei que não voltaria a jogar. Depois de 4 meses de fisioterapia na EquilíbriO, voltei melhor do que antes.' },
  { n: 'José Henrique', c: 'Pilates Clínico · Suzano', t: 'Lombalgia crônica que nenhum tratamento resolvia. O pilates clínico aqui mudou minha qualidade de vida completamente.' },
]

const faq = [
  { q: 'Qual a diferença do pilates clínico para o comum?', a: 'O pilates clínico é realizado por fisioterapeuta com foco terapêutico, usando equipamentos específicos e protocolo individual de reabilitação.' },
  { q: 'Quantas sessões precisarei fazer?', a: 'Varia conforme o caso. Na avaliação inicial indicamos o número estimado de sessões para atingir seu objetivo.' },
  { q: 'Vocês atendem planos de saúde?', a: 'Sim. Atendemos Unimed, Bradesco Saúde, SulAmérica e outros. Consulte disponibilidade para o seu plano.' },
  { q: 'O que devo usar na sessão?', a: 'Roupas confortáveis que permitam movimento. Temos vestiário disponível na clínica.' },
]

export default function FisioterapiaDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="fis">
      <header className="fis-nav">
        <div className="fis-nav__in">
          <a href="#topo" className="fis-logo">Equilíbri<b>O</b></a>
          <nav>
            <a href="#servicos">Serviços</a>
            <a href="#processo">Tratamento</a>
            <a href="#contato" className="fis-nav__cta">Agendar</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="fis-hero">
        <div className="fis-hero__bg" />
        <div className="fis-wrap fis-hero__in">
          <Reveal className="fis-hero__txt">
            <span className="fis-pill">
              <span className="fis-pill__dot" /> Avaliação postural gratuita
            </span>
            <h1>Recupere o movimento. Recupere a vida.</h1>
            <p>
              Fisioterapia ortopédica, pilates clínico e reabilitação neurológica
              com equipe especializada e protocolos individualizados.
            </p>
            <div className="fis-hero__actions">
              <a href="https://wa.me/5511976066281" className="fis-btn" target="_blank" rel="noopener noreferrer">
                Agendar avaliação gratuita
              </a>
              <a href="#servicos" className="fis-btn fis-btn--ghost">Ver tratamentos</a>
            </div>
            <div className="fis-hero__stats">
              <div><strong><Counter to={1400} prefix="+" /></strong><span>pacientes reabilitados</span></div>
              <div><strong><Counter to={92} suffix="%" /></strong><span>alta no prazo</span></div>
              <div><strong><Counter to={10} suffix=" anos" /></strong><span>de clínica</span></div>
            </div>
          </Reveal>
          <Reveal className="fis-hero__img" from="left">
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80" alt="Fisioterapeuta com paciente" loading="eager" />
          </Reveal>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="fis-sec">
        <div className="fis-wrap">
          <Reveal as="p" className="fis-kicker">Especialidades</Reveal>
          <Reveal as="h2" className="fis-h2" delay={60}>Tratamentos para cada necessidade</Reveal>
          <div className="fis-grid">
            {servicos.map((s, i) => (
              <Reveal key={s.t} className="fis-card" delay={i * 80}>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <a href="https://wa.me/5511976066281" className="fis-card__link" target="_blank" rel="noopener noreferrer">
                  Saiba mais →
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PILATES DESTAQUE */}
      <section className="fis-pilates">
        <div className="fis-wrap fis-pilates__in">
          <Reveal className="fis-pilates__txt" from="right">
            <p className="fis-kicker fis-kicker--light">Pilates Clínico</p>
            <h2 className="fis-h2 fis-h2--light">Equilíbrio que se sente em cada movimento</h2>
            <p>Studio equipado com reformer, cadillac e aparelhos de solo. Turmas reduzidas para atendimento individualizado.</p>
            <ul className="fis-pilates__list">
              <li>Turmas de até 4 pessoas</li>
              <li>Aulas individuais disponíveis</li>
              <li>Protocolo adaptado ao seu histórico</li>
            </ul>
            <a href="https://wa.me/5511976066281" className="fis-btn fis-btn--white" target="_blank" rel="noopener noreferrer">
              Agendar aula experimental
            </a>
          </Reveal>
          <Reveal className="fis-pilates__img" from="left" delay={100}>
            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80" alt="Studio de pilates" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="fis-sec fis-sec--soft">
        <div className="fis-wrap">
          <Reveal as="p" className="fis-kicker">Jornada do paciente</Reveal>
          <Reveal as="h2" className="fis-h2" delay={60}>Do primeiro contato à alta</Reveal>
          <div className="fis-steps">
            {processo.map((p, i) => (
              <Reveal key={p.t} className="fis-step" delay={i * 90}>
                <span className="fis-step__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="fis-sec">
        <div className="fis-wrap">
          <Reveal as="p" className="fis-kicker">Por que a EquilíbriO</Reveal>
          <Reveal as="h2" className="fis-h2" delay={60}>Cuidado que vai além do tratamento</Reveal>
          <div className="fis-difs">
            {diferenciais.map((d, i) => (
              <Reveal key={d.t} className="fis-dif" delay={(i % 2) * 80}>
                <span className="fis-dif__dot" />
                <div><h3>{d.t}</h3><p>{d.d}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="fis-sec fis-sec--soft">
        <div className="fis-wrap">
          <Reveal as="p" className="fis-kicker">Pacientes</Reveal>
          <Reveal as="h2" className="fis-h2" delay={60}>Histórias de recuperação</Reveal>
          <div className="fis-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="fis-dep" delay={i * 100}>
                <div className="fis-dep__stars">★★★★★</div>
                <p>"{d.t}"</p>
                <div className="fis-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fis-sec">
        <div className="fis-wrap fis-faq">
          <Reveal className="fis-faq__head" from="right">
            <p className="fis-kicker">Dúvidas</p>
            <h2 className="fis-h2">Perguntas frequentes</h2>
          </Reveal>
          <Reveal className="fis-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`fis-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="fis-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="fis-faq__icn" />
                </button>
                <div className="fis-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="fis-cta">
        <div className="fis-wrap fis-cta__in">
          <Reveal as="h2">Dê o primeiro passo para a sua recuperação</Reveal>
          <Reveal as="p" delay={80}>Avaliação gratuita sem compromisso. Atendemos Mogi das Cruzes, Suzano e região.</Reveal>
          <Reveal delay={160}>
            <a href="https://wa.me/5511976066281" className="fis-btn fis-btn--white fis-btn--lg" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="fis-foot">
        <div className="fis-wrap fis-foot__in">
          <div>
            <span className="fis-logo">Equilíbri<b>O</b></span>
            <p className="fis-foot__desc">Fisioterapia, pilates clínico e reabilitação com equipe especializada.</p>
          </div>
          <div className="fis-foot__col">
            <p>Mogi das Cruzes · SP</p>
            <p>(11) 9 0000-0000 · contato@equilibrio.com.br</p>
          </div>
        </div>
        <div className="fis-wrap fis-foot__copy">© {new Date().getFullYear()} EquilíbriO · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
