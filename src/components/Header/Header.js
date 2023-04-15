import Logo from './Logo'
import styles from './Header.module.scss'
import Navigation from '../Navigation/Navigation'
import Button from '../../UI/Button'

function Header() {
    return (
        <header className={styles.header}>

            <div className={styles.header__container}>
                <Logo />
                <Navigation />
            </div>
            <Button className={styles.header__backMenu} type="button" ariaLabel="Назад.">
                {
                    <svg width="22" height="38" viewBox="0 0 22 38" fill="currentColor">
                        <use href="./img/sprite.svg#icon-arrow"></use>
                    </svg>
                }
            </Button>
        </header>
    )
}

export default Header