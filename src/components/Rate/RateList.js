import { v4 as uuidv4 } from 'uuid';
import RateCard from "./RateCard"

function RateList({className}) {

    const cardData = [
        {
            title: 'Почасовая оплата',
            price: 45,
            period: 'час',
            services: ['Каталог игр', 'Виртуальный ПК', 'Безлимитная игровая сессия'],
            beneficial: false,
            key: uuidv4()
        },
        {
            title: 'Подписка Максимум',
            price: 2999,
            period: 'месяц',
            services: ['Каталог игр', 'Виртуальный ПК', 'Игровая сессия 10 часов/день'],
            beneficial: true,
            key: uuidv4()
        },
        {
            title: 'Подписка Минимум',
            price: 1500,
            period: 'месяц',
            services: ['Каталог игр', 'Игровая сессия 4 часа/день'],
            beneficial: false,
            key: uuidv4()
        },
    ]
  return (
    <ul className={className}>

    {
        cardData.map((item) => <RateCard title={item.title} price={item.price} period={item.period} services={item.services} beneficial={item.beneficial}/>)
    }
    </ul>
  )
}

export default RateList