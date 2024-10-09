import styles from './index.module.css';
import icons from '../../icons/icons';
import { coin,handrupees,bellnotify,profileicon } from '../../img/images';
import React from 'react';
import { useSelector } from 'react-redux';

const NavBar=React.memo(({navbarVisible,togglesideBar})=>{
   const user = useSelector((state) => state.user.user);
    return(
        <>  
          <div className={styles.nav_header}>
                    <h3 className={navbarVisible===true ? styles.nav_menubar_display : styles.nav_menubar_notdisplay} 
                    onClick={togglesideBar}>{icons.menubar}</h3>
                    <h2 className={styles.nav_header_websiteName}>REWARDIFY</h2>
                    <h3 className={styles.nav_header_userNme}>Welcome, {user?.name ?? 'Visitor'}👋</h3>
            </div>
            <div className={styles.navbar_content}>
                    <div className={styles.nav_coin}>XCoins: 300 <img src={coin} alt='Coin'/></div>
                    <img src={handrupees} alt=''/>
                    <img src={bellnotify} alt=''/>
                    <img src={profileicon} alt=''/>
            </div>
        </>
    );
}
);
export default NavBar