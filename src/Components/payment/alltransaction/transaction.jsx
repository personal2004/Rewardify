import icons from '../../../icons/icons';
import style from './index.module.css';
import { useEffect } from 'react';
import api from '../../../utils/apiinstance';
import { GET_LIST_PAYMENT } from '../../../utils/api';

const Transaction=()=>{

  
    useEffect(()=>{
        const getpayment=async()=>{
            try {
              const response = await api.post(GET_LIST_PAYMENT);
              }catch (error) {
                 console.error('Error generating OTP:', error);
              }      
            }
            getpayment()
       },[])
    return(
        <>
    <div className={style.Transaction}>

        <div className={style.Transaction_payment}>
            <div className={style.payment_container}>
                <div className={style.icons_profile}>{icons.profile}</div>
                <div className={style.payment_detail}>
                    <h4>+918956598562 Send a Payment</h4>
                    <h5>Paid on Apr 11, 2024 at 4:30PM</h5>
                    <h6>Paid via QR Scan</h6>
                    <p>2hr ago</p>
               </div>
           </div>
           <h4 className={style.price}>+₹500.00</h4>
        </div>
    </div>
    
    </>
    )
}

export default Transaction