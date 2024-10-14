import styles from './index.module.css'
import Modal from '../../../modal/modal';
import api from '../../../../utils/apiinstance';
import { Reduce_STock } from '../../../../utils/api';
import { useState } from 'react';

const MinusStock=({show,onClose,onCancel,product})=>{

    const [stock, setStock] = useState(0);
    const handleRemoveStock = async () => {
      try {
        const response = await api.post(`${Reduce_STock}${product._id}`, {
          stock: Number(stock),
        });
        console.log('Stock updated successfully:', response.data);
      } catch (error) {
        console.error('Error updating stock:', error);
      }
    };

    const handleClose = (e) => {
      handleRemoveStock();
      onClose(e);
    };

    return(
        <Modal show={show} onClose={handleClose} onCancel={onCancel} buttonStyle={styles.modalbutton_style} button_text='Update Stock'>
            <h4 className={styles.popup_header}>MINUS STOCK</h4>
            <div className={styles.product_update_content}>
                    <h6>Product Name:&nbsp;<span>{product?.name}</span></h6>
                    <h6>Current Stock:&nbsp;&nbsp;<span> 200</span></h6>
            </div>
            <input className={styles.input} placeholder='Reduce stock' value={stock} onChange={(e)=>setStock(e.target.value)}></input>
        </Modal>
    )
}

export default MinusStock