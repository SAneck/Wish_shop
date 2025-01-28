import classes from './ProductCardStyle.module.scss'
import { Card } from '../../interfaces/interface'
import { FC } from 'react'

interface Props {
	card: Card
}

export const ProductCard: FC<Props> = ({ card }) => {
	return (
		<div className={classes.productCard_body}>
			<div className={classes.content_img}>
				<img className={classes.productCard_img} src={card.url} />
			</div>
			<div className={classes.content}>
				<h4>{card.name}</h4>
				<h5>{card.manufacturer}</h5>
				<p>{card.price}</p>
				<button>В корзину</button>
			</div>
		</div>
	)
}
