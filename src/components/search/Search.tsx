import { FC, useEffect, useState } from 'react'
import { useListContext } from '../../context/CardList'
import { Card } from '../../interfaces/interface'

interface Props {
	items: Card[]
}

export const Search: FC<Props> = ({ items }) => {
	const [inputValue, setInputValue] = useState('')
	const { updateList } = useListContext()

	const sortedItems = items.filter(item =>
		item.title.toLowerCase().includes(inputValue.toLowerCase())
	)

	useEffect(() => {
		updateList(sortedItems)
	}, [inputValue])

	return (
		<input
			type='text'
			onChange={e => setInputValue(e.target.value)}
			value={inputValue}
			placeholder='Искать'
		></input>
	)
}
