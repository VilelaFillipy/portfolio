import { useState } from 'react'
import { Reveal, Counter } from './_shared/anim'
import './MarcenariaDemo.css'

const servicos = [
  { t: 'Cozinhas Planejadas', d: 'Projetos sob medida que aproveitam cada centímetro com elegância e funcionalidade.', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80' },
  { t: 'Dormitórios e Closets', d: 'Guarda-roupas, painéis e closets desenhados para o seu jeito de viver.', img: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=700&q=80' },
  { t: 'Home Office', d: 'Estações de trabalho sofisticadas que unem conforto e produtividade.', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&q=80' },
  { t: 'Móveis Comerciais', d: 'Lojas, recepções e escritórios com acabamento que impressiona clientes.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80' },
]

const processo = [
  { n: '01', t: 'Conversa & Visita', d: 'Entendemos seu sonho, medimos o ambiente e ouvimos cada detalhe.' },
  { n: '02', t: 'Projeto 3D', d: 'Você visualiza o móvel em 3D realista antes de qualquer corte.' },
  { n: '03', t: 'Marcenaria', d: 'Fabricação artesanal com madeira nobre e precisão de máquina.' },
  { n: '04', t: 'Instalação', d: 'Montagem própria, limpeza e garantia de 5 anos por escrito.' },
]

const galeria = [
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80',
  'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
  'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80',
  'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
]

const depoimentos = [
  { n: 'Ana Paula', c: 'Mogi das Cruzes', t: 'Transformaram nossa cozinha em uma obra de arte. Cada detalhe é perfeito e o acabamento impecável.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80' },
  { n: 'Ricardo Mendes', c: 'Suzano', t: 'Profissionalismo do início ao fim. O projeto 3D foi idêntico ao resultado final. Recomendo de olhos fechados.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80' },
  { n: 'Juliana Costa', c: 'Poá', t: 'Meu closet ficou dos sonhos. Souberam aproveitar um espaço difícil como ninguém.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80' },
]

const faq = [
  { q: 'Qual o prazo médio de entrega?', a: 'Entre 25 e 40 dias após a aprovação do projeto, dependendo da complexidade.' },
  { q: 'Vocês fazem o projeto 3D antes?', a: 'Sim. Você aprova cada ambiente em 3D realista antes de iniciarmos a fabricação.' },
  { q: 'Que tipo de madeira utilizam?', a: 'Trabalhamos com MDF de alto padrão, madeira maciça e lâminas naturais certificadas.' },
  { q: 'Existe garantia?', a: 'Oferecemos 5 anos de garantia em estrutura e ferragens, com assistência própria.' },
]

export default function MarcenariaDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="mrc">
      <header className="mrc-nav">
        <div className="mrc-nav__in">
          <a href="#topo" className="mrc-logo">Madeira<span>&amp;</span>Arte</a>
          <nav className="mrc-nav__links">
            <a href="#servicos">Serviços</a>
            <a href="#processo">Como fazemos</a>
            <a href="#galeria">Projetos</a>
            <a href="#depoimentos">Clientes</a>
            <a href="#contato" className="mrc-nav__cta">Orçamento</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="mrc-hero">
        <div className="mrc-hero__overlay" />
        <div className="mrc-hero__in">
          <Reveal as="span" className="mrc-eyebrow">Marcenaria sob medida · desde 2006</Reveal>
          <Reveal as="h1" delay={80}>Móveis que contam a<br /><em>história</em> da sua casa</Reveal>
          <Reveal as="p" delay={160}>
            Projetamos e fabricamos móveis planejados de alto padrão, com madeira
            nobre selecionada e acabamento artesanal em cada detalhe.
          </Reveal>
          <Reveal className="mrc-hero__actions" delay={240}>
            <a href="#contato" className="mrc-btn mrc-btn--solid">Pedir orçamento</a>
            <a href="#galeria" className="mrc-btn mrc-btn--ghost">Ver projetos</a>
          </Reveal>
          <Reveal className="mrc-hero__stats" delay={320}>
            <div><strong><Counter to={1200} prefix="+" /></strong><span>projetos entregues</span></div>
            <div><strong><Counter to={18} /></strong><span>anos de marcenaria</span></div>
            <div><strong>100%</strong><span>sob medida</span></div>
          </Reveal>
        </div>
        <div className="mrc-hero__scroll">role para descobrir ↓</div>
      </section>

      {/* MARQUEE / selos */}
      <div className="mrc-strip">
        <div className="mrc-strip__in">
          {['MDF Premium', 'Madeira Maciça', 'Projeto 3D', 'Garantia 5 anos', 'Instalação Própria', 'Acabamento Artesanal'].map((x) => (
            <span key={x}>{x}<i>•</i></span>
          ))}
          {['MDF Premium', 'Madeira Maciça', 'Projeto 3D', 'Garantia 5 anos', 'Instalação Própria', 'Acabamento Artesanal'].map((x) => (
            <span key={x + '2'} aria-hidden="true">{x}<i>•</i></span>
          ))}
        </div>
      </div>

      {/* SERVIÇOS */}
      <section id="servicos" className="mrc-section">
        <div className="mrc-wrap">
          <Reveal as="p" className="mrc-kicker">O que fazemos</Reveal>
          <Reveal as="h2" className="mrc-title" delay={60}>Cada ambiente merece um projeto único</Reveal>
          <div className="mrc-serv">
            {servicos.map((s, i) => (
              <Reveal key={s.t} className="mrc-serv__card" delay={i * 90}>
                <div className="mrc-serv__img"><img src={s.img} alt={s.t} loading="lazy" /></div>
                <div className="mrc-serv__body">
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="mrc-section mrc-section--dark">
        <div className="mrc-wrap">
          <Reveal as="p" className="mrc-kicker">Nosso processo</Reveal>
          <Reveal as="h2" className="mrc-title" delay={60}>Do sonho à instalação, sem dor de cabeça</Reveal>
          <div className="mrc-steps">
            {processo.map((p, i) => (
              <Reveal key={p.n} className="mrc-step" delay={i * 90}>
                <span className="mrc-step__n">{p.n}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="mrc-section">
        <div className="mrc-wrap">
          <Reveal as="p" className="mrc-kicker">Portfólio</Reveal>
          <Reveal as="h2" className="mrc-title" delay={60}>Trabalhos que falam por nós</Reveal>
        </div>
        <div className="mrc-gal">
          {galeria.map((src, i) => (
            <Reveal key={i} className={`mrc-gal__item${i % 5 === 0 ? ' mrc-gal__item--big' : ''}`} delay={(i % 3) * 80} from="scale">
              <img src={src} alt={`Projeto de marcenaria ${i + 1}`} loading="lazy" />
              <span className="mrc-gal__tag">Projeto {String(i + 1).padStart(2, '0')}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SOBRE / CRAFT */}
      <section id="sobre" className="mrc-about">
        <div className="mrc-wrap mrc-about__in">
          <Reveal className="mrc-about__img" from="right">
            <img src="https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=900&q=80" alt="Marceneiro trabalhando" loading="lazy" />
            <div className="mrc-about__badge">
              <strong><Counter to={5} /></strong>
              <span>anos de garantia</span>
            </div>
          </Reveal>
          <Reveal className="mrc-about__txt" from="left" delay={120}>
            <p className="mrc-kicker">Nossa essência</p>
            <h2 className="mrc-title">Tradição artesanal,<br />tecnologia de ponta</h2>
            <p>
              Unimos o cuidado da marcenaria clássica com máquinas de precisão para
              entregar móveis impecáveis, no prazo combinado e com garantia real.
            </p>
            <ul className="mrc-check">
              <li>Madeira nobre certificada e sustentável</li>
              <li>Projeto 3D detalhado antes da fabricação</li>
              <li>Equipe de instalação própria e treinada</li>
              <li>Garantia de 5 anos em estrutura e ferragens</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="mrc-section mrc-section--cream">
        <div className="mrc-wrap">
          <Reveal as="p" className="mrc-kicker">Quem confiou</Reveal>
          <Reveal as="h2" className="mrc-title" delay={60}>Histórias de quem mobiliou com a gente</Reveal>
          <div className="mrc-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="mrc-dep" delay={i * 100}>
                <div className="mrc-dep__stars">★★★★★</div>
                <p className="mrc-dep__txt">“{d.t}”</p>
                <div className="mrc-dep__person">
                  <img src={d.img} alt={d.n} loading="lazy" />
                  <div>
                    <strong>{d.n}</strong>
                    <span>{d.c}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mrc-section">
        <div className="mrc-wrap mrc-faq">
          <Reveal className="mrc-faq__head" from="right">
            <p className="mrc-kicker">Dúvidas frequentes</p>
            <h2 className="mrc-title">Tudo o que você precisa saber</h2>
            <p className="mrc-faq__sub">Não achou sua dúvida? Fale com a gente no WhatsApp.</p>
          </Reveal>
          <Reveal className="mrc-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`mrc-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="mrc-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="mrc-faq__icn" />
                </button>
                <div className="mrc-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA / CONTATO */}
      <section id="contato" className="mrc-cta">
        <div className="mrc-cta__bg" />
        <div className="mrc-wrap mrc-cta__in">
          <Reveal from="up">
            <h2>Pronto para projetar o móvel dos seus sonhos?</h2>
            <p>Solicite um orçamento sem compromisso. Respondemos no mesmo dia.</p>
          </Reveal>
          <Reveal as="form" className="mrc-form" delay={120} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Seu nome" aria-label="Seu nome" />
            <input type="tel" placeholder="WhatsApp" aria-label="WhatsApp" />
            <select aria-label="Ambiente">
              <option>Cozinha</option>
              <option>Dormitório / Closet</option>
              <option>Home Office</option>
              <option>Comercial</option>
            </select>
            <button type="submit" className="mrc-btn mrc-btn--solid">Solicitar orçamento</button>
          </Reveal>
        </div>
      </section>

      <footer className="mrc-foot">
        <div className="mrc-wrap mrc-foot__in">
          <div>
            <span className="mrc-logo">Madeira<span>&amp;</span>Arte</span>
            <p className="mrc-foot__desc">Marcenaria sob medida de alto padrão, unindo tradição artesanal e tecnologia.</p>
          </div>
          <div className="mrc-foot__col">
            <h4>Contato</h4>
            <p>Mogi das Cruzes · SP</p>
            <p>(11) 9 0000-0000</p>
            <p>contato@madeiraearte.com.br</p>
          </div>
          <div className="mrc-foot__col">
            <h4>Atendimento</h4>
            <p>Seg a Sex · 8h às 18h</p>
            <p>Sáb · 9h às 13h</p>
          </div>
        </div>
        <div className="mrc-wrap mrc-foot__copy">© {new Date().getFullYear()} Madeira &amp; Arte · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
