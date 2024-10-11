import { Outlet } from 'react-router-dom';
import NavBar from '../../Components/navbar/navBar';
import SideBar from '../../Components/sidebar/sideBar';
import styles from './index.module.css'
import { useState,useCallback,useEffect } from 'react';

const HomeLayout=()=>{

  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isMenuBarVisible, setMenuBarVisible] = useState(false);

  const toggleSideBar=useCallback(()=>{
      if(window.innerWidth <=870){
        setMenuBarVisible(!isMenuBarVisible);
        setSidebarVisible(!isSidebarVisible);
      }
  },[isSidebarVisible,isMenuBarVisible]);

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth > 870) {
            setSidebarVisible(true);
            setMenuBarVisible(false);
        }
        if (window.innerWidth < 870) {
          setSidebarVisible(false);
          setMenuBarVisible(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, [isMenuBarVisible,isSidebarVisible]);

    return(
        <div className={styles.HomeLayout}>
            <div className={styles.HomeLayout_Navbar}><NavBar navbarVisible={isMenuBarVisible} togglesideBar={toggleSideBar}/></div>
            <div className={styles.HomeLayout_Container}>
                {isSidebarVisible && <div className={styles.HomeLayout_Sidebar} onClick={toggleSideBar}>
                  <SideBar/>
                </div>}
                <div className={styles.HomeLayout_Main}>
                  <Outlet/>
                </div>
            </div>
        </div>
    )
}
export default HomeLayout;
