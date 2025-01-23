import classes from './App.module.scss'
import { Header } from './components/header/header'
import { ProductCard } from './components/productCard/ProductCard'
import { productCard } from './components/productCard/ProductCardContent'
import { Slider } from './components/slider/Slider'

export const App = () => {
	return (
		<div className={classes.container}>
			<Header />
			<Slider />
			<h1>Каталог</h1>
			<div className={classes.wrapper}>
				{Array.from({length: 12}, (_, index) =>(
					<ProductCard key={index} card={productCard}/>
				))}

			</div>
		</div>
	)
}
