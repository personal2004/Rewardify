import './index.css';
import { LoginLogo,  dot3with1black} from '../../img/images';
import { useNavigate } from 'react-router-dom';

const LoginStart=()=>{
    const navigate=useNavigate();
    return(
        <div className='login_start'>
            <img src={LoginLogo} alt='icon'/>
            <h6>Grow your Business Exponentially!</h6>
            <p>Pay less on each transaction you make with our App.</p>
            <div className='login_start_dot'><img src={dot3with1black} alt='Loading...'/></div>
            <div className='login_start_content'>
                <button className='login_start_loginbutton' onClick={()=>navigate('login')}>Login</button>
                <button className='login_start_contactbutton'>Contact Us</button>
                <p>By clicking, you agree to our Terms & Conditions and Privacy Policy.</p>
            </div>
        </div>
    );
}

export default LoginStart;