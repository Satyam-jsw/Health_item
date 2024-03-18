import React, { useEffect, useState } from 'react'
import FoodItem from './FoodItem'
import styles from '../styles/FoodItems.module.css'


const FoodItems = ({ items }) => {
    // console.log("items", { items })
    const [InitialItem, setInitialItem] = useState(items)

    const handleOnClickBuy = (x) => {
        alert(`${x} item is Buy`)
    }
    const handleOnClickRemove = (x) => {
        const currentItem = InitialItem.filter((items) => (items !== x))
        setInitialItem(currentItem)
    }

    return (
        <>
            <div className={styles.fooditems}>
                {
                
                    (items.map((x) => (
                        <FoodItem
                            key={x}
                            foodItem={x}
                            bought={true}
                            handleOnClick={() => (handleOnClickBuy(x))} handleOnClickDelete={() => (handleOnClickRemove(x))}
                        />
                    )))
                }
            </div>
        </>
    )
}

export default FoodItems