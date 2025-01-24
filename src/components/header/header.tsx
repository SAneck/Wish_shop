import classes from './Header.module.scss'
export const Header = () => {
	return (
		<>
			<div className={classes.header}>
				<a href='#' className={classes.logo}>
					Wish
				</a>
				<ul>
					<li>
						<a href='/'>Каталог</a>
					</li>
					<li>
						<a href='/'>Поддержка</a>
					</li>
					<li>
						<a href='../favorite/Favorite'>Избранное</a>
					</li>
					<li>
						<a href='/'>Корзина</a>
					</li>
					<input type='text' placeholder='Искать'></input>
				</ul>
				<a href='#'>Вход</a>
			</div>
		</>
	)
}
