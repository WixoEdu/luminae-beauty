import Image from 'next/image'
import PhotoNote from './PhotoNote'
import BrandBand from './BrandBand'
import styles from './SkinExpertiseSession.module.css'

const moments = [
  {
    code: '01 · Bienvenue',
    body: 'Recepción personal: Bonjour, bienvenue à La Clinique. Un espacio preparado para ti y una conversación sin prisa.',
    img: '/stats_01.jpg',
    alt: 'Recepción de La Clinique en Escazú',
    note: 'Charlotte saludando a una paciente en la recepción',
  },
  {
    code: '02 · Écouter & analyser',
    body: 'Escucho tu historia, revisamos rutina y necesidades; realizo un análisis estético para decidir prioridades.',
    img: '/about_main.jpg',
    alt: 'Mirada atenta durante el análisis de la piel',
    note: 'consulta real: mirada, manos y producto',
  },
  {
    code: '03 · Sur mesure',
    body: 'Diseño y ejecuto el protocolo del día; selecciono técnicas y activos según tu piel.',
    img: '/service_02.jpg',
    alt: 'Gota de sérum sobre la piel',
    note: 'textura de los activos y selección del cuidado',
  },
  {
    code: '04 · Le geste & le modelage',
    body: 'El gesto profesional y, cuando conviene, el modelage francés: trabajo manual sobre rostro y cuello, respetando confort y particularidades.',
    img: '/about_square.jpg',
    alt: 'Aplicación de un producto con pincel durante el tratamiento',
    note: 'primeros planos de las manos de Charlotte en movimiento',
  },
  {
    code: '05 · Le conseil',
    body: 'Terminamos con recomendaciones claras para casa, los productos que ya utilizas y la estrategia de continuidad.',
    img: '/owner.png',
    alt: 'Charlotte Dibon sonriendo',
    note: 'conversación final y plan de cuidado',
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
                <Image src={m.img} alt={m.alt} fill sizes="(max-width:900px) 70vw, 20vw" style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                <PhotoNote>{m.note}</PhotoNote>
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
