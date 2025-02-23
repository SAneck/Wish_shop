import classes from './Form.module.scss'

export const Form = () =>{
    return (
        <form className={classes.wrapper}>
             <div className={classes.radio}>
                <div className={classes.radioStroke}>
                    <input className={classes.radioInput} type="radio" id="0" name="radio" />
                    <label className={classes.radioLabel}>
                       1-5000
                    </label>
                </div>
                <div className={classes.radioStroke}>
                    <input className={classes.radioInput} type="radio" id="1" name="radio" />
                    <label className={classes.radioLabel}>
                       1-5000
                    </label>
                </div>
                <div className={classes.radioStroke}>
                    <input className={classes.radioInput} type="radio" id="2" name="radio" />
                    <label className={classes.radioLabel}>
                       1-5000
                    </label>
                </div>
                <div className={classes.radioStroke}>
                    <input className={classes.radioInput} type="radio" id="3" name="radio" />
                    <label className={classes.radioLabel}>
                       1-5000
                    </label>
                </div>
             </div>
        </form>
    )
}