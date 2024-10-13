import styles from './index.module.css'
import Modal from '../../../modal/modal';

const MinusStock=({show,onClose,onCancel,product})=>{
  
    return(
        <Modal show={show} onClose={onClose} onCancel={onCancel} buttonStyle={styles.modalbutton_style} button_text='Update Stock'>
            <h4 className={styles.popup_header}>MINUS STOCK</h4>
            <div className={styles.product_update_content}>
                    <h6>Product Name:&nbsp;<span>{product?.name}</span></h6>
                    <h6>Current Stock:&nbsp;&nbsp;<span> 200</span></h6>
            </div>
            <input className={styles.input}placeholder='Reduce stock'></input>
        </Modal>
    )
}

export default MinusStock