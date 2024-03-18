import React from 'react'
import styles from '../styles/Display.module.css'


const Display = ({ handleOnKeyDown, showText }) => {
    return (
        <>
            <div className={styles.display}>
                <input type='text' placeholder='Enter Healthy Food Items' onKeyDown={handleOnKeyDown} className={styles.input} />
                <p className={styles.newItemColor}>{showText}</p>
            </div>
            <hr />
        </>
    )
}

export default Display