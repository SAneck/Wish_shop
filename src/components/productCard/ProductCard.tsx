import classes from './ProductCardStyle.module.scss'
import { Card } from '../../interfaces/interface'
import { FC } from 'react'

interface Props {
	card: Card
	drip: () => void
}


export const ProductCard: FC<Props> = ({ card, drip }) => {

	return (
		<div className={classes.productCard_body}>
			<div className={classes.content_img}>
				<img className={classes.productCard_img} src={card.image} />
			</div>
			<div className={classes.content}>
				<h4 title={card.title}>{card.title}</h4>
				<p>Price: {card.price}$</p>
				<button onClick={() => drip()}>В корзину</button>
			</div>
			
		</div>
	)
}
