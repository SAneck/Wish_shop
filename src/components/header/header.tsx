import classes from './Header.module.scss'

export const Header = () => {
    return (
        <div className={classes.header}>
            <p className={classes.logo}>Wish</p>
            <ul>
                <li><a href = "#">Каталог</a></li>
                <li><a href = "#">Поддержка</a></li>
                <li><a href = "#">Корзина</a></li>
            </ul>
            <a href = "#">Вход</a>
        </div>
    )
}