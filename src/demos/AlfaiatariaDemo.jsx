import { useState } from 'react'
import { Reveal, Counter } from './_shared/anim'
import './AlfaiatariaDemo.css'

const servicos = [
  { num: '01', t: 'Terno Sob Medida', d: 'Cada terno é cortado e costurado exclusivamente para o seu corpo. Do linho ao cashmere — você escolhe o tecido, o caimento e cada detalhe.' },
  { num: '02', t: 'Camisa Personalizada', d: 'Gola, punho, tecido e monograma. Uma camisa que veste como uma segunda pele, feita apenas para você.' },
  { num: '03', t: 'Aluguel de Trajes', d: 'Ternos, smokings e fraque de alta qualidade para casamentos, formaturas e eventos especiais. Ajuste grátis incluso.' },
  { num: '04', t: 'Ajustes e Reformas', d: 'Passamos precisão ao seu traje favorito. Ombro, cintura, comprimento — ajustamos até ficar impecável.' },
]

const processo = [
  { t: 'Consulta', d: 'Visita à alfaiataria para conversar sobre o evento, preferências de estilo e escolha do tecido.' },
  { t: 'Medição', d: 'Tomamos mais de 20 medidas para garantir caimento perfeito em cada detalhe.' },
  { t: 'Prova', d: 'Uma prova intermediária para ajustes finos antes do acabamento final.' },
  { t: 'Entrega', d: 'Entrega com embalagem exclusiva. Ajuste final grátis em até 30 dias.' },
]

const depoimentos = [
  { n: 'Rafael Mendes', c: 'Terno para casamento · 2025', t: 'Casei no mês passado com um terno feito sob medida pela alfaiataria. Todos queriam saber onde eu tinha comprado. O caimento era absolutamente perfeito.' },
  { n: 'Dr. Henrique Lima', c: 'Cliente há 6 anos', t: 'Tenho mais de dez peças da alfaiataria e cada uma durou anos com aparência de nova. Custo-benefício incomparável quando você compra qualidade real.' },
]

const faq = [
  { q: 'Qual o prazo para um terno sob medida?', a: 'Em média 25 a 35 dias úteis para a confecção completa, com uma prova intermediária. Para datas especiais, recomendamos agendar com ao menos 60 dias de antecedência.' },
  { q: 'Vocês trabalham com aluguel para grupos?', a: 'Sim! Atendemos padrinhos, formandos e grupos corporativos. Quanto maior o grupo, mais vantajoso o pacote. Consulte-nos com antecedência.' },
  { q: 'É possível escolher o tecido?', a: 'Sim. Temos mais de 200 opções de tecidos nacionais e importados — lã, linho, algodão e cashmere. Você vê e toca as amostras pessoalmente.' },
  { q: 'Fazem ajustes em trajes comprados em outras lojas?', a: 'Sim. Realizamos ajustes em qualquer peça masculina: ombro, cintura, calça, comprimento de manga. Solicite avaliação presencial.' },
]

export default function AlfaiatariaDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="alf">
      <header className="alf-nav">
        <div className="alf-nav__in">
          <a href="#topo" className="alf-logo"><b>Veste</b>Arte</a>
          <nav>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato" className="alf-nav__cta">Agendar consulta</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="alf-hero">
        <div className="alf-hero__left">
          <Reveal as="span" className="alf-hero__eyebrow">
            Alfaiataria · Mogi das Cruzes · Desde 1998
          </Reveal>
          <Reveal as="h1" delay={80}>
            O traje que fala<br />antes de você
          </Reveal>
          <Reveal as="p" delay={160}>
            Alfaiataria sob medida e aluguel de trajes de alto padrão. Cada peça é cortada à mão
            para o seu corpo, com tecidos selecionados e acabamento que dura décadas.
          </Reveal>
          <Reveal className="alf-hero__actions" delay={240}>
            <a href="https://wa.me/5511976066281" className="alf-btn alf-btn--lg" target="_blank" rel="noopener noreferrer">
              Agendar consulta
            </a>
            <a href="#servicos" className="alf-btn alf-btn--ghost">Ver serviços</a>
          </Reveal>
          <Reveal className="alf-hero__stats" delay={320}>
            <div><strong><Counter to={27} suffix=" anos" /></strong><span>no mercado</span></div>
            <div><strong><Counter to={3200} suffix="+" /></strong><span>peças entregues</span></div>
            <div><strong><Counter to={200} suffix="+" /></strong><span>tecidos disponíveis</span></div>
          </Reveal>
        </div>
        <div className="alf-hero__right">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80" alt="Alfaiataria sob medida" loading="eager" />
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="alf-sec alf-sec--soft" style={{ padding: 0 }}>
        <div className="alf-wrap" style={{ paddingTop: '80px', paddingBottom: '48px' }}>
          <Reveal as="p" className="alf-kicker">O que fazemos</Reveal>
          <Reveal as="h2" className="alf-h2" delay={60}>Tradição e precisão em cada peça</Reveal>
        </div>
        <div className="alf-servicos">
          {servicos.map((s, i) => (
            <Reveal key={s.num} className="alf-servico" delay={i * 70}>
              <span className="alf-servico__num">{s.num}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESSO */}
      <section id="sobre" className="alf-sec">
        <div className="alf-wrap alf-processo">
          <Reveal className="alf-processo__img" from="right">
            <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&q=80" alt="Alfaiate trabalhando" />
          </Reveal>
          <Reveal className="alf-processo__txt" from="left" delay={120}>
            <p className="alf-kicker">Como funciona</p>
            <h2 className="alf-h2" style={{ marginBottom: 32 }}>Do tecido ao traje em 4 etapas</h2>
            <ol className="alf-steps">
              {processo.map((p, i) => (
                <li key={p.t} className="alf-step">
                  <span className="alf-step__num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="alf-step__txt">
                    <h3>{p.t}</h3>
                    <p>{p.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ALUGUEL */}
      <section className="alf-aluguel">
        <div className="alf-wrap alf-aluguel__in">
          <Reveal className="alf-aluguel__txt" from="right">
            <p className="alf-kicker alf-kicker--light">Aluguel de trajes</p>
            <h2 className="alf-h2 alf-h2--light" style={{ marginBottom: 18 }}>Elegância para o grande dia, sem comprar</h2>
            <p className="alf-aluguel__txt p">Para casamentos, formaturas, formaturas e eventos corporativos. Nossos trajes de aluguel são peças de alta costura conservadas com rigor e ajustadas ao seu corpo no dia da retirada.</p>
            <ul className="alf-aluguel__list">
              <li>Ternos, smokings, fraques e coletes</li>
              <li>Ajuste grátis incluso na locação</li>
              <li>Disponível para grupos de padrinhos</li>
              <li>Gravatas, lenços e acessórios à parte</li>
              <li>Retirada 2 dias antes do evento</li>
            </ul>
            <a href="https://wa.me/5511976066281" className="alf-btn" target="_blank" rel="noopener noreferrer">
              Ver disponibilidade
            </a>
          </Reveal>
          <Reveal className="alf-aluguel__img" from="left" delay={120}>
            <img src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=700&q=80" alt="Traje de aluguel" />
          </Reveal>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="alf-sec alf-sec--soft">
        <div className="alf-wrap">
          <Reveal as="p" className="alf-kicker">Depoimentos</Reveal>
          <Reveal as="h2" className="alf-h2" delay={60}>O que nossos clientes dizem</Reveal>
          <div className="alf-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="alf-dep" delay={i * 100}>
                <div className="alf-dep__stars">★★★★★</div>
                <p>"{d.t}"</p>
                <div className="alf-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="alf-sec">
        <div className="alf-wrap alf-faq">
          <Reveal className="alf-faq__head" from="right">
            <p className="alf-kicker">Dúvidas</p>
            <h2 className="alf-h2">Perguntas frequentes</h2>
          </Reveal>
          <Reveal className="alf-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`alf-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="alf-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="alf-faq__icn" />
                </button>
                <div className="alf-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="alf-cta">
        <div className="alf-wrap alf-cta__in">
          <Reveal as="h2">Seu próximo traje começa aqui</Reveal>
          <Reveal as="p" delay={80}>Agende uma consulta presencial e descubra o que um terno sob medida pode fazer pela sua imagem.</Reveal>
          <Reveal delay={160}>
            <a href="https://wa.me/5511976066281" className="alf-btn alf-btn--lg" target="_blank" rel="noopener noreferrer">
              Agendar consulta pelo WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="alf-foot">
        <div className="alf-wrap alf-foot__in">
          <div>
            <span className="alf-logo"><b>Veste</b>Arte</span>
            <p className="alf-foot__desc">Alfaiataria sob medida e aluguel de trajes · Mogi das Cruzes · Desde 1998.</p>
          </div>
          <div className="alf-foot__col">
            <p>Mogi das Cruzes · SP</p>
            <p>(11) 9 0000-0000 · contato@vestearte.com.br</p>
          </div>
        </div>
        <div className="alf-wrap alf-foot__copy">© {new Date().getFullYear()} VesteArte Alfaiataria · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
