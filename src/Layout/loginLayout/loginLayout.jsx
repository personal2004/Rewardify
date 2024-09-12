import './index.css';
import { LoginBackground } from '../../img/images';

const LoginLayout = ({ children }) => {
    return (
        <div className='login_page'>
        <img className='login_Layout' src={LoginBackground} alt='Loading'/>
        <div className="login_Layout_Form">
            {children}
        </div>
        </div>
    );
}

export default LoginLayout;