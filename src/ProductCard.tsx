import { useState } from 'react'
import { ProductCard_content } from './ProductCard_content'
import classes_productCard from './ProductCardStyle.module.scss'

export const ProductCard = () => {
    const [index, _] = useState(0)

    let card = ProductCard_content[index]
    return (
        <div className={classes_productCard.productCard_body}>
            <div className={classes_productCard.content_img}>
                <img className= {classes_productCard.productCard_img} src = {card.url} />
            </div>
            <div className={classes_productCard.content}>
                <h4>{card.name}</h4>
                <h5>{card.manufacturer}</h5>
                <p>{card.price}</p>
                <button>В корзину</button>
            </div>
        </div>
    )
}