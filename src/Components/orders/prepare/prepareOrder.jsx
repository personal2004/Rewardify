import style from './index.module.css';
import icons from '../../../icons/icons';
import { useDispatch, useSelector } from 'react-redux';
import {packorders} from '../../../utils/orderSlice';
const PrepareOrders=()=>{
    
   const orders=useSelector((state)=>state.userorder.prepareorders);
   const dispatch=useDispatch();

  const ConfirmPack=(order)=>{
    dispatch(packorders(order))
  }

 return(
    <>
        {orders.map((order)=>{
            return(
            <div className={style.PrepareOrders} key={order._id}>
                <div className={style.row_items}>
                    <h4 className={style.order_id}>Order Id: {order._id}</h4>
                    <h4>Date: {order.date}</h4> 
                </div>
                <div className={style.order_user}>
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
               <div className={style.row_order_items}>
                <h3 >Order Items:</h3>
                {order.order.map((items,index)=>{
                    return(
                        <div className={style.row_items} key={index}>
                            <h4>{items.count}{' x  '}{items.item}</h4>
                            <h4>{items.price}</h4>
                        </div>
                    )
                })}
               </div>
                <div className={style.row_items_total}>
                    <h3>Total Bill Amount</h3>
                    <h4>{order.total_price}</h4>
                </div>
                <button className={style.order_Verifyconfirm} onClick={()=>ConfirmPack(order)}>Verify & Pack Items</button>
        </div>)})}
    </>
 )
}
export default PrepareOrders;