import Modal from 'react-modal';
import styles from './CartProductModal.module.css';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from "../../redux/slices/cartSlice";
import { useState } from 'react';
import { useSelector } from 'react-redux';

const PhotoModal = ({isOpen, onClose, id, title, image, description, ingredients, weight, calories, price, name}) => {
    const dispatch = useDispatch();

    const cartItem = useSelector((state) => state.cart.items.find(obj => obj.id === id));

    const addedCount = cartItem ? cartItem.count : 0;

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
            name
        }
        dispatch(addItem(item));
    }

    

    
 
    

    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={styles.overlay}
        >
           
             <div className={styles.modalContainer}>
                <div className={styles.header}>
                    <img onClick={onClose} src="./images/close.svg" className={styles.closeBtn} alt="" />
                    <div className={styles.content_price}>
                        <h3 className={styles.full_title}>{title}</h3>
                    
                        
                         <h4 className={styles.price}>{price}₽</h4>
  
                    </div>
                </div>
            
               
             <div className={styles.content}>
                 <img className={styles.full_img} src={image}/>
                 <div className={styles.content_text}>
                      <p className={styles.description}>{description}</p>
                      <p className={styles.name_structure}>Состав:</p>
                      <p className={styles.structure}>{ingredients} </p>
                      <p className={styles.info}>{weight}г, ккал {calories}</p>
                   </div>
                  </div>
                  

              </div>
      
         
        </Modal>
    )
}

export default PhotoModal;



