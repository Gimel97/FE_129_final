import Modal from 'react-modal';
import styles from './ModalOrder.module.css';
import Form from '../Form/Form';

const  ModalOrder = ({Open, Close}) => {
        
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
                <Form /> 
            </div>
        </div>
    </Modal>
)}

export default ModalOrder;