import { v4 as uuidv4 } from 'uuid';
import NavigationItem from './NavigationItem'
import styles from './Navigation.module.scss';

export default function Navigation() {

    const dataLink = [
        {
            context: 'Главная',
            dataName: '#main-container',
            key: uuidv4()
        },
        {
            context: 'Как это работает',
            dataName: '#manual-container',
            key: uuidv4()
        },
        {
            context: 'Цены',
            dataName: '#price-container',
            key: uuidv4()
        },
        {
            context: 'Открыть в браузере',
            dataName: '#browser-container',
            key: uuidv4()
        },
        {
            context: 'Тех поддержка',
            dataName: '#feedback-container',
            key: uuidv4()
        },
    ]
    return (
        <nav className={styles.header__navigation}>
            <ul className={`${styles.header__list} ${styles.navigation}`}>
                {dataLink.map((item) => <NavigationItem data-name={item.dataName} children={item.context} key={item.key} />)}
            </ul>
        </nav>
    )
}
