import IntroSlider from "./IntroSlider/IntroSlider"
import Button from '../../UI/Button'
import styles from './Intro.module.scss'

function Intro() {
    return (
        <section className={styles.intro} id="main-container"> 
            <h1 className="visually-hidden">Сервис облачного гейминга для вашего досуга.</h1>

            <div className={styles.intro__card}>
                <div className={styles.overlay}></div>
                <IntroSlider />
               
                <a href="/#" className={styles.intro__logoLink}  aria-label="Логотип сайта облачного гейминга.">
                    <svg className="intro__logo" width="212" height="41" viewBox="0 0 212 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M77.32 27.52L79.816 23.776L82.288 27.52C82.504 27.832 82.84 28 83.224 28H85.432V11.2H82.624V23.8L81.208 21.664L80.728 20.968C80.296 20.296 79.312 20.296 78.88 20.968L78.4 21.664L76.984 23.8V11.2H74.2V28H76.384C76.768 28 77.104 27.832 77.32 27.52ZM95.3526 11.248C95.2806 11.224 95.1846 11.2 95.1126 11.2H88.9446C88.3206 11.2 87.8406 11.704 87.8406 12.328V28H90.6246V23.92C91.6566 23.704 92.5926 23.296 93.4326 22.744V28H96.2406V12.328C96.2406 11.8 95.8566 11.368 95.3526 11.248ZM90.6246 21.016V14.008H93.4326V18.808C92.7846 19.84 91.8006 20.632 90.6246 21.016ZM106.157 11.248C106.085 11.224 105.989 11.2 105.917 11.2H98.6453V28.024H101.429V23.92C102.293 23.752 103.085 23.416 103.829 23.008L104.237 23.776V28.024H107.045V23.776L105.773 21.4C106.277 20.824 106.709 20.2 107.045 19.528V12.328C107.021 11.8 106.661 11.368 106.157 11.248ZM101.429 14.008H104.237V18.808C103.589 19.84 102.605 20.632 101.429 21.016V14.008ZM116.962 11.248C116.89 11.224 116.794 11.2 116.722 11.2H110.554C109.93 11.2 109.45 11.704 109.45 12.328V28H112.234V23.92C113.266 23.704 114.202 23.296 115.042 22.744C116.242 21.952 117.202 20.824 117.826 19.528V12.328C117.826 11.8 117.466 11.368 116.962 11.248ZM112.234 21.016V14.008H115.042V18.808C114.394 19.84 113.41 20.632 112.234 21.016ZM123.039 11.2H120.255V26.896C120.255 27.52 120.735 28 121.359 28H128.631V25.216H123.039V11.2ZM138.571 11.248C138.499 11.224 138.403 11.2 138.331 11.2H132.163C131.539 11.2 131.059 11.704 131.059 12.328V28H133.843V23.92C134.875 23.704 135.811 23.296 136.651 22.744V28H139.459V12.328C139.459 11.8 139.075 11.368 138.571 11.248ZM133.843 21.016V14.008H136.651V18.808C136.003 19.84 135.019 20.632 133.843 21.016ZM149.064 11.2L146.256 16.816L143.448 11.2H140.664L144.864 19.6V28H147.648V19.6L151.848 11.2H149.064ZM153.067 25.216V28H154.747C155.347 28 155.851 27.52 155.851 26.896V25.216H153.067ZM163.862 25.216H161.054V14.008H163.862V16.864C165.062 16.432 166.07 15.544 166.646 14.416V12.328C166.646 11.704 166.166 11.2 165.542 11.2H158.27V28H165.542C166.166 28 166.646 27.52 166.646 26.896V19.792H163.862V25.216ZM171.859 11.2H169.075V26.896C169.075 27.52 169.555 28 170.179 28H177.451V25.216H171.859V11.2ZM179.88 12.328V26.896C179.88 27.52 180.36 28 180.984 28H187.152C187.776 28 188.256 27.52 188.256 26.896V12.328C188.256 11.704 187.776 11.2 187.152 11.2H180.984C180.36 11.2 179.88 11.704 179.88 12.328ZM185.472 25.216H182.664V14.008H185.472V25.216ZM196.276 11.2V25.216H193.468V11.2H190.684V26.896C190.684 27.52 191.164 28 191.788 28H197.956C198.58 28 199.06 27.52 199.06 26.896V11.2H196.276ZM201.489 11.2V28H208.761C209.385 28 209.865 27.52 209.865 26.896V12.328C209.865 11.704 209.385 11.2 208.761 11.2H201.489ZM207.081 25.216H204.273V14.008H207.081V25.216Z"
                            fill="#ECECEC" />
                        <path
                            d="M27.9148 24.0279H19.9117C19.8238 24.0279 19.744 24.0852 19.712 24.1671L12.1882 40.7048C12.1323 40.8523 12.2361 41.0079 12.3879 40.9997H35.4226C35.5744 40.9997 35.6702 40.8359 35.6223 40.6966L28.0985 24.1589C28.0745 24.0852 27.9946 24.0279 27.9148 24.0279Z"
                            fill="#ECECEC" />
                        <path
                            d="M12.2924 36.2899L18.8178 22.0538C18.8338 22.0129 18.8418 21.9637 18.8258 21.9146L9.38506 1.15026C9.32116 0.904527 8.96973 0.937291 8.96973 1.1994L11.893 36.2079C11.877 36.4373 12.2045 36.511 12.2924 36.2899Z"
                            fill="#ECECEC" />
                        <path
                            d="M0.591141 13.8382L6.74919 0.0936014C6.87699 -0.0866016 7.14056 0.0116907 7.13257 0.232849L10.3753 38.2721C10.3673 38.5014 10.0559 38.5669 9.96799 38.354L0.231722 16.9098C-0.17562 15.8941 -0.0398394 14.731 0.591141 13.8382Z"
                            fill="#E0E0E0" />
                        <path
                            d="M35.9342 36.2079L38.8575 1.19939C38.8575 0.945469 38.506 0.904514 38.4421 1.15024L29.0014 21.9145C28.9854 21.9637 28.9934 22.0128 29.0094 22.0538L35.5348 36.2898C35.6227 36.511 35.9502 36.4373 35.9342 36.2079Z"
                            fill="#ECECEC" />
                        <path
                            d="M47.5875 16.9099L37.8512 38.354C37.7633 38.5752 37.4518 38.5096 37.4438 38.2721L40.6866 0.232888C40.6786 0.0117295 40.9422 -0.0783717 41.07 0.0936402L47.236 13.8382C47.867 14.731 47.9948 15.8942 47.5875 16.9099Z"
                            fill="#E0E0E0" />
                    </svg>
                </a>
                <h1 className="visually-hidden">Сервис облачного гейминга.</h1>
                <span className={styles.intro__text}>Сервис облачного гейминга</span>
                <h2 className={styles.intro__slogan}>Преврати свое устройство в игровое</h2>
                <Button className={styles.intro__upgrade}  aria-label="Начать использовать облачный гейминг." children="upgrade"/>
                <Button className={styles.intro__menuToggle}  aria-label="Открыть меню." children={<span></span>}/>
                <div className={styles.intro__linkLine}></div>
            </div>
        </section>
    )
}

export default Intro