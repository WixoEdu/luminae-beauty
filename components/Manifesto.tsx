import styles from './Manifesto.module.css'

export default function Manifesto() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.quote}>
          Cuidarte no es cambiarte.<br />
          Es volver a <em>confiar en tu piel.</em>
        </p>
        <p className={styles.note}>No se trata de hacer más. Se trata de elegir mejor, y de tener a alguien de confianza a tu lado.</p>
      </div>
    </section>
  )
}
