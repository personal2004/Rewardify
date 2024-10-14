import style from './index.module.css';
import api from '../../utils/apiinstance';
import { GET_LIST_PAYMENT } from '../../utils/api';
import { useEffect } from 'react';

const Payment=()=>{
    const getpayment=async()=>{
        try {
            const response = await api.post(GET_LIST_PAYMENT,{
              limit: 20, 
              pageNo: 1 ,
          });
          console.log(response?.data)
        //   dispatch(setorders(response?.data?.data));
          }catch (error) {
             console.error('Error generating OTP:', error);
          }      
        }
    useEffect(()=>{
        if( localStorage.getItem('authToken')){
            getpayment()
        }
       },[])
    return(
        <div className={style.Payment_container}>
            <div className={style.Payment_container_header}>
                <h4>Recent Transaction</h4>
                <p>Last Update at: June 02, 2024 | 11:25 PM</p>
            </div>
        </div>
    )
}
export default Payment