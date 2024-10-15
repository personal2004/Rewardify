import Styles from './index.module.css';
import QuickAction from '../../Components/quickAction/quickAction';
import Payment from '../../Components/payment/layout/payment'
import OrderLayout from '../ordersLayout/orderLayout';
import ConfirmOrders from '../../Components/orders/confirm/confirmorder';
import { useLocation } from 'react-router-dom';
import PrepareOrders from '../../Components/orders/prepare/prepareOrder'
import PackOrder from '../../Components/orders/pack/pack';
import CompleteOrder from '../../Components/orders/complete/complete';
const DashBoardLayout=()=>{
 const location=useLocation();
 const isdashpage=location.pathname==='/home';
 const isorderPrepare=location.pathname==='/home/prepare';
 const ispack=location.pathname==='/home/pack';
 const iscomplete=location.pathname==='/home/complete';
return(
   <div className={Styles.DashBoardLayout}>
      <div className={Styles.DashBoardLayout_payment_box}>
        <QuickAction/>
        <Payment/>
      </div>
      <div className={Styles.DashBoardLayout_Order}>
        <OrderLayout path='/home'/>
        <div className={Styles.order_show}>
          {isdashpage && <ConfirmOrders/>}
          {isorderPrepare && <PrepareOrders/>}
          {ispack && <PackOrder/>}
          {iscomplete && <CompleteOrder/>}
        </div>
      </div>
    </div>
)
}

export default DashBoardLayout;