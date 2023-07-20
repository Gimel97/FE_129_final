import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setCategoryId, setCategoryNames } from "../redux/slices/filterSlice";
import Categories from '../components/Categories/Categories';
import MainCart from '../components/MainCart/MainCart';
import Burgers from '../components/Burgers/Burgers';
import PhotoModal from "../components/Modal/Modal";

import '../App.css';

const Home = () => {
    const dispatch = useDispatch();
    const categoryId = useSelector((state) => state.filter.categoryId);
    const categoryNames = useSelector((state) => state.filter.categoryNames)

       // const names = ['Бургеры', 'Закуски', 'Хот-доги', 'Комбо', 'Шаурма', 'Пицца', 'Вок', 'Десерты', 'Соусы']
    const [items, setItems] = useState([]);

    const name = useSelector((state) => state.items);

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id));
    };

    // const onChangeCategoryName = (name) => {
    //     dispatch(setCategoryNames(name));
    // };

    React.useEffect(() => {
       
        const category = categoryId >= 0 ? `category=${categoryId}` : '';
        axios.get(`https://6487473fbeba6297279060f8.mockapi.io/items?${category}`)
        .then((res) => {
            setItems(res.data);
        });
        }, [categoryId]);
        
        return (
        <>
                <Categories value={categoryId} onChangeCategory={onChangeCategory} />
            <div className="main">
                <div>
            <MainCart />
            </div>
          
           
                 
            
                
                    
                <div className="content_food">
                
                <h3> {items.map(user=> (
            <div className="names" key={user.id}>{user.name}</div>))}</h3>
               
               
                <div className="burgers">
                    
                        {items.map(obj => (<Burgers key={obj.id} {...obj} />))}
                     
                        </div>
                        </div>
                        </div>   
                    
             
            
        </>
    )
}

export default Home;

