import Modal from 'react-modal';
import styles from './ModalOrder.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Form from '../Form/Form';
// import ArrangeBtn from '../ArrangeBtn/ArrangeBtn';
// import Arrange from '../Arrange/Arrange';

const  ModalOrder = ({Open, Close}) => {
    
    // const dispatch = useDispatch();
    // const [showAddress, setshowAddress] = useState(false);
    // const [checked, setChecked] = useState(true);
    // const [name, setName] = useState('');
    // const [phone, setPhone] = useState('');
    // const [address, setAddress] = useState('');
    // const [floor, setFloor] = useState('');
    // const [intercom, setIntercom] = useState('');
    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    // }

    // const setButton = (e) => {
    //     e.preventDefault;
    //     console.log({name, phone, address, floor, intercom})
    // }

    // function changeCheckbox() {
    //     setChecked(!checked);
    // }

//    let content = null;

//    if (showAddress){
//     content = <>
//     <form className={styles.address}>
//             <input className={styles.basic} type="text" placeholder='Улица, дом, квартира' onChange={e => setAddress(e.target.value)} value={address}/>
//             <form className={styles.optionally}>
//                 <input  className={styles.basic_optionally} type="text" placeholder='Этаж' onChange={e => setFloor(e.target.value)} value={floor}/>
//                 <input className={styles.basic_optionally} type="text" placeholder='Домофон' onChange={e => setIntercom(e.target.value)} value={intercom}/>
//             </form>
//         </form>
//     </>
//    }

   
    
return(
    <Modal
    isOpen={Open}
    onRequestClose={Close}
    className={styles.overlay}
    >
       
        <div className={styles.modalContainer}>
            <img onClick={Close} src="./images/close.svg" className={styles.closeBtn} alt="" />
            <div className={styles.contentLeft}>
                <img className={styles.donut} src="./images/donut.svg" alt="" />
            </div>
            <div className={styles.contentRight}>

                
                {/* <div className={styles.forms}> */}
                <Form />
                
                   {/*  <form className={styles.basic}>
                        <input className={styles.basic} type="text" placeholder='Ваше имя' onChange={e => setName(e.target.value)} value={name}/>
                        <input className={styles.basic} type="phone" placeholder='Телефон' onChange={e => setPhone(e.target.value)} value={phone}/>
                    </form>
                    <div onClick={() => setshowAddress(false)} className={styles.delivery}>
                        <label className={styles.label}>
                            <input type="radio" checked={checked} onChange={changeCheckbox} name="delivery" value="pickup" className={styles.radio} />
                            <span className={styles.fake}></span>
                            <span className={styles.text}>Самовывоз</span> </label>
                    </div>
                    <div onClick={() => setshowAddress(true)} className={styles.delivery}>
                        <label className={styles.label}>
                            <input onChange={changeCheckbox} type="radio" name="delivery" value="delivery" className={styles.radio} />
                            <span className={styles.fake}></span>
                            <span className={styles.text}>Доставка</span></label>
                    </div>
                    {content} */}


        {/* <form className={styles.address}>
            <input className={styles.basic} type="text" placeholder='Улица, дом, квартира'/>
            <form className={styles.optionally}>
                <input className={styles.basic_optionally} type="text" placeholder='Этаж'/>
                <input className={styles.basic_optionally} type="text" placeholder='Домофон'/>
            </form>
        </form> */}
        {/* onClick={e => setButton(e)} */}
        
                {/* </div>
                <div className={styles.arrange}>
                    <button onClick={handleFormSubmit} className={styles.arrangeBtn}>Оформить</button>
                </div> */}
            </div>
        </div>
    </Modal>
)}

export default ModalOrder;