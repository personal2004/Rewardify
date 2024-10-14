import SearchBar from '../../Components/searchbar/searchbar'
import style from './index.module.css'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import api from '../../utils/apiinstance'
import { GET_LIST_ORDERS} from '../../utils/api'
import { useDispatch } from 'react-redux'
import {setorders} from '../../utils/orderSlice';
import { useLocation } from 'react-router-dom'
const OrderLayout=({path='/home/orders'})=>{
    const dispatch=useDispatch()
    const location=useLocation()
    const isorderpage=location.pathname==='/home/orders';
    const getorders=async()=>{
        try {
            const response = await api.post(GET_LIST_ORDERS,{
              limit: 20, 
              pageNo: 1 ,
          });
          dispatch(setorders(response?.data?.data));
          }catch (error) {
             console.error('Error generating OTP:', error);
          }      
        }
    useEffect(()=>{
        if( localStorage.getItem('authToken')){
            getorders()
        }
       },[])
    return(
        <div className={style.OrderLayout}>
          <div className={style.OrderLayout_header_search}>
                <div className={style.OrderLayout_header}>
                  <h4>My Orders</h4>
                   <p>Last Update at: June 02, 2024 | 11:25 PM</p>
                </div>
                { isorderpage && <SearchBar/>}
            </div>
            <div className={style.OrderNavBar}>
                     <NavLink to={path} end className={({ isActive }) => isActive ? style.active : ''}>Confirmation (6)</NavLink>
                     <NavLink  to={`${path}/1`} end className={({ isActive }) => isActive ? style.active : ''}>Preparing (4)</NavLink>
                     <NavLink  to={`${path}/2`} end className={({ isActive })=> isActive? style.active : '' }>Packed Orders (1)</NavLink>
                     <NavLink  to={`${path}/3`}end className={({ isActive })=> isActive? style.active : '' }>Completed (1)</NavLink>
            </div>
        </div>
    )
}

export default OrderLayout