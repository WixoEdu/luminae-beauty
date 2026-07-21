'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import styles from './SkinQuizModal.module.css'

interface Props {
  isOpen: boolean
  onClose: () => void
}

type Option = { t: string; v: string; flag?: string; risk?: boolean }
type Question = { key: string; q: string; hint?: string; branch?: boolean; multi?: boolean; opts: Option[] }
type Profile = {
  name: string
  line: string
  insight: string
  focus: string
  skincare: string
  se: string[]
  med: string[]
  close: string
}
type Answers = Record<string, string | string[] | undefined>
type Screen = 'welcome' | 'question' | 'capture' | 'result'

const TOTAL = 11

/* ================= PREGUNTAS ================= */
const START: Question[] = [
  {
    key: 'fase', q: '¿En qué momento se encuentra?', hint: 'Nos ayuda a entender la fase de su piel.',
    opts: [
      { t: '25–30 · Quiero cuidarme desde temprano', v: '25' },
      { t: '31–40 · Empiezo a notar los primeros cambios', v: '31' },
      { t: '41–50 · Busco firmeza y definición', v: '41' },
      { t: '50+ · Quiero acompañar mi piel con plenitud', v: '50' },
    ],
  },
  {
    key: 'objetivo', q: 'Si pudiera trabajar una sola cosa hoy, ¿cuál sería?', hint: 'En la clínica veremos el conjunto — esto solo orienta su primer paso.',
    branch: true,
    opts: [
      { t: 'Luminosidad y calidad de mi piel', v: 'luminosidad' },
      { t: 'Arrugas y líneas de expresión', v: 'arrugas' },
      { t: 'Flacidez y pérdida de firmeza', v: 'flacidez' },
      { t: 'Manchas y tono desigual', v: 'manchas' },
    ],
  },
]

const TRACKS: Record<string, Question[]> = {
  luminosidad: [
    {
      key: 'l1', q: '¿Cómo describiría su piel hoy?',
      opts: [
        { t: 'Deshidratada, tirante', v: 'deshidratada' },
        { t: 'Grasa o mixta, con brillo', v: 'grasa' },
        { t: 'Sensible, se enrojece con facilidad', v: 'sensible' },
        { t: 'Apagada, sin luminosidad', v: 'apagada' },
        { t: 'Con poros visibles y textura irregular', v: 'textura' },
      ],
    },
    {
      key: 'l2', q: '¿Qué le gustaría recuperar más?',
      opts: [
        { t: 'Luz y buena cara', v: 'luz' },
        { t: 'Una piel más lisa y uniforme', v: 'textura' },
        { t: 'Hidratación y confort', v: 'hidratacion' },
        { t: 'Esa “vida” que mi piel tenía antes', v: 'vida' },
      ],
    },
  ],
  arrugas: [
    {
      key: 'a1', q: '¿Dónde las nota más?',
      opts: [
        { t: 'Entrecejo y frente', v: 'superior' },
        { t: 'Contorno de ojos (patas de gallo)', v: 'ojos' },
        { t: 'Alrededor de los labios (código de barras)', v: 'labios' },
        { t: 'Surcos a los lados de la boca', v: 'surcos' },
        { t: 'En varias zonas', v: 'varias' },
      ],
    },
    {
      key: 'a2', q: '¿Cuándo se marcan?',
      opts: [
        { t: 'Solo cuando gesticulo — al reír, al fruncir', v: 'dinamicas' },
        { t: 'También en reposo, ya están dibujadas', v: 'estaticas' },
        { t: 'No sabría decir', v: 'nd' },
      ],
    },
  ],
  flacidez: [
    {
      key: 'f1', q: '¿Dónde siente más la pérdida de firmeza?',
      opts: [
        { t: 'El óvalo y la línea de la mandíbula', v: 'ovalo' },
        { t: 'Mejillas y pómulos — siento que “cayeron”', v: 'mejillas' },
        { t: 'El cuello', v: 'cuello' },
        { t: 'La mirada / párpado más caído', v: 'mirada' },
        { t: 'La papada', v: 'papada' },
      ],
    },
    {
      key: 'f2', q: '¿Desde cuándo lo nota?',
      opts: [
        { t: 'Es un cambio bastante reciente', v: 'reciente' },
        { t: 'Ha sido progresivo en los últimos años', v: 'progresivo' },
        { t: 'Después de bajar de peso o un embarazo', v: 'peso' },
      ],
    },
  ],
  manchas: [
    {
      key: 'm1', q: '¿Qué tipo de manchas nota?',
      opts: [
        { t: 'Manchas de sol o de la edad', v: 'sol' },
        { t: 'Melasma o paño — hormonal o tras un embarazo', v: 'melasma' },
        { t: 'Marcas que dejan los granitos', v: 'acne' },
        { t: 'Un tono general desigual y apagado', v: 'tono' },
        { t: 'No estoy segura', v: 'nd' },
      ],
    },
    {
      key: 'm2', q: '¿Ha intentado tratarlas antes?',
      opts: [
        { t: 'No, sería mi primer intento', v: 'no' },
        { t: 'Con cremas, pero sin resultados claros', v: 'cremas' },
        { t: 'Con algún tratamiento, pero volvieron', v: 'volvieron' },
      ],
    },
  ],
}

const END: Question[] = [
  {
    key: 'rutina', q: '¿Cómo es su rutina de skincare hoy?', hint: 'No hay respuesta correcta — nos dice desde dónde partimos.', multi: true,
    opts: [
      { t: 'Me lavo la cara mañana y noche', v: 'limpieza' },
      { t: 'Uso crema de día', v: 'dia' },
      { t: 'Uso crema de noche', v: 'noche' },
      { t: 'Uso activos (retinol, vitamina C, ácidos…)', v: 'activos' },
      { t: 'Mi rutina es mínima o irregular', v: 'minima' },
    ],
  },
  {
    key: 'sol', q: '¿Cómo es su rutina de protección solar?', hint: 'En el trópico, este hábito lo cambia todo.',
    opts: [
      { t: 'Diaria, todo el año', v: 'diaria' },
      { t: 'Solo cuando hay sol o voy a la playa', v: 'parcial' },
      { t: 'Casi nunca, la verdad', v: 'nunca' },
    ],
  },
  {
    key: 'exp', q: '¿Ha realizado tratamientos estéticos antes?', hint: 'Faciales, estética o medicina estética — cualquiera cuenta.',
    opts: [
      { t: 'Nunca — sería mi primera vez', v: 'nueva', flag: 'nueva' },
      { t: 'Sí, faciales o tratamientos de estética', v: 'faciales' },
      { t: 'Sí, medicina estética (toxina, rellenos, bioestimuladores…)', v: 'medicina' },
      { t: 'Sí, ambos y con regularidad', v: 'ambos', flag: 'experta' },
    ],
  },
  {
    key: 'resultado', q: '¿Qué tipo de resultado busca?', hint: 'En La Clinique, lo natural no se negocia.',
    opts: [
      { t: 'Muy natural y sutil — que nadie note “qué me hice”', v: 'sutil', flag: 'sutil' },
      { t: 'Notable pero elegante, sin exageraciones', v: 'notable' },
      { t: 'Aún no lo sé, me gustaría que me orienten', v: 'orienten' },
    ],
  },
  {
    key: 'habitos', q: 'Sus hábitos de vida hoy (elija las que apliquen)', hint: 'La piel también se cuida desde adentro.', multi: true,
    opts: [
      { t: 'Duermo poco o descanso de forma irregular', v: 'sueno', risk: true },
      { t: 'Vivo con estrés o a un ritmo acelerado', v: 'estres', risk: true },
      { t: 'Fumo o consumo alcohol con frecuencia', v: 'toxicos', risk: true },
      { t: 'Cuido mi alimentación e hidratación', v: 'cuido' },
      { t: 'Hago ejercicio regularmente', v: 'ejercicio' },
    ],
  },
  {
    key: 'enfoque', q: '¿Cómo le gustaría trabajar su piel?', hint: 'En Skin Expertise trabajamos a la medida — hay mucho que lograr sin agujas.',
    opts: [
      { t: 'Lo más natural y no invasivo posible', v: 'conservador' },
      { t: 'Abierta a medicina estética (inyectables) si es lo indicado', v: 'medicina' },
      { t: 'Una combinación de ambos, según lo que mi piel necesite', v: 'ambos' },
      { t: 'No estoy segura — me gustaría que me orienten', v: 'orienten' },
    ],
  },
  {
    key: 'evento', q: '¿Hay una fecha o momento especial en mente?',
    opts: [
      { t: 'No — es un cuidado a largo plazo', v: 'no' },
      { t: 'Sí, tengo un evento en los próximos meses', v: 'evento', flag: 'evento' },
      { t: 'Quiero empezar cuanto antes', v: 'pronto' },
    ],
  },
]

/* ================= PERFILES ================= */
const profiles: Record<string, Profile> = {
  luminosidad: {
    name: 'Perfil Luminosidad & Calidad', line: 'Belleza de dentro hacia afuera',
    insight: 'La base de todo rostro cuidado es una piel sana, no un rostro “intervenido”. Aquí no le proponemos una lista de tratamientos, sino un acompañamiento a la medida para devolverle luz, textura y vitalidad a su piel.',
    focus: 'Un acompañamiento a su ritmo para trabajar la calidad y la luminosidad de su piel.',
    skincare: 'Empezamos por su rutina en casa — muchas veces el mayor cambio está en ajustar lo que ya usa',
    se: [
      'Un tratamiento a la medida en Skin Expertise: peelings, microneedling y activos (ADN de Salmón, exosomas, retinol) combinados con masaje facial (Kobido, relajante o detox), Gua Sha y mascarillas adaptadas',
      'Protocolos para reconstruir la barrera cutánea — hoy, la base de una piel luminosa',
    ],
    med: ['Si lo desea, se puede sumar bioestimulación para potenciar la calidad de piel desde el colágeno'],
    close: 'Un acompañamiento a su ritmo: una visita al mes para mantener, cada 15 días si busca algo más intensivo',
  },
  arrugas: {
    name: 'Perfil Expresión & Arrugas', line: 'Acompañar, no corregir de más',
    insight: 'Las líneas de expresión cuentan su historia — la idea no es borrarlas, sino suavizarlas con la mano más ligera posible, cuidando que su gesto siga siendo el suyo.',
    focus: 'Atenuar las líneas respetando su expresión natural, con acompañamiento en el tiempo.',
    skincare: 'Revisión de su skincare: sobre una buena base (retinol bien indicado, barrera cuidada) todo rinde más',
    se: [
      'Sin nada invasivo: en Skin Expertise trabajamos las arrugas con masaje facial de efecto lifting (Kobido), Gua Sha, activos y mascarillas a la medida',
      'Peelings y microneedling para acompañar la textura y suavizar las líneas',
    ],
    med: [
      'Neuromoduladores en dosis medidas para las líneas de expresión',
      'Si ya están marcadas en reposo, se valora sumar relleno fino o bioestimulación',
    ],
    close: 'Un acompañamiento revisado en el tiempo, no una intervención suelta',
  },
  flacidez: {
    name: 'Perfil Firmeza & Estructura', line: 'Devolver la arquitectura del rostro',
    insight: 'El óvalo pierde definición y el rostro se ve más cansado. No es cuestión de “rellenar”: es cuestión de restaurar los apoyos, con criterio y proporción.',
    focus: 'Recuperar firmeza y estructura de forma natural, con un plan progresivo y acompañado.',
    skincare: 'Revisión de su skincare para sostener y potenciar el resultado',
    se: [
      'Sin agujas: técnicas de masaje facial de efecto lifting (Kobido), Gua Sha y activos firmes, a la medida de su piel',
      'Peelings y microneedling para trabajar la calidad y la firmeza de la piel',
    ],
    med: [
      'Bioestimuladores (Radiesse) para firmeza desde el colágeno',
      'Rellenos de ácido hialurónico con criterio estructural, no volumétrico',
    ],
    close: 'Un plan progresivo y acompañado, a su ritmo',
  },
  manchas: {
    name: 'Perfil Manchas & Tono', line: 'Unificar, con paciencia y criterio',
    insight: 'Las manchas rara vez se resuelven con un solo gesto: piden constancia, protección y un protocolo bien elegido. Se trabajan desde la estética avanzada, no con inyectables. Hechas con criterio, los resultados son notables y duraderos.',
    focus: 'Renovar y unificar el tono de forma segura, tratando el origen de la mancha — con constancia y acompañamiento.',
    skincare: 'Revisión y ajuste de su skincare, con un home care despigmentante (clave en manchas)',
    se: [
      'Según el caso, Dermamelan o Cosmelan Journey, u opciones más progresivas en cabina',
      'Peelings y microneedling para renovar y unificar el tono, a la medida de su piel',
    ],
    med: [],
    close: 'Fotoprotección medicalizada — la base de todo tratamiento de manchas',
  },
}

function buildServices(p: Profile, enfoque: string | undefined): string[] {
  const out: string[] = [p.skincare]
  const med = p.med || []
  const se = p.se || []
  if (enfoque === 'conservador') {
    out.push(...se)
  } else if (enfoque === 'medicina') {
    out.push(...med, ...se)
  } else {
    out.push(...med, ...se.slice(0, med.length ? 1 : 2))
  }
  if (p.close) out.push(p.close)
  return out
}

function computeExtra(answers: Answers, key: string): string {
  let extra = ''
  const fase = answers.fase
  if (fase === '25') extra += 'Está en un momento ideal para prevenir: lo que haga hoy con constancia se notará durante años. '
  if (fase === '50') extra += 'A su edad, lo más elegante es un abordaje integral y sereno, diseñado a su ritmo. '

  if (key === 'arrugas' && answers.a2 === 'estaticas')
    extra += 'Como ya se marcan en reposo, es probable que combinemos el neuromodulador con calidad de piel o un relleno muy fino. '
  if (key === 'manchas' && answers.m1 === 'melasma')
    extra += 'El melasma pide un abordaje paciente y constante — nada de láseres agresivos sin criterio; se trabaja con protocolos seguros y protección rigurosa. '
  if (key === 'manchas' && answers.m1 === 'acne')
    extra += 'Para las marcas del acné, el microneedling y ciertos peelings suelen dar muy buenos resultados. '
  if (key === 'flacidez' && answers.f2 === 'peso')
    extra += 'Tras un cambio de peso o un embarazo, la bioestimulación de colágeno suele ser una gran aliada. '

  const rut = (answers.rutina as string[] | undefined) || []
  if (rut.includes('minima') || rut.length <= 1) extra += 'Su rutina en casa tiene mucho margen — a veces ordenar el skincare es el primer gran resultado. '
  if (rut.includes('activos')) extra += 'Como ya usa activos, afinaremos cuáles y cómo, sin acumular productos. '
  if (answers.enfoque === 'conservador') extra += 'Como prefiere lo no invasivo, priorizaremos el trabajo a la medida de Skin Expertise — mucho se logra sin agujas. '
  if (answers.enfoque === 'medicina') extra += 'Aun optando por medicina estética, la calidad de piel es la base de todo: la trabajaremos en paralelo con Skin Expertise. '
  if (answers.enfoque === 'orienten') extra += 'En la valoración veremos juntas qué combinación le conviene, sin comprometerla a nada. '
  if (answers.exp === 'nueva') extra += 'Como sería su primera vez, iremos paso a paso: aquí nada se decide sin antes escuchar su piel. '
  if (answers.exp === 'ambos') extra += 'Si ya cuida su piel con constancia, el objetivo será potenciar y afinar lo que ya viene haciendo. '
  if (answers.resultado === 'sutil') extra += 'Y tranquila: aquí lo natural nunca se negocia. '
  if (answers.sol === 'nunca' || answers.sol === 'parcial')
    extra += 'Reforzaremos también su fotoprotección — en Costa Rica, es la mitad del resultado. '
  const risks = ((answers.habitos as string[] | undefined) || []).filter(v => ['sueno', 'estres', 'toxicos'].includes(v)).length
  if (risks >= 2) extra += 'Notamos hábitos que también influyen en su piel; parte del plan será acompañarla desde adentro. '
  if (answers.evento === 'evento') extra += 'Con un evento en mente, lo ideal es planificar con tiempo — el slow aging luce mejor sin prisas. '

  return extra
}

export default function SkinQuizModal({ isOpen, onClose }: Props) {
  const [screen, setScreen]   = useState<Screen>('welcome')
  const [idx, setIdx]         = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [name, setName]           = useState('')
  const [whatsapp, setWhatsapp]   = useState('')
  const [email, setEmail]         = useState('')
  const [consent, setConsent]     = useState(false)

  const flow = useMemo<Question[]>(() => {
    const track = answers.objetivo as string | undefined
    return [...START, ...(track ? TRACKS[track] ?? [] : []), ...END]
  }, [answers.objetivo])

  useEffect(() => {
    if (!isOpen) return
    const handle = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    document.addEventListener('keydown', handle)
    return () => document.removeEventListener('keydown', handle)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const reset = useCallback(() => {
    setScreen('welcome')
    setIdx(0)
    setAnswers({})
    setName('')
    setWhatsapp('')
    setEmail('')
    setConsent(false)
  }, [])

  const handleClose = useCallback(() => {
    reset()
    onClose()
  }, [reset, onClose])

  const start = () => { setAnswers({}); setIdx(0); setScreen('question') }

  const goNext = () => {
    if (idx < TOTAL - 1) setIdx(idx + 1)
    else setScreen('capture')
  }

  const goBack = () => {
    if (idx === 0) setScreen('welcome')
    else setIdx(idx - 1)
  }

  const pick = (v: string) => {
    const Q = flow[idx]
    if (Q.multi) {
      setAnswers(prev => {
        const arr = (prev[Q.key] as string[] | undefined) ?? []
        const nextArr = arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v]
        return { ...prev, [Q.key]: nextArr }
      })
      return
    }
    const prevVal = answers[Q.key]
    const changedBranch = Boolean(Q.branch && prevVal && prevVal !== v)
    setAnswers(prev => {
      const next: Answers = { ...prev, [Q.key]: v }
      if (changedBranch) {
        Object.values(TRACKS).forEach(qs => qs.forEach(q => { delete next[q.key] }))
      }
      return next
    })
    setTimeout(goNext, 260)
  }

  const submitCapture = () => {
    const key = (answers.objetivo as string) || 'luminosidad'
    const p = profiles[key]
    fetch('/api/advisory', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone: whatsapp, goal: p.name }),
    }).catch(err => console.error('[skin-quiz] background save failed', err))
    setScreen('result')
  }

  if (!isOpen) return null

  const barPct = screen === 'welcome' ? 0 : screen === 'question' ? (idx / TOTAL) * 100 : 100

  const key = (answers.objetivo as string) || 'luminosidad'
  const p = profiles[key]
  const extra = computeExtra(answers, key)
  const hola = name.trim() ? `${name}, esta es su lectura.` : 'Esta es su lectura.'
  const waText = `Hola, soy ${name.trim() || 'una clienta'}. Completé mi análisis de piel en línea — mi perfil es "${p.name}". Me gustaría agendar mi valoración.`
  const waHref = `https://wa.me/50689700298?text=${encodeURIComponent(waText)}`

  return (
    <div className={styles.backdrop} onMouseDown={e => { if (e.target === e.currentTarget) handleClose() }}>
      <div className={styles.card} role="dialog" aria-modal="true" aria-label="Análisis de piel en línea">
        <button className={styles.closeBtn} onClick={handleClose} aria-label="Cerrar">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M2 2l12 12M14 2L2 14" />
          </svg>
        </button>

        <div className={styles.brand}>
          <div className={styles.brandName}>LA CLINIQUE</div>
          <div className={styles.brandTag}>THE ART OF SLOW AGING</div>
        </div>

        <div className={styles.progressTrack}>
          <span className={styles.progressFill} style={{ width: `${barPct}%` }} />
        </div>

        {screen === 'welcome' && (
          <div className={styles.step} key="welcome">
            <h1 className={styles.hero}>Su piel tiene una historia.<br />Empecemos a leerla.</h1>
            <p className={styles.lead}>Un breve análisis en línea para orientar su primer paso. En menos de dos minutos recibirá una primera lectura de su piel y el enfoque que mejor acompaña este momento.</p>
            <p className={`${styles.lead} ${styles.italic}`}>No reemplaza la valoración médica: la prepara.</p>
            <div className={styles.navEnd}>
              <button className={styles.btn} onClick={start}>Comenzar mi análisis</button>
            </div>
          </div>
        )}

        {screen === 'question' && (() => {
          const Q = flow[idx]
          const chosen = answers[Q.key] ?? (Q.multi ? [] : null)
          const canNext = Q.multi ? true : chosen !== null
          return (
            <div className={styles.step} key={`q-${idx}`}>
              <div className={styles.qnum}>PREGUNTA {idx + 1} DE {TOTAL}</div>
              <h2 className={styles.q}>{Q.q}</h2>
              <div className={styles.opts}>
                {Q.opts.map(o => {
                  const sel = Q.multi ? (chosen as string[]).includes(o.v) : chosen === o.v
                  return (
                    <button key={o.v} className={`${styles.opt} ${sel ? styles.sel : ''}`} onClick={() => pick(o.v)} type="button">
                      <span className={styles.dot} />
                      <span>{o.t}</span>
                    </button>
                  )
                })}
              </div>
              {Q.hint && <p className={styles.hint}>{Q.hint}</p>}
              <div className={styles.nav}>
                <button className={`${styles.btn} ${styles.ghost}`} onClick={goBack} type="button">
                  {idx === 0 ? '' : '← Atrás'}
                </button>
                <button className={styles.btn} disabled={!canNext} onClick={goNext} type="button">
                  {idx === TOTAL - 1 ? 'Continuar' : 'Siguiente'}
                </button>
              </div>
            </div>
          )
        })()}

        {screen === 'capture' && (
          <div className={styles.step} key="capture">
            <div className={styles.qnum}>CASI LISTO</div>
            <h2 className={styles.q}>¿A dónde le enviamos su lectura de piel?</h2>
            <p className={styles.lead} style={{ marginBottom: 22 }}>Preparamos su primera lectura personalizada. Déjenos cómo contactarla.</p>
            <div className={styles.field}>
              <label>Nombre</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Su nombre" />
            </div>
            <div className={styles.field}>
              <label>WhatsApp</label>
              <input type="tel" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} placeholder="Ej. 8888 8888" />
            </div>
            <div className={styles.field}>
              <label>Correo (opcional)</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="correo@ejemplo.com" />
            </div>
            <label className={styles.check}>
              <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} />
              Acepto que La Clinique me contacte para acompañar mi lectura de piel.
            </label>
            <button className={`${styles.btn} ${styles.full}`} onClick={submitCapture} type="button">Ver mi lectura de piel</button>
            <button className={`${styles.btn} ${styles.ghost}`} style={{ marginTop: 14 }} onClick={() => { setIdx(TOTAL - 1); setScreen('question') }} type="button">← Atrás</button>
          </div>
        )}

        {screen === 'result' && (
          <div className={styles.step} key="result">
            <div className={styles.rtag}>{hola}</div>
            <div className={styles.rname}>{p.name}</div>
            <div className={styles.rline}>{p.line}</div>
            <p className={styles.rinsight}>
              {p.insight}
              {extra && <><br /><br />{extra}</>}
            </p>
            <div className={styles.rbox}>
              <h3>El enfoque La Clinique</h3>
              <ul>
                {buildServices(p, answers.enfoque as string | undefined).map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
            <p className={styles.disc}>Esta es una primera lectura, no un diagnóstico. Su plan real nace de una valoración presencial y del criterio médico de La Clinique.</p>
            <a className={styles.cta} href={waHref} target="_blank" rel="noopener noreferrer">Agendar mi valoración por WhatsApp</a>
            <button className={styles.restart} onClick={reset} type="button">Volver a empezar</button>
          </div>
        )}
      </div>
    </div>
  )
}
