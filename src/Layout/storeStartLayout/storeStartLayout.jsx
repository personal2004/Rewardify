import styles from './index.module.css'
import {storeStartLogo,rightIndicateArrow} from '../../img/images'
import { Outlet } from 'react-router-dom';

const StoresStartLayout=()=>{
    return(
        <div className={styles.stores_start_layout}>
            <h1>REWARDIFY</h1>
            <img src={storeStartLogo} alt='Loading...'/>
            <div className={styles.stores_start_Layout_Form}>
              <div className={styles.stores_start_form}>
                        <Outlet/>
              </div>
              <div className={styles.stores_details_card_layout}>
                    <div className={styles.stores_details_header}>Enter Store details</div>
                    <div className={styles.stores_details_para}>Enter details Manually to get started into REWARDIFY</div>
                    <div className={styles.stores_details_button}>
                            <button>Get Started</button>
                            <img src={rightIndicateArrow} alt='->'/>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default StoresStartLayout;