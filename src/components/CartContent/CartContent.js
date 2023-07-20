import React, {useState} from "react";
import styles from "./CartContent.module.css";
import { useSelector } from 'react-redux';
import CartItem from "../CartItem/CartItem";
import ModalOrder from "../ModalOrder/ModalOrder";
import Delivery from "../Delivery/Delivery";


const CartContent = () => {
    const item = useSelector((state) => state.cart.items);
    const {items, totalPrice} = useSelector(state => state.cart);
    const [modalOrderVisible, setModalOrderVisible] = useState(false);
    const totalCount = item.reduce((sum, item) => sum + item.count, 0); 


  return (

    <div className={styles.dropdown}>
        <div className={styles.dropdown_content}>
            <p className={styles.line}></p>
            {
                items.map((item) => <CartItem key={item.id} {...item} />)
            }

            <div className={styles.main_cart_footer}>
                <div className={styles.total}>
                    <p className={styles.price}>Итого</p>
                    <p className={styles.price}>{totalPrice} ₽</p>
                </div>
                <button onClick={() => setModalOrderVisible(true)} className={styles.btn_order}>Оформить заказ</button>
            
                <div className={styles.free_delivery}>{totalPrice > 599 ? <Delivery /> : <div></div>}</div> 
            </div>
        
        <ModalOrder 
        Open={modalOrderVisible} 
        Close={() => setModalOrderVisible(false)}
        /> 
        
        </div>
    </div>    
  )
}

export default CartContent;