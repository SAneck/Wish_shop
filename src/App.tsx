import React, { useState, useEffect } from 'react'
import classes from './App.module.scss'
import { Header } from './components/header/header'
import { ProductCard } from './components/productCard/ProductCard'
import { SideBar } from './components/sidebar/SideBar'
import { Slider } from './components/slider/Slider'
import { Card } from './interfaces/interface'
import axios from 'axios'

const clearAddInputvalue = {
	image: '',
	title: '',
	price: '',
}

export const App = () => {
	const [cards, setCards] = useState<Card[]>([])
	const [count, setCount] = useState<number | null>(null)
	const [searchInputValue, setSearchInputValue] = useState<string>('')
	const [addInputValue, setAddInputValue] = useState(clearAddInputvalue)

	const getCards = async () => {
		await fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(value => setCards(value))
	}

	const addCard = async (e: React.FormEvent) => {
		e.preventDefault()

		if (!addInputValue.image || !addInputValue.title || !addInputValue.price) {
			alert('Заполните все поля!')
			return
		}

		await fetch('https://fakestoreapi.com/products', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				id: cards.length + 1,
				title: addInputValue.title,
				price: parseFloat(addInputValue.price),
				description: 'lorem ipsum set',
				image: addInputValue.image,
				category: 'electronic',
			}),
		})
			.then(res => res.json())
			.then(res => {
				if (res) {
					setCards(prevCard => [...prevCard, res])
				} else {
					console.error('Некорректный ответ от сервера:', res)
				}
			})
		setAddInputValue(clearAddInputvalue)
	}

	const counter = () => {
		count !== null ? setCount(count + 1) : setCount(1)
	}

	useEffect(() => {
		const getCards = async () => {
			const responce = await axios.get('https://fakestoreapi.com/products')

			setCards(responce.data)
		}

		getCards()
	}, [])

	console.log(cards)

	return (
		<div className={classes.container}>
			<Header quantity={count} />
			<Slider />
			<div className={classes.catalog}>
				<h1 style={{ marginRight: 70 }}>Фильтры</h1>
				<h1>Каталог</h1>
				<input
					onChange={e => setSearchInputValue(e.target.value)}
					value={searchInputValue}
					type='text'
					placeholder='Искать'
				></input>
				<button>Поиск</button>
				<div>
					<form onSubmit={addCard}>
						<input
							placeholder='Image'
							onChange={e =>
								setAddInputValue(prev => ({ ...prev, image: e.target.value }))
							}
							value={addInputValue.image}
						/>
						<input
							placeholder='Title'
							onChange={e =>
								setAddInputValue(prev => ({ ...prev, title: e.target.value }))
							}
							value={addInputValue.title}
						/>
						<input
							placeholder='Price'
							onChange={e =>
								setAddInputValue(prev => ({ ...prev, price: e.target.value }))
							}
							value={addInputValue.price}
						/>
						<button type='submit'>Add</button>
					</form>
				</div>
			</div>
			<div className={classes.wrapper}>
				<div className={classes.sideBar}>
					<SideBar />
				</div>
				<div className={classes.cards}>
					{cards.map(item => (
						<ProductCard key={item.id} card={item} drip={counter} />
					))}
				</div>
			</div>
		</div>
	)
}
