import styles from './index.module.css'
import Modal from '../../../modal/modal';

const AddStock=({show,onClose,onCancel,product='Loading...'})=>{
  
    return(
        <Modal show={show} onClose={onClose} onCancel={onCancel} buttonStyle={styles.modalbutton_style} button_text='Update Stock'>
            <h4 className={styles.popup_header}>ADD STOCK</h4>
            <div className={styles.product_update_content}>
                    <h6>Product Name:&nbsp;<span>{product?.name}</span></h6>
                    <h6>Current Stock:&nbsp;<span> 200</span></h6>
            </div>
            <input className={styles.input}placeholder='Add stock'></input>
        </Modal>
    )
}

export default AddStock