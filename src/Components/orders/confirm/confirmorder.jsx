import { useEffect } from 'react';
import style from './index.module.css';
import { useDispatch } from 'react-redux';
// import {setorders} from '../../../utils/orderSlice';
import { confirmorders } from '../../../utils/orderSlice';
import { useSelector } from 'react-redux';
import icons from '../../../icons/icons';

const ConfirmOrders=()=>{
    const dispatch=useDispatch();
    const orders=useSelector((state)=>state.userorder.orders);

    const handleConfirmOrder=(order)=>{
          dispatch(confirmorders(order));
        }

        useEffect(()=>{
        //  when we get Orders from api insted of dummy data we can dispatch it here
        //   dispatch(setorders(Orders));
        },[])

    return(
        <>
        {orders.map((order)=>{
            return(
            <div className={style.ConfirmOrders} key={order._id}>
                <div className={style.row_items}>
                    <h4 className={style.order_id}>Order Id: {order._id}</h4>
                    <h4>Date: {order.date}</h4> 
                </div>
                <div>
                <h3 >Order for:</h3>
                <h4>{order.name}</h4>
                <div className={style.contacts}>
                     <div className={style.contact_number}>
                           <div className={style.icon}>{icons.phoneoutline}</div>
                           <h4>+918526547512</h4>
                     </div>
                     <div className={style.contact_number}>
                           <div className={style.icon}>{icons.locationpoint}</div>
                           <h4>R S Puram, Coimbatore</h4>
                     </div>
                </div>
                </div>
                <h3 >Order Items:</h3>

                {order.order.map((items,index)=>{
                    return(
                        <div className={style.row_items} key={index}>
                            <h4>{items.count}{' x  '}{items.item}</h4>
                            <h4>{items.price}</h4>
                        </div>
                    )
                })}

                <div className={style.row_items}>
                    <h3>Total Bill Amount</h3>
                    <h4>{order.total_price}</h4>
                </div>
                <div className={style.row_items}>
                    <button className={style.order_reject}>Reject Order</button>
                    <button className={style.order_confirm} onClick={()=>handleConfirmOrder(order)}>Confirm Order</button>
                </div>
        </div>)})}
</>
    )
}
export default ConfirmOrders;