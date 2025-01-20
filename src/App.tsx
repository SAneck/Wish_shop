import classes from './App.module.scss'
import { Header } from './header'
import { ProductCard } from './ProductCard'

export const App = () => {
	return (
		<div className={classes.wrapper}>
			<Header />

			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			
		</div>
	)
}
