import styles from './index.module.css'
import Modal from '../../../modal/modal';
import {deleteimg} from '../../../../img/images'
import api from '../../../../utils/apiinstance'
import { DELETE_PRODUCT } from '../../../../utils/api';
const DeleteStock=({show,onClose,onCancel,product={},getproduct})=>{


  const handledelete = async (product) => {
    try {
      const response = await api.delete(`${DELETE_PRODUCT}${product?._id}`)
      getproduct()
    } catch (error) {
      console.error(error); 
    
    }
  }
  const handleClose = (e) => {
    handledelete(product);
    onClose(e);
  };
  
    return(
        <Modal show={show} onClose={handleClose} onCancel={onCancel} buttonStyle={styles.modalbutton_style} button_text='Delete'>
        <div className={styles.imageContainer}><img src={deleteimg} alt="Handshake" style={{width:'70px',height:'50px'}}/></div>         
        <div className={styles.popup_header}>Please Confirm</div>
        <div className={styles.popup_para}>Do you really want to delete the product?</div>
      </Modal>
    )
}
export default DeleteStock