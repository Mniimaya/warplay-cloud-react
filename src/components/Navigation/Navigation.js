import { v4 as uuidv4 } from 'uuid';
import NavigationItem from './NavigationItem'
import styles from './Navigation.module.scss';

export default function Navigation() {

    const dataLink = [
        {
            name: 'Главная',
            dataName: '#main-container',
            key: uuidv4()
        },
        {
            name: 'Как это работает',
            dataName: '#manual-container',
            key: uuidv4()
        },
        {
            name: 'Цены',
            dataName: '#price-container',
            key: uuidv4()
        },
        {
            name: 'Открыть в браузере',
            dataName: '#browser-container',
            key: uuidv4()
        },
        {
            name: 'Тех поддержка',
            dataName: '#feedback-container',
            key: uuidv4()
        },
    ]
    return (
        <nav className={styles.header__navigation}>
            <ul className={`${styles.header__list} ${styles.navigation}`}>
                {dataLink.map((item) => <NavigationItem dataName={item.dataName} children={item.name} />)}
            </ul>
        </nav>
    )
}
