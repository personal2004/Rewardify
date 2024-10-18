import style from './index.module.css';
import {LoginLogo} from '../../../img/images'
import { useEffect } from 'react';
import { List_ALL_SETTLEMENT } from '../../../utils/api';
import api from '../../../utils/apiinstance';

const Settlement=()=>{

    useEffect(()=>{
        const getallsettlement=async()=>{
            try{
                const response=await api.post(List_ALL_SETTLEMENT);
                 console.log(response?.data)
            }catch(error){
                console.log("Error in getting settlement",error.message)
            }
        }
        getallsettlement()
    },[])

    return(
        <div className={style.Settlement}>
         
        <div className={style.Transaction_payment}>
            <div className={style.payment_container}>
                <div className={style.icons_profile}><img src={LoginLogo} loading='lazy' alt='logo'></img></div>
                <div className={style.payment_detail}>
                    <h4>Weekly Settlements(10 Apr - 17 Apr)</h4>
                    <h5>Paid on Apr 11, 2024 at 4:30PM</h5>
                    <h6>REWARDIFY(weekly Settlement)</h6>
                    <p>1week ago</p>
                </div>
            </div>
            <div>
                <h4 className={style.price_in_red}>-₹500.00</h4>
                <h4 className={style.price_in_green}>Paid</h4>
                <h4 className={style.price_in_red}>View</h4>
            </div>
        </div>

        </div>
    )
}

export default Settlement