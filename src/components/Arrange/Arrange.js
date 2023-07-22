import React, { useEffect } from "react";
import styles from "./Arrange.module.css";
import { useState } from "react";
import { clearItems } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import InputMask from 'react-input-mask';

const Arrange = () => {
  const dispatch = useDispatch();

  const clearCart = () => {
    dispatch(clearItems())
}

  const initialValues = {
    name: "",
    phone: "",
    address: "",
    floor: "",
    intercom: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^\+375(17|29|33|44)[0-9]{3}[0-9]{2}[0-9]{2}$/;
    if(!values.name){
        errors.name = "Name is required";
    }
    if(!values.phone){
        errors.phone = "Phone is required";
  }else if(!regex.test(values.phone)){
    errors.phone = "Phone is incorrect";
  }
  return errors;
};
  
  const [showAddress, setshowAddress] = useState(false);
  const [checked, setChecked] = useState(true);
  let content = null;

  function changeCheckbox() {
    setChecked(!checked);
  }

  if (showAddress) {
    content = (
      <>
        <form className={styles.address}>
          <input
            className={styles.basic}
            type="text"
            placeholder="Улица, дом, квартира"
            name="address"
            value={formValues.address}
            onChange={handleChange}
          />
          <form className={styles.optionally}>
            <input
              className={styles.basic_optionally}
              type="text"
              placeholder="Этаж"
              name="floor"
              value={formValues.floor}
              onChange={handleChange}
            />
            <input
              className={styles.basic_optionally_intercom}
              type="text"
              placeholder="Домофон"
              name="intercom"
              value={formValues.intercom}
              onChange={handleChange}
            />
          </form>
        </form>
      </>
    );
  }

  return (
    <div>
     <div className={styles.success}> 
     {Object.keys(formErrors).length === 0 && isSubmit ? clearCart() || (<h6 className={styles.successOrder}>Заказ принят!</h6>): 
     (<div className={styles.forms}>

        <h4 className={styles.title}>Доставка</h4>
        <form onSubmit={handleSubmit} className={styles.basic}>
          <input
            className={styles.basic}
            type="text"
            placeholder="Ваше имя"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          <p className={styles.invalid}>{formErrors.name}</p>
          <InputMask
          mask='+375999999999'
            className={styles.basic}
            type="phone"
            placeholder="Телефон"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
          />
           <p className={styles.invalid}>{formErrors.phone}</p>
        
        <div onClick={() => setshowAddress(false)} className={styles.delivery}>
          <label className={styles.label}>
            <input
              type="radio"
              checked={checked}
              onChange={changeCheckbox}
              name="delivery"
              value="pickup"
              className={styles.radio}
            />
            <span className={styles.fake}></span>
            <span className={styles.text}>Самовывоз</span>
          </label>
        </div>
        <div onClick={() => setshowAddress(true)} className={styles.delivery}>
          <label className={styles.labelDelivery}>
            <input
              type="radio"
              onChange={changeCheckbox}
              name="delivery"
              value="delivery"
              className={styles.radio}
            />
            <span className={styles.fake}></span>
            <span className={styles.text}>Доставка</span>
          </label>
        </div>
        {content}
        <div className={styles.arrange}>
          <button className={styles.arrangeBtn}>Оформить</button>
        </div>
        </form>
      </div>
     
     )}</div>
    </div>
  );
};


export default Arrange;
