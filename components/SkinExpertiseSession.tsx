import PhotoSlot from './PhotoSlot'
import BrandBand from './BrandBand'
import styles from './SkinExpertiseSession.module.css'

const moments = [
  {
    code: '01 · Bienvenue',
    body: 'Recepción personal: Bonjour, bienvenue à La Clinique. Un espacio preparado para ti y una conversación sin prisa.',
    note: 'Charlotte saludando a una paciente en la recepción',
  },
  {
    code: '02 · Écouter & analyser',
    body: 'Escucho tu historia, revisamos rutina y necesidades; realizo un análisis estético para decidir prioridades.',
    note: 'Consulta real: mirada, manos y producto',
  },
  {
    code: '03 · Sur mesure',
    body: 'Diseño y ejecuto el protocolo del día; selecciono técnicas y activos según tu piel.',
    note: 'Textura de los activos y selección del cuidado',
  },
  {
    code: '04 · Le geste & le modelage',
    body: 'El gesto profesional y, cuando conviene, el modelage francés: trabajo manual sobre rostro y cuello, respetando confort y particularidades.',
    note: 'Primeros planos de las manos de Charlotte en movimiento',
  },
  {
    code: '05 · Le conseil',
    body: 'Terminamos con recomendaciones claras para casa, los productos que ya utilizas y la estrategia de continuidad.',
    note: 'Conversación final y plan de cuidado',
  },
]

export default function SkinExpertiseSession() {
  return (
    <>
    <section id="sesion" className={styles.section}>
      <div className="container">
        <p className={styles.eyebrow}>La sesión, explicada como experiencia</p>
        <h2 className={styles.heading}>Así se vive <em>Skin Expertise</em></h2>

        <div className={styles.grid}>
          {moments.map((m) => (
            <article key={m.code} className={styles.card}>
              <div className={styles.img}>
                <PhotoSlot label={m.note} />
              </div>
              <p className={styles.code}>{m.code}</p>
              <p className={styles.body}>{m.body}</p>
            </article>
          ))}
        </div>

      </div>
    </section>

    <BrandBand>
      Mis manos conocen los gestos. <em>Tu piel decide cuáles necesita.</em>
    </BrandBand>
    </>
  )
}
