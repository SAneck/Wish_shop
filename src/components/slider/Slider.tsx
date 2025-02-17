import { useEffect, useState } from "react"
import classes from "./slider.module.scss"
import { sliderContent } from "./sliderContent"

export const Slider = () => {
    const [index, setIndex] = useState(0)
    const start = index < sliderContent.length - 1

    const handleClick = () => {
        start ? setIndex(index + 1) : setIndex(0)
        }
    let slider = sliderContent[index] 

    useEffect(()=> {
        const timeout = setTimeout(handleClick, 3500)
        return () => {
            clearTimeout(timeout)
        }
    },[index])
    return (
        <section className={classes.container}>
            <img src={slider.url} alt={slider.alt}/>
      </section>
    )
}