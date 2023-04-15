import styeles from './NavigationItem.module.scss'

function NavigationItem({ dataName, className, children }) {
    return (
        <li className={styeles.header__item}>
            <a href="#" className={styeles.navigation__link} data-name={dataName}>{children}</a>
        </li>
    )
}

export default NavigationItem