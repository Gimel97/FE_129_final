import React from "react";
import { useSelector } from 'react-redux';
import styles from './CartEmpty.module.css';

const CartEmpty = () => {
    const item = useSelector((state) => state.cart.items);
    const totalCount = item.reduce((sum, item) => sum + item.count, 0);
    return(
        <div className={styles.main_cart}>
            <div className={styles.main_cart_header}>
            <h4>Корзина</h4>
            <button className={styles.sum}>{totalCount}</button>
            </div>
            <p className={styles.empty}>Тут пока пусто :(</p>
        </div>
        
    )
}

export default CartEmpty;