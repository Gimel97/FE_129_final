import Modal from 'react-modal';
import styles from './Modal.module.css';
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

    const onClickPlus = () => {
            dispatch(addItem({id}));
        }

    const onClickMinus = () => {
        dispatch(minusItem(id))
    }

    
 
    

    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={styles.overlay}
        >
           
             <div className={styles.modalContainer}>
            <img onClick={onClose} src="./images/close.svg" className={styles.closeBtn} alt="" />
               <h3 className={styles.full_title}>{title}</h3>
             <div className={styles.content}>
                 <img className={styles.full_img} src={image}/>
                 <div className={styles.content_text}>
                      <p className={styles.description}>{description}</p>
                      <p className={styles.name_structure}>Состав:</p>
                      <p className={styles.structure}>{ingredients} </p>
                      <p className={styles.info}>{weight}г, ккал {calories}</p>
                   </div>
                  </div>
                  <div className={styles.content_footer}>
                      <div className={styles.add_count}>
                          <button onClick={onClickAdd} className={styles.Add}>Добавить</button>
                          <div className={styles.btn_count}>
                              <button disabled={addedCount === 1} onClick={onClickMinus} className={styles.count_minus}>-</button>
                              <button className={styles.count_number}>{addedCount}</button>
                              <button onClick={onClickPlus} className={styles.count_plus}>+</button>
                          </div>
                      </div>
                    
                      <h4 className={styles.price}>{price}₽</h4>
                   </div>

              </div>
      
         
        </Modal>
    )
}

export default PhotoModal;





// import React from "react";
// import styles from './Modal.module.css';
// // import { useDispatch } from 'react-redux';
// // import { addItem } from '../../redux/slices/cartSlice';

// const Modal = ({open, onClose}) => {
//         //  const dispatch = useDispatch();
//     if (!open) return null;
   
//     // const onClickAdd = ({id, title, price, weight, image}) => {
//     //     const item = {
//     //         id,
//     //         image,
//     //         title,
//     //         weight,
//     //         price
//     //     }
//     //     dispatch(addItem(item));
//     // }
//     return (
//         <div onClick={onClose} className={styles.overlay}>
//             <div className={styles.modalContainer}>
//            <img onClick={onClose} src="./images/close.svg" className={styles.closeBtn} alt="" />
//               <h3 className={styles.full_title}>title</h3>
//             <div className={styles.content}>
//                 <img className={styles.full_img} src="./images//icon9.svg"/>
//                 <div className={styles.content_text}>
//                      <p className={styles.description}>description</p>
//                      <p className={styles.name_structure}>Состав:</p>
//                      <p className={styles.structure}>ingredients </p>
//                      <p className={styles.info}>weightг, ккал calories</p>
//                   </div>
//                  </div>
//                  <div className={styles.content_footer}>
//                      <div className={styles.add_count}>
//                          <button className={styles.Add}>Добавить</button>
//                          <div className={styles.btn_count}>
//                              <button className={styles.count_minus}>-</button>
//                              <button className={styles.count_number}>0</button>
//                              <button className={styles.count_plus}>+</button>
//                          </div>
//                      </div>
                    
//                       <h4 className={styles.price}>price₽</h4>
//                   </div>

//              </div>
      
//         </div>
//     )
// }

// export default Modal;
