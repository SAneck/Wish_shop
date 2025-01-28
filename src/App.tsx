import classes from './App.module.scss'
import { Header } from './components/header/header'
import { ProductCard } from './components/productCard/ProductCard'
import { productCard } from './components/productCard/ProductCardContent'
import { SideBar } from './components/sidebar/SideBar'
import { Slider } from './components/slider/Slider'

export const App = () => {
	return (
		<div className={classes.wrapper}>
			<Header />
			<Slider />
			<h1>Каталог</h1>
			<div className={classes.wrapper}>
				<div className={classes.sideBar}>
					<SideBar />
				</div>
				<div className={classes.cards}>
					{Array.from({ length: 12 }, (_, index) => (
						<ProductCard key={index} card={productCard} />
					))}
				</div>
			</div>
		</div>
	)
}
