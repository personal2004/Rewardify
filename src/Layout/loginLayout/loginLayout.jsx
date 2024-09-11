import './index.css';
import { LoginBackground } from '../../img/images';

const LoginLayout = ({ children }) => {
    return (
        <>
        <img className='login_Layout' src={LoginBackground} alt='Loading'/>
        <div className="login_Layout_Form">
            {children}
        </div>
        </>
    );
}

export default LoginLayout;