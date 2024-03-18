import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import styles from './styles/App.module.css'
import FoodItems from './components/FoodItems'
import Display from './components/Display'


const App = () => {

  let [textToShow, settextToShow] = useState("Your favourite food")
  let [list, setlist] = useState(["banana", "apple", "mango", "carrot"])
  let newItem, newList = list;
 
  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      newItem = event.target.value;
      event.target.value = ""
      newList = [newItem, ...list]
      setlist(newList)
      settextToShow(`New Item ${newItem} added in list`);
    }
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>HealthItem</h1>
        <Display handleOnKeyDown={handleOnKeyDown} showText={textToShow} />
        <FoodItems items={newList} />
      </div>
    </>
  )
}

export default App