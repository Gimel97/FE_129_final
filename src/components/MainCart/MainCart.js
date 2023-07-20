import React, {useState} from "react";
import styles from './MainCart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import CartContent from "../CartContent/CartContent";
// import CartItem from "../CartItem/CartItem";
import CartEmpty from "../CartEmpty/CartEmpty";
// import { Form } from "react-router-dom";
// import ModalOrder from "../ModalOrder/ModalOrder";
// import PhotoModal from '../Modal/Modal';
import { addItem } from '../../redux/slices/cartSlice';
// import Delivery from "../Delivery/Delivery";


const MainCart = () => {
    const [active, setActive] = useState(true);
    const showCart = () => setActive(!active);

    const item = useSelector((state) => state.cart.items);
    const totalCount = item.reduce((sum, item) => sum + item.count, 0);
  
   
   
    // const [foodCount, setFoodCount] = useState(0);
    const {items, totalPrice} = useSelector(state => state.cart);
    // const [modalOrderVisible, setModalOrderVisible] = useState(false);
    const isMounted = React.useRef(false);
    
 
    React.useEffect(() => {
     if (isMounted.current){
            const json = JSON.stringify(items);
            window.localStorage.setItem('cart', json);
        }
        isMounted.current = true;
    }, [items]);

    if (!totalPrice){
        return <CartEmpty />;
    }

    // const dropdown = () => {
        
    // }

   {/* className={styles.main_cart} */}
    return (
            <div  className={active ? styles.main_cart : styles.active}>
            
                
            <div  className={styles.dropdown}>
                <div  onClick={showCart} className={styles.main_cart_header}>

                    <h4 >Корзина</h4>
                    <button className={styles.sum}>{totalCount}</button>
                 </div>
            </div>
        {/* className={styles.main_cart}> */}
        {/* <div className={styles.dropdown}>
             <div className={styles.main_cart_header}>
                <h4>Корзина</h4>
                <button className={styles.sum}>{totalCount}</button>
            </div>
        </div>
        <div> */}
            
        <CartContent />
        {/* </div> */}
       {/* <div className={styles.dropdown_content}>

      

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
            <div>{totalPrice > 599 ? <Delivery /> : <div></div>}</div> 
        </div>
        <ModalOrder 
        Open={modalOrderVisible} 
        Close={() => setModalOrderVisible(false)}
        /> 
        
        </div> */}
    </div>
    )
}


export default MainCart;