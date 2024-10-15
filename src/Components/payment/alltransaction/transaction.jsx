import icons from '../../../icons/icons';
import style from './index.module.css';

const Transaction=()=>{
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