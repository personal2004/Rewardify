import styles from './index.module.css'
import Modal from '../../../modal/modal';
import {deleteimg} from '../../../../img/images'
const DeleteStock=({show,onClose,onCancel})=>{
  
    return(
        <Modal show={show} onClose={onClose} onCancel={onCancel} buttonStyle={styles.modalbutton_style} button_text='Delete'>
        <div className={styles.imageContainer}><img src={deleteimg} alt="Handshake" style={{width:'70px',height:'50px'}}/></div>         
        <div className={styles.popup_header}>Please Confirm</div>
        <div className={styles.popup_para}>Do you really want to delete the product?</div>
      </Modal>
    )
}
export default DeleteStock