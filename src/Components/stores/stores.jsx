import './index.css';
import { storeCardLogo} from '../../img/images';
import { useNavigate } from 'react-router-dom';
const Stores=()=>{
      const navigate=useNavigate();
    return(
        <div className='stores_choose'>
            <img src={storeCardLogo} alt='icon'/>
                <div className='stores_choose_content'>
                    <h6>No stores are linked to this account</h6>
                    <p>Enter your account details correctly or register your store with us</p>
                </div>
                <div className='login_start_content'>
                    <button className='login_start_loginbutton' onClick={()=>navigate('/storestart')}>Register your store with us</button>
                    <button className='login_start_contactbutton'>Login with different account</button>
                </div>
        </div>
    );
}

export default Stores