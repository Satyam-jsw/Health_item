import React from 'react'
import styles from '../styles/FoodItem.module.css'



const FoodItem = ({ foodItem, bought, handleOnClick,handleOnClickDelete }) => {


    return (
        <>
            <li className={`${styles["foodItem"]} list-group-item active`} >
                <span className={styles["span_item"]}>{foodItem}</span>
                <button type="button" className={`${styles.button} btn btn-primary `} onClick={handleOnClick}>Buy</button>
            </li>
            <hr />
        </>
    )
}

export default FoodItem