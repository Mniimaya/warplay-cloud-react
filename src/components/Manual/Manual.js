import styles from './Manual.module.scss'
import manualMobile from './images/manual-img-mobile@2x.png';
import manualTablet from './images/manual-img-tablet@2x.png';
import manualDesctop from './images/manual-img-desktop@2x.png';

function Manual() {
  return (
    <section className={`${styles.manual} container`} id="manual-container">
    <h2 className="visually-hidden">О работе сервиса</h2>

    <div className={styles.manual__container}>
      <div className={styles.manual__cardDescription}>
        <h2 className={`${styles.manual__titleCardDescription} title-partition`}>Облачный гейминг</h2>
        <span className={`${styles.manual__subtitleCardDescription} subtitle-partition`}>Как это работает</span>
        <p className={`${styles.manual__descriptionCard}`}>Наши сервера запускают игру, и передают вам картинку, которой вы можете
          управлять в реальном времени!</p>
          <div className={`${styles.manual__imgBox}`}>
            <picture>           
              <source src={manualDesctop} media="(min-width:1150px)"/>
              <source src={manualTablet} media="(min-width:768px)"/>
              <img className={styles.manual__imgCardDescription } src={manualMobile} width="337" height="197" alt="Изображение процесса работы облачного гейминга."/>
            </picture>
        </div>
        <p className={styles.manual__descriptionCharacteristic}>Приложение &thinsp;запустится на ПК с процессором от 1.5 GHz ,
          от&nbsp;1&nbsp;Gb RAM и доступом в&nbsp;интернет от 15 мбит/с &thinsp;на всех операционых системах Windows
          7, 8, 10 MacOS и Linux .</p>
        <a href="/#" className={`${styles.manual__downloadModule} link`}>Загрузить</a>
      </div>
      <div className={styles.manual__card}>
        <h2 className={`${styles.manual__title} title-partition`}>Быстрый старт</h2>
        <span className={`${styles.manual__subtitle} subtitle-partition`}>Начни играть</span>
        <ol className={styles.manual__list}>
          <li className={`${styles.manual__item} ${styles.manual__itemAccount}`}>Cоздайте аккаунт</li>
          <li className={`${styles.manual__item} ${styles.manual__itemDownload}`}>Cкачайте модуль</li>
          <li className={`${styles.manual__item} ${styles.manual__itemRate}`}>Выберите тариф </li>
          <li className={`${styles.manual__item} ${styles.manual__itemGame}`}>Начни играть</li>
        </ol>
        <a href="/#" className={`${styles.manual__link} link`} aria-label="Начать использовать облачный гейминг">Начать</a>
      </div>
    </div>
  </section>
  )
}

export default Manual