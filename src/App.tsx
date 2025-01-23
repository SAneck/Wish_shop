import classes from './App.module.scss'
import { Header } from './components/header/header'
import { ProductCard } from './components/ProductCard/ProductCard'
import { productCard } from './components/ProductCard/ProductCard_content'

export const App = () => {
	return (
		<div className={classes.wrapper}>
			<Header />

			{Array.from({ length: 10 }, (_, index) => (
				<ProductCard key={index} card={productCard} />
			))}
		</div>
	)
}
