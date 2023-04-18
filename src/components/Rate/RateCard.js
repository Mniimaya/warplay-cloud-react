import Button from '../../UI/Button'
import styles from './RateCard.module.scss'
function RateCard({title, price, period, services, beneficial}) {
  return (
    <li className={`${styles.rate__item} ${styles.rateCard} ${beneficial ? styles.rateCardBeneficial : ''}`}>
    <h3 className={styles.rateCardTitle}>{title}</h3>
    <span className={styles.rateCardPrice}>{price} р. &nbsp;- &nbsp;{period}</span>
    <ul className={styles.rateCardList}>
      <li className={styles.rateCardItem}>Доступно:
        <ul className={styles.rateCardListInner}>
            {services.map((item, index) => <li className={styles.rateCardItemInner} key={index}>{item}</li>)}
        </ul>
      </li>
    </ul>
    <Button children="Выбрать" className={`${styles.rateCard__buttonChoose} link`}/>
  </li>
  )
}

export default RateCard