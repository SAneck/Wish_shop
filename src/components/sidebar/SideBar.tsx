import classes from './SideBar.module.scss'
import { Form } from '../form/Form'

export const SideBar = () =>{
    return (
        <>
            <p className={classes.paragraph}>Категория</p>
            <div>
                <p className={classes.paragraph}>Распродажа</p>

            </div>
            <div>
                <p className={classes.paragraph}>Цена</p>
                <Form />
            </div>
        </>
    )
}