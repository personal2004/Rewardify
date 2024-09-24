import styles from'./index.module.css';
import { NavLink } from 'react-router-dom';
import icons from '../../icons/icons'
const SideBar=()=>{
    return(
    <>
        <NavLink to="/home" end className={({ isActive }) => isActive ? styles.active : ''}><span>{icons.dashboard}</span>Dashboard</NavLink>  
        <NavLink to="/home/orders" className={({ isActive }) => isActive ? styles.active : ''}><span>{icons.order}</span>Orders</NavLink>  
        <NavLink to="/home/products"className={({ isActive }) => isActive ? styles.active : ''}><span>{icons.products}</span>My Products</NavLink>  
        <NavLink to="/home/profile" className={({ isActive }) => isActive ? styles.active : ''}><span>{icons.profile}</span>Profile</NavLink>  

    </>
    )
}

export default SideBar;