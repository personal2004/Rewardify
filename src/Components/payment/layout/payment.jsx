import style from './index.module.css';
import { useState } from 'react';
import Transaction from '../alltransaction/transaction';
import Settlement from '../settlement/settlement';
const Payment=()=>{
    const [isActive,setisActive]=useState(true);
  
    return(
        <div className={style.Payment_container}>
            <div className={style.Payment_container_header}>
                <h4>Recent Transaction</h4>
                <p>Last Update at: June 02, 2024 | 11:25 PM</p>
            </div>
            <div className={style.payment_nav}>
                <div onClick={()=>setisActive(!isActive)} className={isActive ? style.active :style.nonactive}>All Transaction</div>
                <div onClick={()=>setisActive(!isActive)} className={ !isActive ? style.active :style.nonactive}>Settlements</div>
            </div>
            {isActive && <Transaction/>}
            {!isActive && <Settlement/>}
        </div>
    )
}
export default Payment