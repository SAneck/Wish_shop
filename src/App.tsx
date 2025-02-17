import { useState, useEffect } from 'react'
import classes from './App.module.scss'
import { Header } from './components/header/header'
import { ProductCard } from './components/ProductCard/ProductCard'
import { SideBar } from './components/sidebar/SideBar'
import { Slider } from './components/slider/Slider'



export const App = () => {

	const [cards, setCards] = useState([])
	const [count, setCount] = useState<number | null>(null)


	const getCards = async () =>{
		await fetch("https://fakestoreapi.com/products")
  		.then((res) => res.json())
  		.then((value) => setCards(value));
	}

	

	const counter = () => {
		count !== null ? setCount(count + 1) : setCount(1)
	}

	useEffect(() => {
		getCards()
	})


	return (
		<div className={classes.container}>
			<Header quantity={count}/>
			<Slider />
			<div className={classes.catalog}>
				<h1 style={{marginRight: 70}}>Фильтры</h1>
				<h1>Каталог</h1>
				<input type='text' placeholder='Искать'></input>
			</div>
			<div className={classes.wrapper}>
				<div className={classes.sideBar}>
					<SideBar />
				</div>
				<div className={classes.cards}>
					{cards.map((item, _) => 
						<ProductCard card={item} drip= {counter}/>
					)}
				</div>
			</div>
		</div>
	)
}
