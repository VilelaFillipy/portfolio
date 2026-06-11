import { useState } from 'react'
import DemoIcon from './_shared/DemoIcon'
import { Reveal, Counter } from './_shared/anim'
import './OficinaDemo.css'

const servicos = [
  { i: 'wrench', t: 'Revisão Completa', d: 'Troca de óleo, filtros, velas e correia dentada com peças originais.' },
  { i: 'bolt', t: 'Elétrica e Injeção', d: 'Diagnóstico eletrônico computadorizado e reparo de falhas elétricas.' },
  { i: 'ruler', t: 'Suspensão e Freios', d: 'Alinhamento, balanceamento, pastilhas, discos e amortecedores.' },
  { i: 'building', t: 'Ar-Condicionado', d: 'Recarga, limpeza do sistema e reparo de compressor automotivo.' },
]

const diferenciais = [
  { t: 'Diagnóstico grátis', d: 'Escaneamos seu veículo sem custo antes de qualquer serviço.' },
  { t: 'Peças com nota fiscal', d: 'Trabalhamos somente com peças originais ou de primeira linha.' },
  { t: 'Garantia de 90 dias', d: 'Todos os serviços têm garantia real, por escrito.' },
  { t: 'Entrega no prazo', d: 'Seu carro pronto no horário combinado, sem surpresas.' },
]

const processo = [
  { t: 'Check-in', d: 'Você traz o carro e fazemos um diagnóstico eletrônico gratuito.' },
  { t: 'Orçamento', d: 'Aprovação transparente com valor fixo antes de começar.' },
  { t: 'Execução', d: 'Mecânicos certificados trabalham com agilidade e cuidado.' },
  { t: 'Entrega', d: 'Carro revisado, limpo e com relatório do serviço realizado.' },
]

const depoimentos = [
  { n: 'Carlos Mendes', c: 'Cliente há 3 anos · Mogi das Cruzes', t: 'Melhor oficina da região. Diagnóstico rápido, preço justo e carro entregue no prazo. Não levo meu carro em outro lugar.' },
  { n: 'Patrícia Lima', c: 'Honda Civic · Suzano', t: 'Precisei de uma revisão urgente e me atenderam no mesmo dia. Profissionalismo do início ao fim.' },
]

const faq = [
  { q: 'Vocês fazem revisão de qualquer marca?', a: 'Sim, atendemos todas as marcas e modelos de veículos nacionais e importados.' },
  { q: 'O diagnóstico eletrônico é mesmo gratuito?', a: 'Sim. Fazemos o escaneamento sem custo para identificar as falhas antes de qualquer orçamento.' },
  { q: 'Consigo levar sem agendamento?', a: 'Sim, mas com agendamento garantimos prioridade e tempo de espera menor.' },
  { q: 'Quais formas de pagamento vocês aceitam?', a: 'Aceitamos dinheiro, PIX, cartão de débito e crédito em até 10x sem juros.' },
]

export default function OficinaDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="ofc">
      <header className="ofc-nav">
        <div className="ofc-nav__in">
          <a href="#topo" className="ofc-logo">
            <span className="ofc-logo__icon"><DemoIcon name="wrench" size={18} /></span>
            Speed<b>Car</b>
          </a>
          <nav>
            <a href="#servicos">Serviços</a>
            <a href="#processo">Como funciona</a>
            <a href="#contato" className="ofc-nav__cta">Agendar</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="ofc-hero">
        <div className="ofc-hero__bg" />
        <div className="ofc-wrap ofc-hero__in">
          <div className="ofc-hero__txt">
            <Reveal as="span" className="ofc-badge">
              <span className="ofc-badge__dot" /> Atendimento rápido · Mogi das Cruzes
            </Reveal>
            <Reveal as="h1" delay={80}>
              Seu carro nas mãos de quem entende
            </Reveal>
            <Reveal as="p" delay={160}>
              Revisão, elétrica, freios e suspensão com diagnóstico eletrônico gratuito,
              peças originais e garantia de 90 dias em todos os serviços.
            </Reveal>
            <Reveal className="ofc-hero__actions" delay={240}>
              <a href="https://wa.me/5511976066281" className="ofc-btn" target="_blank" rel="noopener noreferrer">
                Agendar pelo WhatsApp
              </a>
              <a href="#servicos" className="ofc-btn ofc-btn--outline">Ver serviços</a>
            </Reveal>
            <Reveal className="ofc-hero__stats" delay={320}>
              <div><strong><Counter to={4800} prefix="+" /></strong><span>carros revisados</span></div>
              <div><strong><Counter to={12} suffix=" anos" /></strong><span>de experiência</span></div>
              <div><strong><Counter to={4} suffix=",9 ★" /></strong><span>no Google</span></div>
            </Reveal>
          </div>
          <Reveal className="ofc-hero__img" from="left">
            <img src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80" alt="Mecânico trabalhando no motor" loading="eager" />
            <div className="ofc-hero__tag">
              <strong>Diagnóstico eletrônico</strong>
              <span>gratuito na 1ª visita</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="ofc-sec">
        <div className="ofc-wrap">
          <Reveal as="p" className="ofc-kicker">Nossos serviços</Reveal>
          <Reveal as="h2" className="ofc-h2" delay={60}>Tudo que seu carro precisa em um só lugar</Reveal>
          <div className="ofc-grid">
            {servicos.map((s, i) => (
              <Reveal key={s.t} className="ofc-card" delay={i * 80}>
                <span className="ofc-card__icon"><DemoIcon name={s.i} size={24} /></span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUE — AGENDAMENTO */}
      <section className="ofc-agenda">
        <div className="ofc-wrap ofc-agenda__in">
          <Reveal className="ofc-agenda__txt" from="right">
            <p className="ofc-kicker ofc-kicker--light">Agendamento fácil</p>
            <h2 className="ofc-h2 ofc-h2--light">Sem fila de espera, sem surpresa no preço</h2>
            <p>
              Agende pelo WhatsApp em menos de 2 minutos. Receba confirmação imediata,
              orçamento antes de começar e laudo com fotos ao terminar.
            </p>
            <ul className="ofc-agenda__list">
              <li>Confirmação por mensagem</li>
              <li>Orçamento aprovado por você antes de qualquer serviço</li>
              <li>Laudo fotográfico do serviço executado</li>
            </ul>
            <a href="https://wa.me/5511976066281" className="ofc-btn ofc-btn--white" target="_blank" rel="noopener noreferrer">
              Agendar agora →
            </a>
          </Reveal>
          <Reveal className="ofc-agenda__img" from="left" delay={120}>
            <img src="https://images.unsplash.com/photo-1632823471406-4c5c7e4f5b5d?w=800&q=80" alt="Mecânico em diagnóstico eletrônico" loading="lazy" />
            <div className="ofc-agenda__badge">
              <strong>90 dias</strong>
              <span>de garantia</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="ofc-sec ofc-sec--alt">
        <div className="ofc-wrap">
          <Reveal as="p" className="ofc-kicker">Como funciona</Reveal>
          <Reveal as="h2" className="ofc-h2" delay={60}>Do diagnóstico à entrega</Reveal>
          <div className="ofc-steps">
            {processo.map((p, i) => (
              <Reveal key={p.t} className="ofc-step" delay={i * 90}>
                <span className="ofc-step__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="ofc-sec">
        <div className="ofc-wrap">
          <Reveal as="p" className="ofc-kicker">Por que a SpeedCar</Reveal>
          <Reveal as="h2" className="ofc-h2" delay={60}>Confiança que você pode cobrar</Reveal>
          <div className="ofc-difs">
            {diferenciais.map((d, i) => (
              <Reveal key={d.t} className="ofc-dif" delay={(i % 2) * 70}>
                <span className="ofc-dif__check">✓</span>
                <div><h3>{d.t}</h3><p>{d.d}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="ofc-sec ofc-sec--alt">
        <div className="ofc-wrap">
          <Reveal as="p" className="ofc-kicker">Clientes</Reveal>
          <Reveal as="h2" className="ofc-h2" delay={60}>Quem já confia na SpeedCar</Reveal>
          <div className="ofc-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="ofc-dep" delay={i * 100}>
                <div className="ofc-dep__stars">★★★★★</div>
                <p>"{d.t}"</p>
                <div className="ofc-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ofc-sec">
        <div className="ofc-wrap ofc-faq">
          <Reveal className="ofc-faq__head" from="right">
            <p className="ofc-kicker">Dúvidas frequentes</p>
            <h2 className="ofc-h2">Perguntas comuns</h2>
          </Reveal>
          <Reveal className="ofc-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`ofc-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="ofc-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="ofc-faq__icn" />
                </button>
                <div className="ofc-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="ofc-cta">
        <div className="ofc-wrap ofc-cta__in">
          <Reveal as="h2">Pronto para agendar?</Reveal>
          <Reveal as="p" delay={80}>Diagnóstico gratuito e orçamento sem compromisso. Atendemos toda a região de Mogi e Suzano.</Reveal>
          <Reveal delay={160}>
            <a href="https://wa.me/5511976066281" className="ofc-btn ofc-btn--lg" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="ofc-foot">
        <div className="ofc-wrap ofc-foot__in">
          <div>
            <span className="ofc-logo">Speed<b>Car</b> Auto Center</span>
            <p className="ofc-foot__desc">Mecânica geral, elétrica e revisão completa com garantia.</p>
          </div>
          <div className="ofc-foot__col">
            <p>Mogi das Cruzes · SP</p>
            <p>(11) 9 0000-0000 · contato@speedcar.com.br</p>
          </div>
        </div>
        <div className="ofc-wrap ofc-foot__copy">© {new Date().getFullYear()} SpeedCar Auto Center · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
