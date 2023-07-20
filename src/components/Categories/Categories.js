import React from "react";
import styles from './Categories.module.css';

function Categories({ value, onChangeCategory }) {
   
  const categories = [
    {img: "/images/icon1.svg", name: 'Бургеры'},
    {img: "/images/icon2.svg", name: 'Закуски'}, 
    {img: "/images/icon3.svg", name: 'Хот-доги'}, 
    {img: "/images/icon4.svg", name: 'Комбо'}, 
    {img: "/images/icon5.svg", name: 'Шаурма'}, 
    {img: "/images/icon6.svg", name: 'Пицца'}, 
    {img: "/images/icon7.svg", name: 'Вок'}, 
    {img: "/images/icon8.svg", name: 'Десерты'}, 
    {img: "/images/icon9.svg", name: 'Соусы'}
  ];

    return (
      <div className='categories'>
        <ul>
          {categories.map((categoryName, i) => (
              <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? styles.active : ''}>  
              <img className={styles.cat} src={categoryName.img} />
              <a>{categoryName.name}</a>
              </li> 
            ))}
        </ul>
      </div>
    )
  }

  export default Categories;

  