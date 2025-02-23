import { useState, useEffect } from 'react'
import classes from './App.module.scss'
import { Header } from './components/header/header'
import { ProductCard } from './components/productCard/ProductCard'
import { SideBar } from './components/sidebar/SideBar'
import { Slider } from './components/slider/Slider'
import { Search } from './components/search/Search'
import { useListContext } from './context/CardList'
import { Card } from './interfaces/interface'

export const App = () => {
	const [count, setCount] = useState<number | null>(null)
	const [items, setItems] = useState<Card[]>([])
	const { cardList, updateList } = useListContext()

	const setCardItems = (cards: Card[]) => {
		setItems(cards)
		updateList(cards)
	}

	const getCards = async () => {
		await fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(value => setCardItems(value))
	}

	const counter = () => {
		count !== null ? setCount(count + 1) : setCount(1)
	}

	useEffect(() => {
		getCards()
	}, [])

	return (
		<div className={classes.container}>
			<Header quantity={count} />
			<Slider />
			<div className={classes.catalog}>
				<h1 style={{ marginRight: 70 }}>Фильтры</h1>
				<h1>Каталог</h1>
				<Search items={items} />
			</div>
			<div className={classes.wrapper}>
				<div className={classes.sideBar}>
					<SideBar />
				</div>
				<div className={classes.cards}>
					{cardList.map(item => (
						<ProductCard key={item.id} card={item} drip={counter} />
					))}
				</div>
			</div>
		</div>
	)
}
