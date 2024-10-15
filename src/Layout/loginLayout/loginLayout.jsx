import styles from './index.module.css';
import { LoginBackground } from '../../img/images';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div className={styles.login_page}>
        <img className={styles.login_Layout} src={LoginBackground} alt='Loading' loading='lazy'/>
        <div className={styles.login_Layout_Form}>
            <Outlet/>
        </div>
        </div>
    );
}

export default LoginLayout;