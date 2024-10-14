import Styles from './index.module.css';
import QuickAction from '../../Components/quickAction/quickAction';
import Payment from '../../Components/payment/payment';
import OrderLayout from '../ordersLayout/orderLayout';
const DashBoardLayout=()=>{

return(
   <div className={Styles.DashBoardLayout}>
      <div className={Styles.DashBoardLayout_payment_box}>
        <QuickAction/>
        <Payment/>
      </div>
      <div className={Styles.DashBoardLayout_Order}>
      <OrderLayout path='/home'/>

      </div>
    </div>
)
}

export default DashBoardLayout;