import './index.css';
import { LoginBackground } from '../../img/images';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div className='login_page'>
        <img className='login_Layout' src={LoginBackground} alt='Loading'/>
        <div className="login_Layout_Form">
            <Outlet/>
        </div>
        </div>
    );
}

export default LoginLayout;