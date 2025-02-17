import { FC, useState } from 'react'
import classes from './Header.module.scss'
import {Modal} from '../basket/Basket'

interface HeaderProps {
	quantity: number | null
}

export const Header:FC<HeaderProps> = ({quantity}) => {

	const [isModalOpen, setIsModalOpen] = useState(false);

  	const openModal = () => setIsModalOpen(true);
  	const closeModal = () => setIsModalOpen(false);

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
						<button onClick={openModal}>Корзина {quantity}</button>
						<Modal isOpen={isModalOpen} onClose={closeModal} title="Ваша корзина">
        					<p>Это Модальное окно</p>
      					</Modal>
					</li>
				</ul>
				<a href='#'>Вход</a>
			</div>
		</>
	)
}
