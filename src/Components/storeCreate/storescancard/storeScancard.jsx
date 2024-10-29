import { Form } from "formik";
import { scanindicateimg } from "../../../img/images";
import styles from './index.module.css';
import { useState } from "react";
import Modal from "../../modal/modal";
import { useNavigate } from "react-router-dom";
import { camera } from "../../../img/images";
import QrReader from 'react-qr-scanner';
import { BiBorderRadius } from "react-icons/bi";

const StoreScanCard=()=>{
    const [showModal, setShowModal] = useState(false);
    const [showupiModal, setupiShowModal] = useState(false);

    const navigate=useNavigate();
    const onClose=(e)=>{
        setShowModal(false)
        navigate(1)
      }
      const [result, setResult] = useState('No result');
      const [delay] = useState(100);
    
      const handleScan = (data) => {
        if (data) {
          const qrText = data.text || 'No result';
          const urlParams = new URLSearchParams(qrText.split('?')[1]);
          const upiId = urlParams.get('pa') || 'No UPI ID found';
          setResult(upiId);
          if(upiId==='No UPI ID found'){
            setShowModal(true)
          }else{
            setShowModal(false);
            setupiShowModal(true);
            navigate(1)

          } 
        }
      };
    
      const handleError = (err) => {
        console.error(err);
      };
    
      const previewStyle = {
        paddingTop:23,
        height: 200,
        maxWidth: 268,
      };

    const handleupisubmit=()=>{
      setupiShowModal(false)
    }
  
    const handlerescan=()=>{
      setResult('');
      setupiShowModal(false)
      setShowModal(true)
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
        <Modal show={showModal}  buttonStyle={styles.scanbutton_style}>
              <div className={styles.imageContainer}><img src={camera} alt="Handshake" style={{width:'70px',height:'50px'}}/></div>         
            <QrReader delay={delay} style={previewStyle} onError={handleError} onScan={handleScan}/>
        </Modal>
        <Modal show={showupiModal}  buttonStyle={styles.scanbutton_style}>
              <div className={styles.imageContainer}><img src={camera} alt="Handshake" style={{width:'70px',height:'50px'}}/></div>
              <h4 className={styles.upi_header}>Scan Your UPI</h4>
              <div className={styles.upi_input_container} >
              <label htmlFor="upicode"className={styles.upi_label}>Store’s UPI:</label>
              <input id="upicode" className={styles.upi_label_input}value={result}/>
              </div>    
              <div className={styles.upibutton}>
                <button className={styles.upi_scanbutton} onClick={handlerescan}>Re - Scan UPI</button>
                <button className={styles.upi_confirmbutton} onClick={handleupisubmit}>Confirm UPI</button>
              </div>
        </Modal>
 </Form>
    )
}

export default StoreScanCard;