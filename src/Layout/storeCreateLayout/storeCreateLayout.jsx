import styles from './index.module.css'
import { Outlet, useNavigate } from 'react-router-dom';
import icons from '../../icons/icons';
import StoreDataNav from '../../Components/storeCreate/storeDatanav.jsx/storeDatanav';
const StoreCreateLayout=()=>{
    const navigate=useNavigate();
    return(
        <div className={styles.store_create_layout}>
            <h1>REWARDIFY</h1>
            <div className={styles.store_create_Container}>
                    <div className={styles.store_create_Layout_Form_Container}>
                            <div className={styles.move_back} onClick={(e)=>navigate(-1)}>{icons.leftpointarrow} Back</div>
                            <div className={styles.store_create_Layout_Form_Container_header}>Start your Onboarding Process with Us</div>
                            <div className={styles.store_create_Layout_Form_Container_para}>Kindly fill the all information correctly to get onboarded quickly with REWARDIFY</div>
                            <div className={styles.store_create_form}>
                                <StoreDataNav/>
                                <div className={styles.store_create_form_different_form}><Outlet/></div>
                           </div>
                    </div>
             </div>
        </div>
    )
}

export default StoreCreateLayout;