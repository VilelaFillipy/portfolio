import { useState } from 'react'
import { Reveal, Counter } from './_shared/anim'
import './FotografoDemo.css'

const portfolio = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', label: 'Casamento' },
  { src: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&q=80', label: 'Gestante' },
  { src: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80', label: 'Família' },
  { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80', label: 'Casamento' },
  { src: 'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=600&q=80', label: 'Book feminino' },
  { src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80', label: 'Newborn' },
]

const especialidades = [
  {
    t: 'Casamentos',
    sub: 'Do pedido ao baile',
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
  },
  {
    t: 'Família e Gestantes',
    sub: 'Momentos que ficam para sempre',
    src: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80',
  },
  {
    t: 'Books & Retratos',
    sub: 'Sua melhor versão',
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
  },
]

const processo = [
  { t: 'Contato', d: 'Conversa inicial pelo WhatsApp para entender seu estilo, data e expectativas.' },
  { t: 'Proposta', d: 'Enviamos proposta personalizada com pacote, cobertura, entregáveis e valores.' },
  { t: 'Sessão', d: 'No dia marcado, capturamos cada momento com direção de pose e atenção ao detalhe.' },
  { t: 'Entrega', d: 'Galeria online com edição completa em até 30 dias. Impressão disponível a pedido.' },
]

const depoimentos = [
  { n: 'Larissa & Bruno', c: 'Casamento · abril 2025', t: 'Cada foto conta uma história. O Lucas capturou exatamente o que queríamos — emoção, luz perfeita e momentos que nem percebemos que aconteceram. Álbum incrível.' },
  { n: 'Fernanda Alves', c: 'Book gestante · fev. 2025', t: 'Estava com vergonha de fazer o ensaio, mas ele me deixou tão à vontade que fluiu naturalmente. As fotos ficaram lindas. Guardo para sempre.' },
]

const faq = [
  { q: 'Qual o prazo de entrega das fotos?', a: 'Ensaios e books: até 15 dias úteis. Casamentos e eventos: até 30 dias. Entregamos galeria online com download em alta resolução.' },
  { q: 'Vocês fazem vídeo também?', a: 'Sim! Oferecemos cobertura em vídeo (highlights e filme completo) para casamentos e ensaios em pacotes combinados. Consulte disponibilidade.' },
  { q: 'Como funciona o pagamento?', a: 'Confirmamos a data com 40% de sinal. O restante é pago até 7 dias antes da sessão. Aceitamos Pix, cartão e transferência.' },
  { q: 'Preciso me preocupar com poses?', a: 'Não! Dou direção de pose durante toda a sessão. Meu trabalho é fazer você esquecer a câmera e ser você mesmo.' },
]

export default function FotografoDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="foto">
      <header className="foto-nav">
        <div className="foto-nav__in">
          <a href="#topo" className="foto-logo"><b>Lucas</b> Andrade</a>
          <nav>
            <a href="#portfolio">Portfólio</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato" className="foto-nav__cta">Reservar data</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="foto-hero">
        <div className="foto-hero__grid" aria-hidden="true">
          {portfolio.map((p) => (
            <img key={p.src} src={p.src} alt="" />
          ))}
        </div>
        <div className="foto-hero__overlay" />
        <div className="foto-hero__in">
          <Reveal as="span" className="foto-hero__badge">
            Fotógrafo profissional · Casamentos · Família · Books
          </Reveal>
          <Reveal as="h1" delay={80}>
            Fotografias que você vai <em>guardar para sempre</em>
          </Reveal>
          <Reveal as="p" delay={160}>
            Especialista em casamentos, ensaios de gestante, família e books. Mais de 500 sessões
            e uma abordagem que faz você esquecer a câmera.
          </Reveal>
          <Reveal className="foto-hero__actions" delay={240}>
            <a href="https://wa.me/5511976066281" className="foto-btn foto-btn--lg" target="_blank" rel="noopener noreferrer">
              Reservar minha data
            </a>
            <a href="#portfolio" className="foto-btn foto-btn--ghost">Ver portfólio</a>
          </Reveal>
          <Reveal className="foto-hero__stats" delay={320}>
            <div><strong><Counter to={500} suffix="+" /></strong><span>sessões realizadas</span></div>
            <div><strong><Counter to={8} suffix=" anos" /></strong><span>de experiência</span></div>
            <div><strong><Counter to={100} suffix="%" /></strong><span>clientes satisfeitos</span></div>
          </Reveal>
        </div>
      </section>

      {/* ESPECIALIDADES */}
      <section id="portfolio" className="foto-sec" style={{ padding: 0 }}>
        <div className="foto-espec">
          {especialidades.map((e, i) => (
            <Reveal key={e.t} className="foto-espec__item" delay={i * 80}>
              <img src={e.src} alt={e.t} />
              <div className="foto-espec__overlay" />
              <div className="foto-espec__txt">
                <h3>{e.t}</h3>
                <p>{e.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PORTFÓLIO GRID */}
      <section className="foto-sec foto-sec--card">
        <div className="foto-wrap">
          <Reveal as="p" className="foto-kicker">Galeria</Reveal>
          <Reveal as="h2" className="foto-h2" delay={60}>Um recorte do trabalho</Reveal>
          <Reveal as="p" className="foto-lead" delay={120}>
            Cada foto é uma história. Confira alguns momentos capturados nos últimos projetos.
          </Reveal>
          <div className="foto-grid">
            {portfolio.map((p, i) => (
              <Reveal key={p.src} className="foto-grid__item" delay={i * 60}>
                <img src={p.src} alt={p.label} />
                <div className="foto-grid__item__overlay">
                  <span className="foto-grid__item__label">{p.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="foto-sec">
        <div className="foto-wrap foto-about">
          <Reveal className="foto-about__img" from="right">
            <img src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=700&q=80" alt="Fotógrafo em ação" />
            <div className="foto-about__frame">
              <img src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=400&q=80" alt="Câmera" />
            </div>
          </Reveal>
          <Reveal className="foto-about__txt" from="left" delay={120}>
            <p className="foto-kicker">Sobre mim</p>
            <h2 className="foto-h2" style={{ marginBottom: 20 }}>Olá, sou o Lucas.</h2>
            <p>Comecei a fotografar profissionalmente em 2017 e desde então me especializei em registrar os momentos mais significativos da vida das pessoas — casamentos, nascimentos, gestantes e reuniões de família.</p>
            <p>Minha abordagem é discreta e natural. Prefiro fotos que acontecem a fotos forçadas. Por isso, antes de qualquer sessão, conversamos bastante para eu entender o que faz você ser você.</p>
            <p>Trabalho com câmeras Sony de alta sensibilidade que garantem qualidade mesmo com luz baixa — noites de casamento ou ambientes fechados ficam lindos.</p>
            <span className="foto-about__assinatura">Lucas Andrade</span>
          </Reveal>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="foto-sec" style={{ padding: 0 }}>
        <div className="foto-wrap" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div style={{ padding: '80px 0 40px' }}>
            <Reveal as="p" className="foto-kicker">Como funciona</Reveal>
            <Reveal as="h2" className="foto-h2" delay={60}>Do contato à entrega</Reveal>
          </div>
        </div>
        <div className="foto-steps">
          {processo.map((p, i) => (
            <Reveal key={p.t} className="foto-step" delay={i * 80}>
              <span className="foto-step__n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="foto-sec foto-sec--card">
        <div className="foto-wrap">
          <Reveal as="p" className="foto-kicker">Depoimentos</Reveal>
          <Reveal as="h2" className="foto-h2" delay={60}>O que dizem meus clientes</Reveal>
          <div className="foto-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="foto-dep" delay={i * 100}>
                <div className="foto-dep__stars">★★★★★</div>
                <p>"{d.t}"</p>
                <div className="foto-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="foto-sec">
        <div className="foto-wrap foto-faq">
          <Reveal className="foto-faq__head" from="right">
            <p className="foto-kicker">Dúvidas</p>
            <h2 className="foto-h2">Perguntas frequentes</h2>
          </Reveal>
          <Reveal className="foto-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`foto-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="foto-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="foto-faq__icn" />
                </button>
                <div className="foto-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="foto-cta">
        <div className="foto-wrap foto-cta__in">
          <Reveal as="h2">Sua data está disponível?</Reveal>
          <Reveal as="p" delay={80}>Agenda limitada — poucos horários disponíveis por mês. Me chame no WhatsApp e verifique agora.</Reveal>
          <Reveal delay={160}>
            <a href="https://wa.me/5511976066281" className="foto-btn foto-btn--lg" target="_blank" rel="noopener noreferrer">
              Verificar disponibilidade
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="foto-foot">
        <div className="foto-wrap foto-foot__in">
          <div>
            <span className="foto-logo"><b>Lucas</b> Andrade</span>
            <p className="foto-foot__desc">Fotógrafo profissional · Casamentos · Família · Books · Gestante</p>
          </div>
          <div className="foto-foot__col">
            <p>Mogi das Cruzes · SP e região</p>
            <p>contato@lucasandradefoto.com.br</p>
          </div>
        </div>
        <div className="foto-wrap foto-foot__copy">© {new Date().getFullYear()} Lucas Andrade Fotografia · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
