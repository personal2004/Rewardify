import styles from './index.module.css';
import { storeCardLogo} from '../../../img/images';
import { useNavigate } from 'react-router-dom';

const Stores=()=>{
      const navigate=useNavigate();
    return(
        <div className={styles.stores_choose}>
            <img src={storeCardLogo} alt='icon'/>
                <div className={styles.stores_choose_content}>
                    <h6>No stores are linked to this account</h6>
                    <p>Enter your account details correctly or register your store with us</p>
                </div>
                <div className={styles.login_start_content}>
                    <button className={styles.login_start_loginbutton} onClick={()=>navigate('/storestart')}>Register your store with us</button>
                    <button className={styles.login_start_contactbutton}>Login with different account</button>
                </div>
        </div>
    );
}

export default Stores