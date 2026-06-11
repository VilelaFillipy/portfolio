import { useState } from 'react'
import { Reveal, Counter } from './_shared/anim'
import './CorretorDemo.css'

const servicos = [
  { t: 'Compra de Imóveis', d: 'Seleção personalizada com base no seu perfil, orçamento e localização desejada.' },
  { t: 'Venda e Avaliação', d: 'Avaliação gratuita de mercado e estratégia de venda para o maior preço possível.' },
  { t: 'Aluguel Residencial', d: 'Locação com toda a documentação cuidada, análise de inquilino e contratos.' },
  { t: 'Imóveis Comerciais', d: 'Salas, galpões e pontos comerciais para expansão ou instalação do seu negócio.' },
]

const diferenciais = [
  { t: 'CRECI ativo', d: 'Registro regularizado. Você negocia com segurança jurídica e profissional habilitado.' },
  { t: 'Carteira exclusiva', d: '+200 imóveis exclusivos que não aparecem em portais, só com a gente.' },
  { t: 'Financiamento facilitado', d: 'Parceria com os principais bancos para a melhor taxa do mercado.' },
  { t: 'Acompanhamento total', d: 'Da busca até a entrega das chaves, você não fica sozinho em nenhum momento.' },
]

const processo = [
  { t: 'Briefing', d: 'Entendemos o que você busca: localização, metragem, orçamento e prioridades.' },
  { t: 'Curadoria', d: 'Selecionamos os melhores imóveis com base no seu perfil, sem perda de tempo.' },
  { t: 'Visitas', d: 'Agendamos visitas presenciais ou virtuais com toda a documentação em mãos.' },
  { t: 'Fechamento', d: 'Cuidamos da proposta, negociação, contratos e registro em cartório.' },
]

const depoimentos = [
  { n: 'Juliana e Ricardo', c: 'Compradores · Mogi das Cruzes', t: 'Em 3 semanas o Paulo encontrou o apartamento dos nossos sonhos dentro do orçamento. Financiamento aprovado na primeira tentativa. Recomendo demais!' },
  { n: 'Sandro Ferreira', c: 'Venda · Suzano', t: 'Meu imóvel estava parado há 8 meses com outra imobiliária. Com o Paulo, vendi em 40 dias acima do preço que esperava. Estratégia diferente.' },
]

const faq = [
  { q: 'Qual o valor da comissão?', a: 'A comissão segue a tabela CRECI (entre 6% e 8% para venda). Para locação, equivale a um aluguel mensal. Tudo é acordado antes do início do trabalho.' },
  { q: 'Vocês auxiliam no financiamento?', a: 'Sim. Fazemos a simulação em 4 bancos diferentes e indicamos o de melhor taxa para o seu perfil. Sem custo adicional.' },
  { q: 'Quanto tempo demora para vender meu imóvel?', a: 'Com precificação correta e estratégia de divulgação, a maioria dos imóveis é vendida em 30 a 90 dias. Imóveis precificados acima do mercado podem demorar mais.' },
  { q: 'Vocês trabalham com imóveis em quais regiões?', a: 'Atuamos em Mogi das Cruzes, Suzano, Poá, Itaquaquecetuba e cidades do Alto Tietê. Consulte disponibilidade para outras regiões.' },
]

export default function CorretorDemo() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="cor">
      <header className="cor-nav">
        <div className="cor-nav__in">
          <a href="#topo" className="cor-logo"><b>Paulo</b> Imóveis</a>
          <nav>
            <a href="#servicos">Serviços</a>
            <a href="#processo">Como funciona</a>
            <a href="#contato" className="cor-nav__cta">Falar com corretor</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="topo" className="cor-hero">
        <div className="cor-hero__bg" />
        <div className="cor-wrap cor-hero__in">
          <div className="cor-hero__txt">
            <Reveal as="span" className="cor-badge">
              <span className="cor-badge__dot" /> CRECI/SP 000000 · Corretor independente
            </Reveal>
            <Reveal as="h1" delay={80}>
              Encontre o imóvel certo.<br />Negocie com quem entende.
            </Reveal>
            <Reveal as="p" delay={160}>
              Compra, venda e locação de imóveis residenciais e comerciais em Mogi das Cruzes
              e região. Financiamento facilitado, sem burocracia.
            </Reveal>
            <Reveal className="cor-hero__actions" delay={240}>
              <a href="https://wa.me/5511976066281" className="cor-btn" target="_blank" rel="noopener noreferrer">
                Ver imóveis disponíveis
              </a>
              <a href="#servicos" className="cor-btn cor-btn--ghost">Saiba mais</a>
            </Reveal>
            <Reveal className="cor-hero__stats" delay={320}>
              <div><strong><Counter to={410} prefix="+" /></strong><span>negócios fechados</span></div>
              <div><strong><Counter to={12} suffix=" anos" /></strong><span>no mercado</span></div>
              <div><strong><Counter to={200} prefix="+" /></strong><span>imóveis exclusivos</span></div>
            </Reveal>
          </div>
          <Reveal className="cor-hero__img" from="left">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" alt="Corretor de imóveis" loading="eager" />
            <div className="cor-hero__avaliacao">
              <strong>Avaliação</strong>
              <span>gratuita do seu imóvel</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="cor-sec">
        <div className="cor-wrap">
          <Reveal as="p" className="cor-kicker">O que faço</Reveal>
          <Reveal as="h2" className="cor-h2" delay={60}>Do primeiro contato até as chaves na mão</Reveal>
          <div className="cor-grid">
            {servicos.map((s, i) => (
              <Reveal key={s.t} className="cor-card" delay={i * 80}>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <a href="https://wa.me/5511976066281" className="cor-card__cta" target="_blank" rel="noopener noreferrer">Consultar →</a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUE CARTEIRA */}
      <section className="cor-vitrine">
        <div className="cor-wrap cor-vitrine__in">
          <Reveal className="cor-vitrine__txt" from="right">
            <p className="cor-kicker cor-kicker--light">Imóveis exclusivos</p>
            <h2 className="cor-h2 cor-h2--light">+200 imóveis que você não acha nos portais</h2>
            <p>Minha carteira exclusiva inclui imóveis antes mesmo de irem ao mercado. Garanta condições especiais negociadas diretamente com o proprietário.</p>
            <ul className="cor-vitrine__list">
              <li>Apartamentos e casas em condomínio</li>
              <li>Terrenos e lotes em loteamentos regulares</li>
              <li>Salas comerciais e galpões logísticos</li>
              <li>Imóveis abaixo do mercado por venda rápida</li>
            </ul>
            <a href="https://wa.me/5511976066281" className="cor-btn cor-btn--white" target="_blank" rel="noopener noreferrer">
              Consultar carteira
            </a>
          </Reveal>
          <Reveal className="cor-vitrine__imgs" from="left" delay={100}>
            <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80" alt="Casa disponível" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="cor-sec cor-sec--soft">
        <div className="cor-wrap">
          <Reveal as="p" className="cor-kicker">Passo a passo</Reveal>
          <Reveal as="h2" className="cor-h2" delay={60}>Simples, ágil e sem complicação</Reveal>
          <div className="cor-steps">
            {processo.map((p, i) => (
              <Reveal key={p.t} className="cor-step" delay={i * 90}>
                <span className="cor-step__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="cor-sec">
        <div className="cor-wrap">
          <Reveal as="p" className="cor-kicker">Diferenciais</Reveal>
          <Reveal as="h2" className="cor-h2" delay={60}>Por que trabalhar comigo</Reveal>
          <div className="cor-difs">
            {diferenciais.map((d, i) => (
              <Reveal key={d.t} className="cor-dif" delay={(i % 2) * 80}>
                <span className="cor-dif__icon">⌂</span>
                <div><h3>{d.t}</h3><p>{d.d}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="cor-sec cor-sec--soft">
        <div className="cor-wrap">
          <Reveal as="p" className="cor-kicker">Clientes</Reveal>
          <Reveal as="h2" className="cor-h2" delay={60}>Negócios que fazem história</Reveal>
          <div className="cor-deps">
            {depoimentos.map((d, i) => (
              <Reveal key={d.n} className="cor-dep" delay={i * 100}>
                <div className="cor-dep__stars">★★★★★</div>
                <p>"{d.t}"</p>
                <div className="cor-dep__who"><strong>{d.n}</strong><span>{d.c}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cor-sec">
        <div className="cor-wrap cor-faq">
          <Reveal className="cor-faq__head" from="right">
            <p className="cor-kicker">Dúvidas</p>
            <h2 className="cor-h2">Perguntas frequentes</h2>
          </Reveal>
          <Reveal className="cor-faq__list" from="left" delay={120}>
            {faq.map((f, i) => (
              <div key={i} className={`cor-faq__item${openFaq === i ? ' is-open' : ''}`}>
                <button className="cor-faq__q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  {f.q}<span className="cor-faq__icn" />
                </button>
                <div className="cor-faq__a"><p>{f.a}</p></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="cor-cta">
        <div className="cor-wrap cor-cta__in">
          <Reveal as="h2">Pronto para encontrar o seu imóvel?</Reveal>
          <Reveal as="p" delay={80}>Avaliação gratuita, carteira exclusiva e acompanhamento completo. Fale agora.</Reveal>
          <Reveal delay={160}>
            <a href="https://wa.me/5511976066281" className="cor-btn cor-btn--white cor-btn--lg" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="cor-foot">
        <div className="cor-wrap cor-foot__in">
          <div>
            <span className="cor-logo"><b>Paulo</b> Imóveis</span>
            <p className="cor-foot__desc">Corretor independente · CRECI/SP 000000 · Compra, venda e locação em Mogi das Cruzes e região.</p>
          </div>
          <div className="cor-foot__col">
            <p>Mogi das Cruzes · SP</p>
            <p>(11) 9 0000-0000 · paulo@pauloimoveis.com.br</p>
          </div>
        </div>
        <div className="cor-wrap cor-foot__copy">© {new Date().getFullYear()} Paulo Imóveis · Todos os direitos reservados · Site por Fillipy</div>
      </footer>
    </div>
  )
}
