import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { CardListProvider } from './context/CardList.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CardListProvider>
			<App />
		</CardListProvider>
	</StrictMode>
)
