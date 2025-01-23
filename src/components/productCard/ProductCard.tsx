import classes from './ProductCardStyle.module.scss'
import {Card} from '../../interfaces/index'
import { FC } from 'react';

interface Props {
    card: Card
}  

export const ProductCard:FC<Props> = ({card})  => {   
        return (
        <div className={classes.productCardBody}>
            <div className={classes.contentImg}>
                <img className= {classes.productCardImg} src = {card.url} />
            </div>
            <div className={classes.content}>
                <h4>{card.name}</h4>
                <h5>{card.manufacturer}</h5>
                <p>{card.price}Р</p>
                <button >В корзину</button>
            </div>
        </div>
        )
}