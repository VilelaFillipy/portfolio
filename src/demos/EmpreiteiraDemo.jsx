import { useState } from 'react'
import DemoIcon from './_shared/DemoIcon'
import { Reveal, Counter } from './_shared/anim'
import './EmpreiteiraDemo.css'

const servicos = [
  { i: 'building', t: 'Construção', d: 'Obras residenciais e comerciais do alicerce à entrega das chaves.' },
  { i: 'wrench', t: 'Reformas', d: 'Reformas completas ou parciais com planejamento e prazo garantido.' },
  { i: 'ruler', t: 'Projetos', d: 'Projeto arquitetônico, estrutural e aprovação na prefeitura.' },
  { i: 'brick', t: 'Acabamentos', d: 'Pisos, pintura, gesso e revestimentos com mão de obra qualificada.' },
]

const etapas = [
  { n: '1', t: 'Orçamento', d: 'Visita técnica e proposta detalhada em até 48h.' },
  { n: '2', t: 'Planejamento', d: 'Cronograma claro com datas e custos definidos.' },
  { n: '3', t: 'Execução', d: 'Equipe própria e acompanhamento diário da obra.' },
  { n: '4', t: 'Entrega', d: 'Vistoria final, limpeza e garantia por escrito.' },
]

const obras = [
  { img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80', t: 'Residência Alto Padrão', l: 'Mogi das Cruzes' },
  { img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80', t: 'Reforma Comercial', l: 'Suzano' },
  { img: 'https://images.unsplash.com/photo-1590725140246-20acdee442be?w=800&q=80', t: 'Edifício Residencial', l: 'Poá' },
]

const diferenciais = [
  { t: 'Preço fechado', d: 'Sem surpresas no fim da obra — você sabe o custo total antes de começar.' },
  { t: 'Equipe própria', d: 'Pedreiros, eletricistas e encanadores da casa, sem terceirização solta.' },
  { t: 'Acompanhamento', d: 'Relatórios e fotos do andamento direto no seu WhatsApp.' },
  { t: 'Garantia escrita', d: '5 anos de garantia estrutural em contrato.' },
]

const depoimentos = [
  { n: 'Paulo Henrique', c: 'Casa em Mogi', t: 'Obra entregue no prazo e dentro do orçamento. Acompanhei tudo pelo WhatsApp. Recomendo!' },
  { n: 'Sandra & Família', c: 'Reforma completa', t: 'Reformaram nossa casa inteira sem dor de cabeça. Equipe educada e caprichosa.' },
]

const faq = [
  { q: 'O orçamento é gratuito?', a: 'Sim. Fazemos visita técnica e enviamos proposta detalhada sem custo.' },
  { q: 'Vocês fornecem o material?', a: 'Trabalhamos das duas formas: com material por nossa conta ou só mão de obra.' },
  { q: 'Tem contrato e garantia?', a: 'Sim, contrato com cronograma, custos e 5 anos de garantia estrutural.' },
  { q: 'Quanto tempo demora uma reforma?', a: 'Depende do escopo, mas você recebe o cronograma com datas antes de iniciar.' },
]

export default function EmpreiteiraDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="emp">
      <header className="emp-nav">
        <div className="emp-nav__in">
          <a href="#topo" className="emp-logo"><span className="emp-logo__mark" /> CONSTRU<b>BASE</b></a>
          <nav>
            <a href="#serv">Serviços</a>
            <a href="#como">Processo</a>
            <a href="#obras">Obras</a>
            <a href="#contato" className="emp-nav__cta">Orçamento grátis</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="emp-hero">
        <div className="emp-hero__overlay" />
        <div className="emp-hero__in">
          <Reveal as="span" className="emp-badge"><span className="emp-badge__dot" /> Obras com prazo e preço fechado</Reveal>
          <Reveal as="h1" delay={80}>Sua obra do início ao fim, sem dor de cabeça</Reveal>
          <Reveal as="p" delay={160}>
            Construção e reforma com equipe própria, cronograma transparente e
            orçamento detalhado. Você acompanha cada etapa.
          </Reveal>
          <Reveal className="emp-hero__actions" delay={240}>
            <a href="#contato" className="emp-btn">Pedir orçamento grátis</a>
            <a href="#como" className="emp-btn emp-btn--ghost">Como trabalhamos</a>
          </Reveal>
        </div>
        <div className="emp-hero__strip">
          <Reveal className="emp-hero__stat"><strong><Counter to={350} prefix="+" /></strong><span>obras concluídas</span></Reveal>
          <Reveal className="emp-hero__stat" delay={80}><strong><Counter to={15} suffix=" anos" /></strong><span>de mercado</span></Reveal>
          <Reveal className="emp-hero__stat" delay={160}><strong><Counter to={100} suffix="%" /></strong><span>no prazo</span></Reveal>
          <Reveal className="emp-hero__stat" delay={240}><strong><Counter to={5} suffix=" anos" /></strong><span>de garantia</span></Reveal>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="serv" className="emp-sec">
        <div className="emp-wrap">
          <Reveal as="p" className="emp-kicker">Nossos serviços</Reveal>
          <Reveal as="h2" className="emp-h2" delay={60}>Tudo o que sua obra precisa</Reveal>
          <div className="emp-serv">
            {servicos.map((s, i) => (
              <Reveal key={s.t} className="emp-serv__card" delay={i * 80}>
                <span className="emp-serv__icon"><DemoIcon name={s.i} size={28} /></span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="emp-diff">
        <div className="emp-wrap emp-diff__in">
          <Reveal className="emp-diff__img" from="right">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=80" alt="Engenheiro em obra" loading="lazy" />
          </Reveal>
          <Reveal className="emp-diff__txt" from="left" delay={120}>
            <p className="emp-kicker">Por que a ConstruBase</p>
            <h2 className="emp-h2">Obra séria é obra<br />com transparência</h2>
            <div className="emp-diff__list">
              {diferenciais.map((d) => (
                <div key={d.t} className="emp-diff__item">
                  <span className="emp-diff__check">✓</span>
                  <div><strong>{d.t}</strong><p>{d.d}</p></div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="como" className="emp-how">
        <div className="emp-wrap">
          <Reveal as="p" className="emp-kicker emp-kicker--light">Processo</Reveal>
          <Reveal as="h2" className="emp-h2 emp-h2--light" delay={60}>Do orçamento à entrega em 4 etapas</Reveal>
          <div className="emp-steps">
            {etapas.map((e, i) => (
              <Reveal key={e.n} className="emp-step" delay={i * 90}>
                <span className="emp-step__n">{e.n}</span>
                <h3>{e.t}</h3>
                <p>{e.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OBRAS */}
      <section id="obras" className="emp-sec emp-sec--alt">
        <div className="emp-wrap">
          <Reveal as="p" className="emp-kicker">Obras entregues</Reveal>
          <Reveal as="h2" className="emp-h2" delay={60}>Projetos que viraram realidade</Reveal>
          <div className="emp-obras">
            {obras.map((o, i) => (
              <Reveal key={o.t} className="emp-obra" delay={i * 90} from="scale">
                <div className="emp-obra__img"><img src={o.img} alt={o.t} loading="lazy" /></div>
                <div className="emp-obra__cap">
                  <strong>{o.t}</strong>
                  <span>{o.l}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="emp-sec">
        <div className="emp-wrap">
          <Reveal as="p" className="emp-kicker">Clientes satisfeitos</Reveal>
          <Reveal as="h2" className="emp-h2" delay={60}>O que dizem sobre a gente</Reveal>
          <div className="emp-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="emp-dep" delay={i * 100}>
                <div className="emp-dep__stars">★★★★★</div>
                <p>{d.t}</p>
                <div className="emp-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="emp-sec emp-sec--alt">
        <div className="emp-wrap emp-faq">
          <Reveal className="emp-faq__head" from="right">
            <p className="emp-kicker">Dúvidas frequentes</p>
            <h2 className="emp-h2">Perguntas comuns</h2>
          </Reveal>
          <Reveal className="emp-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`emp-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="emp-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="emp-faq__icn" />
                </button>
                <div className="emp-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="emp-cta">
        <div className="emp-wrap emp-cta__in">
          <Reveal as="h2">Vamos tirar seu projeto do papel?</Reveal>
          <Reveal as="p" delay={100}>Orçamento gratuito e sem compromisso. Atendemos toda a região.</Reveal>
          <Reveal delay={180}><a href="#topo" className="emp-btn emp-btn--lg">Solicitar orçamento agora</a></Reveal>
        </div>
      </section>

      <footer className="emp-foot">
        <div className="emp-wrap emp-foot__in">
          <div>
            <span className="emp-logo">CONSTRU<b>BASE</b></span>
            <p className="emp-foot__desc">Empreiteira e construtora · obras e reformas com garantia.</p>
          </div>
          <div className="emp-foot__col">
            <p>Suzano · SP · CREA registrado</p>
            <p>(11) 9 0000-0000 · contato@construbase.com.br</p>
          </div>
        </div>
        <div className="emp-wrap emp-foot__copy">© {new Date().getFullYear()} ConstruBase · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
