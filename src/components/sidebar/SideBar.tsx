import classes from './SideBar.module.scss'
import { Form } from '../form/Form'

export const SideBar = () =>{
    return (
        <>
            <p>Категория</p>
            <div>
                <p>Распродажа</p>

            </div>
            <div>
                <p>Цена</p>
                <Form />
            </div>
        </>
    )
}