import React, {useState} from "react";
import styles from './MainCart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import CartContent from "../CartContent/CartContent";
import CartEmpty from "../CartEmpty/CartEmpty";


const MainCart = () => {
    const [active, setActive] = useState(true);
    const showCart = () => setActive(!active);

    const item = useSelector((state) => state.cart.items);
    const totalCount = item.reduce((sum, item) => sum + item.count, 0);
  
    const {items, totalPrice} = useSelector(state => state.cart);
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

    return (
            <div  className={active ? styles.main_cart : styles.active}>
                <div  className={styles.dropdown}>
                    <div  onClick={showCart} className={styles.main_cart_header}>
                        <h4 >Корзина</h4>
                        <button className={styles.sum}>{totalCount}</button>
                    </div>
                </div>

                <CartContent />  
            </div>
    )
}


export default MainCart;