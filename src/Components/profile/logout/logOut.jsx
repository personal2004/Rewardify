import styles from './index.module.css';
import Modal from '../../modal/modal';
import { logout } from '../../../img/images';
import { useNavigate } from 'react-router-dom';
import ProfileAbout from '../aboutrewar/aboutrewardify'
const LogOut=()=>{
    const navigate=useNavigate();
    const onClose=()=>{
        localStorage.setItem('authToken', '');
        localStorage.setItem('refreshToken','');
        navigate('/')
      }
   const onCancel=()=>{
     navigate(-1)
   }
    return(
      <>
        <ProfileAbout/>
        <Modal show={true} onClose={onClose} onCancel={onCancel} buttonStyle={styles.modalbutton_style} button_text='Logout'>
          <div className={styles.imageContainer}><img src={logout} alt="Handshake" style={{width:'70px',height:'50px'}}/></div>         
          <div className={styles.popup_header}>Please Confirm</div>
          <div className={styles.popup_para}>Do you really want to Logout from REWARDIFY?</div>
        </Modal>
      </>
    )
}
export default LogOut