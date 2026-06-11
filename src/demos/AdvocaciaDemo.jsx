import { useState } from 'react'
import { Reveal, Counter } from './_shared/anim'
import './AdvocaciaDemo.css'

const areas = [
  { t: 'Direito Trabalhista', d: 'Demissão sem justa causa, verbas rescisórias, assédio moral e ações contra empregadores.' },
  { t: 'Direito de Família', d: 'Divórcio, guarda de filhos, pensão alimentícia, inventário e herança.' },
  { t: 'Direito Imobiliário', d: 'Contratos de compra e venda, locação, usucapião e regularização de imóveis.' },
  { t: 'Direito do Consumidor', d: 'Cobranças indevidas, negativação injusta, falhas em produtos e serviços.' },
]

const diferenciais = [
  { t: 'OAB/SP 000.000', d: 'Inscrição ativa com especialização em Direito Civil e Trabalhista.' },
  { t: 'Consulta gratuita', d: 'Primeira análise do seu caso sem custo e sem compromisso.' },
  { t: 'Honorários claros', d: 'Sem surpresas: apresentamos todas as condições antes de começar.' },
  { t: 'Acompanhamento online', d: 'Consulte o andamento do seu processo a qualquer hora pelo WhatsApp.' },
]

const processo = [
  { t: 'Consulta inicial', d: 'Análise gratuita e sigilosa do seu caso em até 24 horas.' },
  { t: 'Estratégia', d: 'Elaboramos o melhor caminho: negociação, acordo ou ação judicial.' },
  { t: 'Representação', d: 'Atuamos em todas as fases do processo com atualizações constantes.' },
  { t: 'Resolução', d: 'Acompanhamos até a execução da sentença e o recebimento do seu direito.' },
]

const depoimentos = [
  { n: 'Claudia Martins', c: 'Direito Trabalhista · São Paulo', t: 'Fui demitida sem justa causa e perdi várias verbas. Com a ajuda do Dr. Rafael, recebi tudo o que era meu direito em menos de 6 meses. Resultado excelente.' },
  { n: 'Henrique Braga', c: 'Direito de Família · Osasco', t: 'Divórcio litigioso resolvido com rapidez e muito profissionalismo. A guarda compartilhada foi estabelecida de forma justa para todos.' },
]

const faq = [
  { q: 'A consulta inicial é mesmo gratuita?', a: 'Sim. A análise inicial do seu caso é completamente gratuita. Após, apresentamos a proposta de honorários com total transparência.' },
  { q: 'Preciso ir ao escritório pessoalmente?', a: 'Não é obrigatório. Atendemos por videoconferência para a maioria dos casos. A presença física é necessária apenas para coleta de assinaturas em documentos específicos.' },
  { q: 'Qual o prazo para resolver meu caso?', a: 'Depende da natureza do caso. Acordos extrajudiciais podem ser fechados em semanas. Ações judiciais variam de 6 meses a 3 anos.' },
  { q: 'Como funciona o pagamento dos honorários?', a: 'Trabalhamos com honorários fixos, êxito (% da causa) ou parcelamento. Definimos o modelo mais adequado para o seu caso na consulta inicial.' },
]

export default function AdvocaciaDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="adv">
      <header className="adv-nav">
        <div className="adv-nav__in">
          <a href="#topo" className="adv-logo">Carvalho <b>& Associados</b></a>
          <nav>
            <a href="#areas">Áreas</a>
            <a href="#processo">Como trabalhamos</a>
            <a href="#contato" className="adv-nav__cta">Consulta gratuita</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="adv-hero">
        <div className="adv-hero__overlay" />
        <img className="adv-hero__bg" src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1400&q=80" alt="Escritório de advocacia" loading="eager" />
        <div className="adv-wrap adv-hero__in">
          <Reveal as="span" className="adv-badge">OAB/SP 000.000 · Advocacia especializada</Reveal>
          <Reveal as="h1" delay={80}>
            Seu direito,<br />defendido com rigor.
          </Reveal>
          <Reveal as="p" delay={160}>
            Advocacia trabalhista, família, imobiliária e consumidor.
            Consulta gratuita, honorários transparentes, resultado.
          </Reveal>
          <Reveal className="adv-hero__actions" delay={240}>
            <a href="https://wa.me/5511976066281" className="adv-btn" target="_blank" rel="noopener noreferrer">
              Consulta gratuita
            </a>
            <a href="#areas" className="adv-btn adv-btn--ghost">Nossas áreas</a>
          </Reveal>
          <Reveal className="adv-hero__stats" delay={320}>
            <div><strong><Counter to={620} prefix="+" /></strong><span>casos resolvidos</span></div>
            <div><strong><Counter to={15} suffix=" anos" /></strong><span>de atuação</span></div>
            <div><strong><Counter to={94} suffix="%" /></strong><span>taxa de sucesso</span></div>
          </Reveal>
        </div>
      </section>

      {/* ÁREAS */}
      <section id="areas" className="adv-sec">
        <div className="adv-wrap">
          <Reveal as="p" className="adv-kicker">Especialidades</Reveal>
          <Reveal as="h2" className="adv-h2" delay={60}>Atuamos onde o seu direito está em jogo</Reveal>
          <div className="adv-grid">
            {areas.map((a, i) => (
              <Reveal key={a.t} className="adv-card" delay={i * 80}>
                <h3>{a.t}</h3>
                <p>{a.d}</p>
                <a href="https://wa.me/5511976066281" className="adv-card__cta" target="_blank" rel="noopener noreferrer">Consultar →</a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUE — CONSULTA */}
      <section className="adv-consult">
        <div className="adv-wrap adv-consult__in">
          <Reveal className="adv-consult__txt" from="right">
            <p className="adv-kicker adv-kicker--light">Consulta gratuita</p>
            <h2 className="adv-h2 adv-h2--light">Não pague nada antes de saber se tem direito</h2>
            <p>A análise do seu caso é gratuita e sigilosa. Após entender a situação, apresentamos a estratégia e os honorários com total clareza, sem letras pequenas.</p>
            <ul className="adv-consult__list">
              <li>Resposta em até 24 horas</li>
              <li>Atendimento presencial ou por videoconferência</li>
              <li>Sigilo absoluto garantido pelo Código de Ética da OAB</li>
            </ul>
            <a href="https://wa.me/5511976066281" className="adv-btn adv-btn--gold" target="_blank" rel="noopener noreferrer">
              Falar com advogado
            </a>
          </Reveal>
          <Reveal className="adv-consult__img" from="left" delay={100}>
            <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80" alt="Advogado em reunião" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="adv-sec adv-sec--soft">
        <div className="adv-wrap">
          <Reveal as="p" className="adv-kicker">Nossa metodologia</Reveal>
          <Reveal as="h2" className="adv-h2" delay={60}>Do primeiro contato à resolução</Reveal>
          <div className="adv-steps">
            {processo.map((p, i) => (
              <Reveal key={p.t} className="adv-step" delay={i * 90}>
                <span className="adv-step__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="adv-sec">
        <div className="adv-wrap">
          <Reveal as="p" className="adv-kicker">Credenciais</Reveal>
          <Reveal as="h2" className="adv-h2" delay={60}>Advocacia com ética e transparência</Reveal>
          <div className="adv-difs">
            {diferenciais.map((d, i) => (
              <Reveal key={d.t} className="adv-dif" delay={(i % 2) * 80}>
                <span className="adv-dif__seal">§</span>
                <div><h3>{d.t}</h3><p>{d.d}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="adv-sec adv-sec--soft">
        <div className="adv-wrap">
          <Reveal as="p" className="adv-kicker">Clientes</Reveal>
          <Reveal as="h2" className="adv-h2" delay={60}>Casos que fazem a diferença</Reveal>
          <div className="adv-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="adv-dep" delay={i * 100}>
                <div className="adv-dep__stars">★★★★★</div>
                <p>"{d.t}"</p>
                <div className="adv-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="adv-sec">
        <div className="adv-wrap adv-faq">
          <Reveal className="adv-faq__head" from="right">
            <p className="adv-kicker">Dúvidas</p>
            <h2 className="adv-h2">Perguntas frequentes</h2>
          </Reveal>
          <Reveal className="adv-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`adv-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="adv-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="adv-faq__icn" />
                </button>
                <div className="adv-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="adv-cta">
        <div className="adv-wrap adv-cta__in">
          <Reveal as="h2">Consulta gratuita. Sem compromisso.</Reveal>
          <Reveal as="p" delay={80}>Analisamos o seu caso e apontamos o melhor caminho. Fale com um advogado agora.</Reveal>
          <Reveal delay={160}>
            <a href="https://wa.me/5511976066281" className="adv-btn adv-btn--gold adv-btn--lg" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="adv-foot">
        <div className="adv-wrap adv-foot__in">
          <div>
            <span className="adv-logo">Carvalho <b>& Associados</b></span>
            <p className="adv-foot__desc">Advocacia especializada · OAB/SP 000.000 · Trabalhista, Família, Imobiliário e Consumidor.</p>
          </div>
          <div className="adv-foot__col">
            <p>São Paulo · SP</p>
            <p>(11) 9 0000-0000 · contato@carvalhoadv.com.br</p>
          </div>
        </div>
        <div className="adv-wrap adv-foot__copy">© {new Date().getFullYear()} Carvalho & Associados · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
