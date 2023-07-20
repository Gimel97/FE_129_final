import React from "react";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../redux/slices/cartSlice";
import styles from './CartItem.module.css';
import CartProductModal from '../CartProductModal/CartProductModal';

const CartItem = ({id, title, price, weight, image, description, ingredients, calories, name, count} ) => {
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false)

    const onClickAdd = () => {
        const item = {
            id,
            image,
            title,
            weight,
            price,
            description,
            ingredients,
            calories,
            name,
        }
        dispatch(addItem(item));
       
    }
    const onClickPlus = () => {
        dispatch(addItem({
            id,
        }));
    }

    const onClickMinus = () => {
        dispatch(minusItem(id))
    }

    const onClickRemove = () => {
        dispatch(removeItem(id))
    }

   
    // const [foodCount, setFoodCount] = useState(0);

    // const onClickPlus = () => {
    //     setFoodCount(foodCount + 1);
    // }

    // const onClickMinus = () => {
    //     setFoodCount(foodCount - 1);
    // }

    return(
        <>
        
       
            <div className={styles.cart_content}>
            
                <div className={styles.info_cart}>
                <img onClick={() => setModalVisible(true)} className={styles.img_product} src={image} alt="" /> 
                <div className={styles.info_text}>
                    <p className={styles.info_food}>{title}</p>
                    <p className={styles.info_food_weight}> {weight} г</p>
                    <p className={styles.info_food}>{price} ₽</p>
                </div>
                </div>

                <div className={styles.btn_count}>
                    <button disabled={count === 1} onClick={onClickMinus} className={styles.count_minus}>-</button>
                    <button className={styles.count_number}>{count}</button>
                    <button onClick={onClickPlus} className={styles.count_plus}>+</button>
                </div>
                <div><img onClick={onClickRemove} className={styles.basket} src="./images/basket.svg" alt="" /></div>
            </div>

            <p className={styles.line}></p>
     
            <CartProductModal 
            title={title}
            image={image}
            description={description}
            ingredients={ingredients}
            weight={weight}
            calories={calories}
            price={price}
            isOpen={modalVisible} 
            onClose={() => setModalVisible(false)} 
            name={name}
        />
        </>
    )
}

export default CartItem;
