import { useState } from 'react'
import { Reveal, Counter } from './_shared/anim'
import './ContabilidadeDemo.css'

const servicos = [
  { t: 'Abertura de Empresa', d: 'CNPJ, alvará e enquadramento tributário em até 5 dias úteis, sem burocracia.' },
  { t: 'Gestão Fiscal e Tributária', d: 'Apuração de impostos, obrigações acessórias e enquadramento no melhor regime.' },
  { t: 'Folha de Pagamento', d: 'Processamento de folha, pró-labore, FGTS e e-Social sem erros e no prazo.' },
  { t: 'BPO Financeiro', d: 'Terceirize o financeiro da sua empresa: contas a pagar/receber, DRE e fluxo de caixa.' },
]

const diferenciais = [
  { t: 'Contador dedicado', d: 'Você fala diretamente com seu contador, sem intermediários ou filas de atendimento.' },
  { t: 'Tudo digital', d: 'Documentos, assinaturas e relatórios 100% na nuvem, acessíveis de qualquer lugar.' },
  { t: 'Economia comprovada', d: 'Planejamento tributário que reduz legalmente a carga de impostos da sua empresa.' },
  { t: 'Prazos garantidos', d: 'Nenhuma obrigação entregue em atraso. Garantimos por contrato.' },
]

const processo = [
  { t: 'Diagnóstico gratuito', d: 'Analisamos a situação fiscal e tributária atual da sua empresa sem cobrar nada.' },
  { t: 'Proposta sob medida', d: 'Apresentamos um plano personalizado com escopo claro e preço fixo mensal.' },
  { t: 'Onboarding digital', d: 'Migração completa em até 7 dias, sem interromper as operações.' },
  { t: 'Parceria contínua', d: 'Reunião mensal de resultados e canal direto para dúvidas do dia a dia.' },
]

const depoimentos = [
  { n: 'Fernanda Oliveira', c: 'CEO · E-commerce de moda', t: 'Mudei para a ContaFácil e economizei R$ 1.800/mês no regime tributário. O diagnóstico gratuito valeu muito. Nunca mais tive susto com imposto.' },
  { n: 'Marcos Tadeu', c: 'Sócio · Transportadora', t: 'Minha folha de pagamento era um caos. Eles organizaram tudo, integraram ao e-Social e em 30 dias estava funcionando perfeitamente.' },
]

const faq = [
  { q: 'Minha empresa pode migrar a qualquer momento?', a: 'Sim. Realizamos a migração completa em até 7 dias úteis, com todo o histórico e documentação transferidos.' },
  { q: 'Quanto posso economizar com planejamento tributário?', a: 'Depende do faturamento e regime atual. Empresas que migraram do Lucro Presumido para o Simples economizaram entre 15% e 35% em carga tributária.' },
  { q: 'Vocês atendem empresas de qual porte?', a: 'Atendemos MEI, ME, EPP e médias empresas com faturamento de até R$ 78M/ano. Temos planos para cada perfil.' },
  { q: 'Como funciona o atendimento no dia a dia?', a: 'Via WhatsApp direto com seu contador. Para questões complexas, agendamos reunião online. Prazo de resposta: até 4 horas úteis.' },
]

export default function ContabilidadeDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="cnt">
      <header className="cnt-nav">
        <div className="cnt-nav__in">
          <a href="#topo" className="cnt-logo">Conta<b>Fácil</b></a>
          <nav>
            <a href="#servicos">Serviços</a>
            <a href="#processo">Como funciona</a>
            <a href="#contato" className="cnt-nav__cta">Diagnóstico grátis</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="cnt-hero">
        <div className="cnt-hero__bg" />
        <div className="cnt-wrap cnt-hero__in">
          <div className="cnt-hero__txt">
            <Reveal as="span" className="cnt-badge">
              <span className="cnt-badge__dot" /> CRC/SP 000000 · Contabilidade Digital
            </Reveal>
            <Reveal as="h1" delay={80}>
              Sua empresa mais lucrativa.<br />Com menos imposto e mais controle.
            </Reveal>
            <Reveal as="p" delay={160}>
              Escritório contábil 100% digital. Abertura de empresa, BPO financeiro e
              planejamento tributário para MEI, ME e médias empresas.
            </Reveal>
            <Reveal className="cnt-hero__actions" delay={240}>
              <a href="https://wa.me/5511976066281" className="cnt-btn" target="_blank" rel="noopener noreferrer">
                Diagnóstico gratuito
              </a>
              <a href="#servicos" className="cnt-btn cnt-btn--ghost">Ver serviços</a>
            </Reveal>
            <Reveal className="cnt-hero__stats" delay={320}>
              <div><strong><Counter to={380} prefix="+" /></strong><span>empresas atendidas</span></div>
              <div><strong><Counter to={18} suffix=" anos" /></strong><span>de experiência</span></div>
              <div><strong><Counter to={100} suffix="%" /></strong><span>no prazo</span></div>
            </Reveal>
          </div>
          <Reveal className="cnt-hero__img" from="left">
            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" alt="Contador em reunião" loading="eager" />
            <div className="cnt-hero__badge2">
              <strong>5 dias</strong>
              <span>para abrir sua empresa</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="cnt-sec">
        <div className="cnt-wrap">
          <Reveal as="p" className="cnt-kicker">O que fazemos</Reveal>
          <Reveal as="h2" className="cnt-h2" delay={60}>Contabilidade completa para o seu negócio</Reveal>
          <div className="cnt-grid">
            {servicos.map((s, i) => (
              <Reveal key={s.t} className="cnt-card" delay={i * 80}>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <a href="https://wa.me/5511976066281" className="cnt-card__cta" target="_blank" rel="noopener noreferrer">Saiba mais →</a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUE TRIBUTÁRIO */}
      <section className="cnt-tax">
        <div className="cnt-wrap cnt-tax__in">
          <Reveal className="cnt-tax__txt" from="right">
            <p className="cnt-kicker cnt-kicker--light">Planejamento Tributário</p>
            <h2 className="cnt-h2 cnt-h2--light">Você provavelmente está pagando imposto a mais</h2>
            <p>A maioria das PMEs está no regime tributário errado. Um planejamento correto pode reduzir legalmente sua carga fiscal em até 35%.</p>
            <ul className="cnt-tax__list">
              <li>Análise do regime atual (Simples, Presumido ou Real)</li>
              <li>Simulação comparativa dos três regimes</li>
              <li>Estratégias legais de elisão fiscal</li>
              <li>Revisão dos últimos 5 anos — possível restituição</li>
            </ul>
            <a href="https://wa.me/5511976066281" className="cnt-btn cnt-btn--white" target="_blank" rel="noopener noreferrer">
              Fazer diagnóstico agora
            </a>
          </Reveal>
          <Reveal className="cnt-tax__img" from="left" delay={100}>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Análise tributária" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="cnt-sec cnt-sec--soft">
        <div className="cnt-wrap">
          <Reveal as="p" className="cnt-kicker">Passo a passo</Reveal>
          <Reveal as="h2" className="cnt-h2" delay={60}>Simples de começar, fácil de continuar</Reveal>
          <div className="cnt-steps">
            {processo.map((p, i) => (
              <Reveal key={p.t} className="cnt-step" delay={i * 90}>
                <span className="cnt-step__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="cnt-sec">
        <div className="cnt-wrap">
          <Reveal as="p" className="cnt-kicker">Por que a ContaFácil</Reveal>
          <Reveal as="h2" className="cnt-h2" delay={60}>O escritório que trabalha para você crescer</Reveal>
          <div className="cnt-difs">
            {diferenciais.map((d, i) => (
              <Reveal key={d.t} className="cnt-dif" delay={(i % 2) * 80}>
                <span className="cnt-dif__icon">◆</span>
                <div><h3>{d.t}</h3><p>{d.d}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="cnt-sec cnt-sec--soft">
        <div className="cnt-wrap">
          <Reveal as="p" className="cnt-kicker">Clientes</Reveal>
          <Reveal as="h2" className="cnt-h2" delay={60}>Empresas que cresceram com a gente</Reveal>
          <div className="cnt-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="cnt-dep" delay={i * 100}>
                <div className="cnt-dep__stars">★★★★★</div>
                <p>"{d.t}"</p>
                <div className="cnt-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cnt-sec">
        <div className="cnt-wrap cnt-faq">
          <Reveal className="cnt-faq__head" from="right">
            <p className="cnt-kicker">Dúvidas</p>
            <h2 className="cnt-h2">Perguntas frequentes</h2>
          </Reveal>
          <Reveal className="cnt-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`cnt-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="cnt-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="cnt-faq__icn" />
                </button>
                <div className="cnt-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="cnt-cta">
        <div className="cnt-wrap cnt-cta__in">
          <Reveal as="h2">Diagnóstico gratuito para a sua empresa</Reveal>
          <Reveal as="p" delay={80}>Sem compromisso. Analisamos sua situação tributária e apresentamos o que pode ser economizado.</Reveal>
          <Reveal delay={160}>
            <a href="https://wa.me/5511976066281" className="cnt-btn cnt-btn--white cnt-btn--lg" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="cnt-foot">
        <div className="cnt-wrap cnt-foot__in">
          <div>
            <span className="cnt-logo">Conta<b>Fácil</b></span>
            <p className="cnt-foot__desc">Escritório contábil digital · CRC/SP 000000 · Abertura, BPO e planejamento tributário.</p>
          </div>
          <div className="cnt-foot__col">
            <p>São Paulo · SP</p>
            <p>(11) 9 0000-0000 · contato@contafacil.com.br</p>
          </div>
        </div>
        <div className="cnt-wrap cnt-foot__copy">© {new Date().getFullYear()} ContaFácil · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
