import styles from './Rate.module.scss'
import RateList from './RateList'
function Rate() {
  return (
    <section className={`${styles.rate} container`} id="price-container">
    <h2 className="visually-hidden">Тарифные планы облачного гейминга</h2>

    <div className={styles.rate__container}>
      <h2 className={`${styles.rate__title} title-partition`}>Гибкие тарифы</h2>
      <span className={`${styles.rate__subtitle} subtitle-partition`}>Доступные подписки</span>
    </div>
      <RateList className={styles.rate__list}/>
  </section>
  )
}

export default Rate
