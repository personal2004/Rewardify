import styles from './index.module.css'
import {storeStartLogo,rightIndicateArrow} from '../../img/images'
import { Outlet, useNavigate } from 'react-router-dom';

const StoresStartLayout=()=>{
    const navigate=useNavigate()
    return(
        <div className={styles.stores_start_layout}>
            <h1>REWARDIFY</h1>
            <img src={storeStartLogo} alt='Loading...'/>
            <div className={styles.stores_start_Layout_Form}>
              <div className={styles.stores_start_form}>
              <h3 className={styles.Contact_Form_header}>Contact Form</h3>
              <p className={styles.Contact_Form_para}>Fill the contact form, One of our executives will reach out to you Shortly</p>
                        <Outlet/>
              </div>
              <div className={styles.stores_details_card_layout}>
                    <div className={styles.stores_details_header}>Enter Store details</div>
                    <div className={styles.stores_details_para}>Enter details Manually to get started into REWARDIFY</div>
                    <div className={styles.stores_details_button} onClick={(e)=>navigate('/storeCreation')}>
                            <button>Get Started</button>
                            <img src={rightIndicateArrow} alt='->'/>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default StoresStartLayout;