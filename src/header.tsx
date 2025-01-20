import classes_header from './Header.module.scss'

export const Header = () => {
    return (
        <div className={classes_header.header}>
            <p className={classes_header.logo}>Wish</p>
            <ul>
                <li><a href = "#">Каталог</a></li>
                <li><a href = "#">Поддержка</a></li>
                <li><a href = "#">Корзина</a></li>
            </ul>
            <a href = "#">Вход</a>
        </div>
    )
}