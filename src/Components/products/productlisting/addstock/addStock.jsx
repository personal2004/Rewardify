import styles from './index.module.css'
import Modal from '../../../modal/modal';
import { useState } from 'react';
import api from '../../../../utils/apiinstance';
import { ADD_STOCK } from '../../../../utils/api';

const AddStock=({show,onClose,onCancel,product={},getproduct})=>{

    const [stock, setStock] = useState(product?.stock);

    const handleAddStock = async () => {
      try {
        const response = await api.post(`${ADD_STOCK}${product._id}`, {
          stock: Number(stock),
        });
        getproduct();
      }catch (error) {
        console.error('Error updating stock:', error);
      }
    };

    const handleClose = (e) => {
      handleAddStock();
      onClose(e);
    };

    return(
        <Modal show={show} onClose={handleClose} onCancel={onCancel} buttonStyle={styles.modalbutton_style} button_text='Update Stock'>
            <h4 className={styles.popup_header}>ADD STOCK</h4>
            <div className={styles.product_update_content}>
                    <h6>Product Name:&nbsp;<span>{product?.productName}</span></h6>
                    <h6>Current Stock:&nbsp;<span>{product?.stock}</span></h6>
            </div>
            <input className={styles.input} placeholder='Add stock' value={stock} onChange={(e)=>setStock(e.target.value)}></input>
        </Modal>
    )
}

export default AddStock