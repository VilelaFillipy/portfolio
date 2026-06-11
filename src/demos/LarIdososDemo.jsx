import { useState } from 'react'
import { Reveal, Counter } from './_shared/anim'
import './LarIdososDemo.css'

const estrutura = [
  { t: 'Quartos individuais e duplos', d: 'Ambientes climatizados, acessíveis e decorados com conforto e segurança.' },
  { t: 'Equipe 24 horas', d: 'Cuidadores e enfermagem presentes o dia todo, incluindo fins de semana.' },
  { t: 'Atividades diárias', d: 'Fisioterapia, terapia ocupacional, musicoterapia e passeios programados.' },
  { t: 'Alimentação especial', d: 'Cardápio elaborado por nutricionista com dietas adaptadas por indicação médica.' },
]

const diferenciais = [
  { t: 'Câmeras para a família', d: 'Monitoramento por câmeras com acesso remoto pelo celular dos familiares.' },
  { t: 'Relatório semanal', d: 'Família recebe atualização do estado de saúde e humor do residente.' },
  { t: 'Visitas livres', d: 'A família pode visitar a qualquer hora, sem necessidade de agendamento.' },
  { t: 'Médico vinculado', d: 'Acompanhamento médico periódico incluso no plano.' },
]

const processo = [
  { t: 'Visita guiada', d: 'Conheça a estrutura e tire todas as dúvidas com nossa equipe.' },
  { t: 'Avaliação', d: 'Avaliamos o grau de dependência e necessidades do seu familiar.' },
  { t: 'Plano personalizado', d: 'Montamos um plano de cuidados e apresentamos as opções.' },
  { t: 'Adaptação', d: 'Acompanhamos os primeiros dias para garantir bem-estar e conforto.' },
]

const depoimentos = [
  { n: 'Família Rodrigues', c: 'Mogi das Cruzes', t: 'Minha mãe está há 2 anos no Lar Sereno e nunca esteve tão bem. As atividades, os cuidados e o carinho da equipe fazem toda a diferença. Dormimos tranquilos.' },
  { n: 'Carlos Alberto', c: 'Filho de residente · Suzano', t: 'Pesquisei muito antes de escolher. O Lar Sereno foi o único que me mostrou tudo com total transparência e ainda deu acesso às câmeras. Confiança total.' },
]

const faq = [
  { q: 'A família pode visitar quando quiser?', a: 'Sim. As visitas são livres em qualquer horário. Temos espaços de convivência preparados para receber a família.' },
  { q: 'Vocês cuidam de idosos com demência?', a: 'Sim. Temos protocolo específico para Alzheimer e outras demências, com equipe treinada e ambiente seguro.' },
  { q: 'Qual o processo de adaptação?', a: 'Os primeiros dias têm acompanhamento intensivo. Mantemos a família informada diariamente até que o residente esteja totalmente adaptado.' },
  { q: 'O que está incluso no plano mensal?', a: 'Hospedagem, alimentação, cuidados de enfermagem, atividades terapêuticas, médico vinculado e relatório semanal para a família.' },
]

export default function LarIdososDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="lar">
      <header className="lar-nav">
        <div className="lar-nav__in">
          <a href="#topo" className="lar-logo">Lar <b>Sereno</b></a>
          <nav>
            <a href="#estrutura">Estrutura</a>
            <a href="#processo">Como funciona</a>
            <a href="#contato" className="lar-nav__cta">Visita guiada</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="lar-hero">
        <div className="lar-hero__overlay" />
        <img className="lar-hero__bg" src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1400&q=80" alt="Idosos em atividade" loading="eager" />
        <div className="lar-wrap lar-hero__in">
          <Reveal as="span" className="lar-badge">Cuidado · Carinho · Segurança</Reveal>
          <Reveal as="h1" delay={80}>
            Onde a família pode<br />confiar plenamente
          </Reveal>
          <Reveal as="p" delay={160}>
            Lar de repouso com equipe 24 horas, atividades diárias, acompanhamento
            médico e câmeras com acesso para a família. Mogi das Cruzes e região.
          </Reveal>
          <Reveal className="lar-hero__actions" delay={240}>
            <a href="https://wa.me/5511976066281" className="lar-btn" target="_blank" rel="noopener noreferrer">
              Agendar visita guiada
            </a>
            <a href="#estrutura" className="lar-btn lar-btn--ghost">Conhecer a estrutura</a>
          </Reveal>
          <Reveal className="lar-hero__stats" delay={320}>
            <div><strong><Counter to={120} prefix="+" /></strong><span>residentes atendidos</span></div>
            <div><strong><Counter to={24} suffix="h" /></strong><span>equipe presente</span></div>
            <div><strong><Counter to={12} suffix=" anos" /></strong><span>de história</span></div>
          </Reveal>
        </div>
      </section>

      {/* ESTRUTURA */}
      <section id="estrutura" className="lar-sec">
        <div className="lar-wrap">
          <Reveal as="p" className="lar-kicker">Nossa estrutura</Reveal>
          <Reveal as="h2" className="lar-h2" delay={60}>Um lar de verdade para o seu familiar</Reveal>
          <div className="lar-grid">
            {estrutura.map((s, i) => (
              <Reveal key={s.t} className="lar-card" delay={i * 80}>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPARÊNCIA */}
      <section className="lar-transp">
        <div className="lar-wrap lar-transp__in">
          <Reveal className="lar-transp__txt" from="right">
            <p className="lar-kicker lar-kicker--light">Transparência total</p>
            <h2 className="lar-h2 lar-h2--light">A família sempre informada e próxima</h2>
            <p>Câmeras com acesso pelo celular, relatório semanal e visitas livres. Porque a paz de espírito da família é tão importante quanto o bem-estar do residente.</p>
            <ul className="lar-transp__list">
              <li>Acesso às câmeras pelo celular</li>
              <li>Relatório semanal de saúde e humor</li>
              <li>Visitas a qualquer hora</li>
              <li>WhatsApp direto com a equipe de cuidados</li>
            </ul>
            <a href="https://wa.me/5511976066281" className="lar-btn lar-btn--white" target="_blank" rel="noopener noreferrer">
              Falar com a equipe
            </a>
          </Reveal>
          <Reveal className="lar-transp__img" from="left" delay={100}>
            <img src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80" alt="Cuidadora com idoso" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="lar-sec lar-sec--soft">
        <div className="lar-wrap">
          <Reveal as="p" className="lar-kicker">Como funciona</Reveal>
          <Reveal as="h2" className="lar-h2" delay={60}>Da visita à adaptação completa</Reveal>
          <div className="lar-steps">
            {processo.map((p, i) => (
              <Reveal key={p.t} className="lar-step" delay={i * 90}>
                <span className="lar-step__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="lar-sec">
        <div className="lar-wrap">
          <Reveal as="p" className="lar-kicker">Por que o Lar Sereno</Reveal>
          <Reveal as="h2" className="lar-h2" delay={60}>Cuidado que vai além do básico</Reveal>
          <div className="lar-difs">
            {diferenciais.map((d, i) => (
              <Reveal key={d.t} className="lar-dif" delay={(i % 2) * 80}>
                <span className="lar-dif__heart">♥</span>
                <div><h3>{d.t}</h3><p>{d.d}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="lar-sec lar-sec--soft">
        <div className="lar-wrap">
          <Reveal as="p" className="lar-kicker">Famílias</Reveal>
          <Reveal as="h2" className="lar-h2" delay={60}>O que as famílias dizem</Reveal>
          <div className="lar-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="lar-dep" delay={i * 100}>
                <div className="lar-dep__stars">★★★★★</div>
                <p>"{d.t}"</p>
                <div className="lar-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="lar-sec">
        <div className="lar-wrap lar-faq">
          <Reveal className="lar-faq__head" from="right">
            <p className="lar-kicker">Dúvidas</p>
            <h2 className="lar-h2">Perguntas frequentes</h2>
          </Reveal>
          <Reveal className="lar-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`lar-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="lar-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="lar-faq__icn" />
                </button>
                <div className="lar-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="lar-cta">
        <div className="lar-wrap lar-cta__in">
          <Reveal as="h2">Venha conhecer o Lar Sereno</Reveal>
          <Reveal as="p" delay={80}>Visita guiada gratuita, sem compromisso. Tire todas as dúvidas pessoalmente.</Reveal>
          <Reveal delay={160}>
            <a href="https://wa.me/5511976066281" className="lar-btn lar-btn--white lar-btn--lg" target="_blank" rel="noopener noreferrer">
              Agendar visita
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="lar-foot">
        <div className="lar-wrap lar-foot__in">
          <div>
            <span className="lar-logo">Lar <b>Sereno</b></span>
            <p className="lar-foot__desc">Lar de repouso com cuidado humanizado, segurança e transparência para a família.</p>
          </div>
          <div className="lar-foot__col">
            <p>Mogi das Cruzes · SP</p>
            <p>(11) 9 0000-0000 · contato@larsereno.com.br</p>
          </div>
        </div>
        <div className="lar-wrap lar-foot__copy">© {new Date().getFullYear()} Lar Sereno · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
