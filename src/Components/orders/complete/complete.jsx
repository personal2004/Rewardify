import style from './index.module.css';
import { useSelector } from 'react-redux';
import icons from '../../../icons/icons';

const CompleteOrder=()=>{

    const orders=useSelector((state)=>state.userorder.complete);

    return(
        <>
         {orders.map((order)=>{
            return(
            <div className={style.PackOrders} key={order._id}>
                <h3>Delivered Completed:</h3>
                <h4 className={style.order_id}>Order Id: {order._id}</h4>

                <div className={style.username}>                            
                    <div className={style.icon}>{icons.profile}</div>
                    <h4>{order.name}</h4>

                </div>
                <div className={style.contacts}>
                     <div className={style.contact_number}>
                           <div className={style.icon}>{icons.phoneoutline}</div>
                           <h4>+918526547512</h4>
                     </div>
                     <div className={style.contact_number}>
                           <div className={style.icon}>{icons.locationpoint}</div>
                           <h4>27, Goragandhi Apartments, S V P Road, Near Rlye nagar Station, Borivali (west), Coimbatore</h4>
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

export default CompleteOrder