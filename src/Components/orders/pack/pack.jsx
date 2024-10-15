import style from './index.module.css';
import icons from '../../../icons/icons';
import { useSelector } from 'react-redux';

const PackOrder=()=>{
    const orders=useSelector((state)=>state.userorder.pack);

return(
    <>
            {orders.map((order)=>{
            return(
            <div className={style.PackOrders} key={order._id}>
                <h3>Ready for delivery:</h3>
                <h4 className={style.order_id}>Order Id: {order._id}</h4>
                <div className={style.order_user}>
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
                <div className={style.order_status_container}>
                    <div className={style.row_items}>
                        <div className={style.pack_status}>
                            <span className={style.pointer}></span>
                            <h2>Store Confirmation</h2>
                        </div>
                        <h4>{order.date} | 02:00PM</h4> 
                    </div>
                    <div className={style.row_items}>
                        <div className={style.pack_status}>
                            <span className={style.pointer}></span>
                            <h2>Delivery Accepted</h2>
                        </div>
                        <h4>{order.date} | 03:00PM</h4> 
                    </div>                 <div className={style.row_items}>
                        <div className={style.pack_status}>
                            <span className={style.pointer}></span>
                            <h2>Delivery Pickup</h2>
                        </div>
                        <h4>{order.date} | 03:00PM</h4> 
                    </div>
                </div>
        </div>)})}
    </>
)
}
export default PackOrder
