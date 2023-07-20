import React from 'react';
import styles from './Burgers.module.css';

import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../../redux/slices/cartSlice';
import PhotoModal from '../Modal/Modal';
import { useState } from 'react';

function Burgers({id, title, price, weight, image, description, ingredients, calories, name}) {
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
            name
        }
        dispatch(addItem(item));
    }

    return (
        <>
            <div className='content_product'>
                <div className={styles.burger} >
                    <img onClick={() => setModalVisible(true)} src={image} alt="" />
                    <div className={styles.info}>
                        <p className={styles.info_price}>{price}₽</p>
                        <p className={styles.food_name}>{title}</p>
                        <p className={styles.info_weight}>{weight}г</p>
                    </div>
                    <button onClick={onClickAdd} className={styles.add}>Добавить</button>
                </div>
            </div>

            <PhotoModal 
            id={id}
                title={title}
                image={image}
                description={description}
                ingredients={ingredients}
                weight={weight}
                calories={calories}
                price={price}
                onClick={onClickAdd}
                isOpen={modalVisible} 
                onClose={() => setModalVisible(false)} 
                name={name}
                />
        </>
    )
}

export default Burgers;