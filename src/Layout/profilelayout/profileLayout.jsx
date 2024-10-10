import style from'./index.module.css';
import icons from '../../icons/icons';
import { NavLink, Outlet } from 'react-router-dom';
const ProfileLayout=()=>{
    return(
        <div className={style.ProfileLayout}>
            <header>My Profile</header>
            <div className={style.ProfileContain}>
                <div className={style.ProfileNavBar}>
                     <NavLink to='/home/profile' end className={({ isActive }) => isActive ? style.active : ''}><span>{icons.profile}</span>Profile Details</NavLink>
                     <NavLink  to='/home/profile/shopdetail' end className={({ isActive }) => isActive ? style.active : ''}><span>{icons.shop}</span>Shop Details</NavLink>
                     <NavLink  to='/home/profile/wallet' end className={({ isActive })=> isActive? style.active : '' }><span>{icons.wallet}</span>My Wallet</NavLink>
                     <NavLink  to='/home/profile/aboutrewardify'end className={({ isActive })=> isActive? style.active : '' }><span>{icons.notifi}</span>About REWARDIFY</NavLink>
                     <NavLink  to='/home/profile/logout' end className={({ isActive })=> isActive? style.active : '' }><span>{icons.logout}</span>Logout</NavLink>
                </div>
                <div className={style.ProfileMain}><Outlet/></div>
            </div>
        </div>
    )
}

export default ProfileLayout