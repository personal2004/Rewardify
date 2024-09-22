import { Form } from "formik";
import { scanindicateimg } from "../../../img/images";
import styles from './index.module.css';
import { useState } from "react";
import Modal from "../../modal/modal";
import { useNavigate } from "react-router-dom";
import { camera } from "../../../img/images";
const StoreScanCard=()=>{
    const [showModal, setShowModal] = useState(false);
    const navigate=useNavigate();
    const onClose=(e)=>{
        setShowModal(false)
        navigate(1)
      }
    return(
        <Form className={styles.QRScan_Form} >
        <h3 className={styles.docstorecard_header} >Scan Store QR Code </h3>
        <p className={styles.docscancard_para}>Scan the store’s QR Code. It will help the customer to make the payments easy and faster.</p>
        <div className={styles.docscancard}>
             <img src={scanindicateimg} alt='scanimg' onClick={(e)=>setShowModal(true)}/>
             <div>
               <h3>Scan QR Code</h3>
               <p>take a Picture from the Camera to upload the QR Code</p>
             </div>
        </div>
        <Modal show={showModal} onClose={onClose} buttonStyle={styles.modalbutton_style} button_text='Submit'>
              <div className={styles.imageContainer}><img src={camera} alt="Handshake" style={{width:'70px',height:'50px'}}/></div>         
              
        </Modal>
 </Form>
    )
}

export default StoreScanCard;