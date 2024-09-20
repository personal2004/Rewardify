import styles from './index.module.css'
import { Outlet } from 'react-router-dom';

const StoreCreateLayout=()=>{
    return(
        <div className={styles.store_create_layout}>
            <h1>REWARDIFY</h1>
            <div className={styles.store_create_Container}>
              <div className={styles.store_create_Layout_Form_Container}>
               <Outlet/>
              </div>
            </div>
        </div>
    )
}

export default StoreCreateLayout;