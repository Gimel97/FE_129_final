import React from 'react'
import styles from "./Delivery.module.css"

const Delivery = () => {
  return (
    <div className={styles.delivery}>
                <img src="./images/delivery.svg" alt="" />
                <p className={styles.delivery_cart}>Бесплатная доставка</p>
                {/* <div className={styles.close}>Свернуть</div> */}
            </div>
  )
}

export default Delivery