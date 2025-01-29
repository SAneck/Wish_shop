import { useState } from 'react'
import classes from './App.module.scss'
import { Header } from './components/header/header'
import { ProductCard } from './components/ProductCard/ProductCard'
import { productCard } from './components/ProductCard/ProductCardContent'
import { SideBar } from './components/sidebar/SideBar'
import { Slider } from './components/slider/Slider'

export const App = () => {

	const [cards, setCards] = useState([])

	return (
		<div className={classes.container}>
			<Header />
			<Slider />
			<h1>Каталог</h1>
			<div className={classes.wrapper}>
				<div className={classes.sideBar}>
					<SideBar />
				</div>
				<div className={classes.cards}>
					{productCard.map((item, index) => 
						<ProductCard card={item} />
					)}
				</div>
			</div>
		</div>
	)
}
