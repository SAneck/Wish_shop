import { createContext, FC, ReactNode, useContext, useState } from 'react'
import { Card } from '../interfaces/interface'

interface ContextProps {
	cardList: Card[]
	updateList: (updatedList: Card[]) => void
}

const CardListContext = createContext<ContextProps | undefined>(undefined)
const CardListProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [cardList, setCardList] = useState<Card[]>([])

	const updateList = (updatedList: Card[]) => {
		setCardList(updatedList)
	}

	return (
		<CardListContext.Provider value={{ cardList, updateList }}>
			{children}
		</CardListContext.Provider>
	)
}

const useListContext = (): ContextProps => {
	const listContext = useContext(CardListContext)
	if (!listContext) {
		throw new Error('Ошибка в контексте')
	}
	return listContext
}

export { CardListProvider, useListContext }
