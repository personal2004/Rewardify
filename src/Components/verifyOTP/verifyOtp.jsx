import './index.css';
import { LoginLogo} from '../../img/images';
import { useNavigate } from 'react-router-dom';

const VerifyOtp=()=>{
    const navigate=useNavigate();
    return(
        <div className='login_verify'>
            <img src={LoginLogo} alt='icon'/>
            <h6>Verify your details</h6>
            <p>Enter OTP number below</p>
            <div className='login_verify_content_input'>
                
            </div>
            <div className='login_verify_content'>
                <button>Verify and Continue</button>
                <p>Didn’t receive OTP?  Resend in 0:55</p>
            </div>
        </div>
    );
}

export default VerifyOtp;
