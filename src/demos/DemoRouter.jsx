import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getRamo } from '../data/nichos'
import FloatingWhatsApp from './_shared/FloatingWhatsApp'
import './_shared/demo-base.css'

import MarcenariaDemo from './MarcenariaDemo'
import SerralheriaDemo from './SerralheriaDemo'
import MarmorariaDemo from './MarmorariaDemo'
import EmpreiteiraDemo from './EmpreiteiraDemo'
import InstalacoesDemo from './InstalacoesDemo'
import OficinaDemo from './OficinaDemo'
import FunilariaDemo from './FunilariaDemo'
import AutoEletricaDemo from './AutoEletricaDemo'
import PneusDemo from './PneusDemo'
import EsteticaDemo from './EsteticaDemo'
import OdontologiaDemo from './OdontologiaDemo'
import FisioterapiaDemo from './FisioterapiaDemo'
import ConsultorioDemo from './ConsultorioDemo'
import LarIdososDemo from './LarIdososDemo'
import PsicologiaDemo from './PsicologiaDemo'
import ContabilidadeDemo from './ContabilidadeDemo'
import AdvocaciaDemo from './AdvocaciaDemo'
import CorretorDemo from './CorretorDemo'
import DespachantesDemo from './DespachantesDemo'
import SegurosDemo from './SegurosDemo'
import ChacaraEventosDemo from './ChacaraEventosDemo'
import BuffetDemo from './BuffetDemo'
import FotografoDemo from './FotografoDemo'
import AlfaiatariaDemo from './AlfaiatariaDemo'

// Registro de slug -> componente de demo. Novas fases adicionam aqui.
const DEMOS = {
  marcenaria: MarcenariaDemo,
  serralheria: SerralheriaDemo,
  marmoraria: MarmorariaDemo,
  empreiteira: EmpreiteiraDemo,
  instalacoes: InstalacoesDemo,
  oficina: OficinaDemo,
  funilaria: FunilariaDemo,
  'auto-eletrica': AutoEletricaDemo,
  pneus: PneusDemo,
  'estetica-automotiva': EsteticaDemo,
  odontologia: OdontologiaDemo,
  fisioterapia: FisioterapiaDemo,
  'consultorio-medico': ConsultorioDemo,
  'lar-idosos': LarIdososDemo,
  psicologia: PsicologiaDemo,
  contabilidade: ContabilidadeDemo,
  advocacia: AdvocaciaDemo,
  'corretor-imoveis': CorretorDemo,
  despachante: DespachantesDemo,
  seguros: SegurosDemo,
  'chacara-eventos': ChacaraEventosDemo,
  buffet: BuffetDemo,
  fotografo: FotografoDemo,
  alfaiataria: AlfaiatariaDemo,
}

// Quando a demo é renderizada dentro de um iframe (preview da listagem de ramos),
// estamos em modo "preview": escondemos o botão flutuante de WhatsApp e travamos
// a rolagem para que o thumbnail mostre só o topo da página.
const isPreview = typeof window !== 'undefined' && window.self !== window.top

export default function DemoRouter() {
  const { ramo: slug } = useParams()
  const Demo = DEMOS[slug]
  const ramo = getRamo(slug)

  // As demos usam cursor normal (o cursor custom do portfólio fica desativado aqui).
  useEffect(() => {
    document.body.style.cursor = 'auto'
    if (isPreview) document.documentElement.classList.add('demo-preview')
    return () => {
      document.body.style.cursor = ''
      document.documentElement.classList.remove('demo-preview')
    }
  }, [])

  if (!Demo) return <Navigate to="/projetos" replace />

  return (
    <div className="demo-root">
      <Demo />
      {!isPreview && <FloatingWhatsApp ramo={ramo?.titulo} />}
    </div>
  )
}
