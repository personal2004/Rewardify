import styles from './index.module.css'
import Modal from '../../../modal/modal';
import icons from '../../../../icons/icons';
import FormikControl from '../../../formikComponent/formikControl.jsx';
import { Formik,Form } from 'formik';

const PreparedOrders=({show,onClose,onCancel,order})=>{

    const handleClose = (e) => {
      onClose(e,order);
    };
    
    const prepareditem={
      item:[]
    }
    const Checkoption=[
      {key:'1 x Ooty apple', value:'1 x Ooty apple'},{key:'5 x White Egg', value:'5 x White Egg'}
    ]

     return(        
      <Modal show={show} onClose={handleClose} onCancel={onCancel} modalstyle='hi' buttonStyle={styles.modalbutton_style} button_text='Ready for Delivery'>
            <h1 className={styles.popup_header}>Order Confirmation</h1>
            <div className={styles.verify_container}>
                  <div className={styles.PackOrders} >
                    <div className={styles.headerwithdate}>
                      <h4 className={styles.order_id}>Order Id: {order._id}</h4>
                      <h4>Date: {order.date}</h4> 
                    </div>
                    <div className={styles.order_user}>
                      <h3>Order for:</h3>
                      <h4>{order.name}</h4>
                      <div className={styles.contacts}>
                        <div className={styles.contact_number}>
                              <div className={styles.icon}>{icons.phoneoutline}</div>
                              <h4>+918526547512</h4>
                        </div>
                        <div className={styles.contact_number}>
                              <div className={styles.icon}>{icons.locationpoint}</div>
                              <h4>R S Puram, Coimbatore</h4>
                        </div>
                      </div>
                    </div>
                    <div className={styles.order_status_container}>
                        <div className={styles.row_items}>
                            <div className={styles.pack_status}>
                                <span className={styles.pointer}></span>
                                <h2>Order Placed</h2>
                            </div>
                            <h4>{order.date} | 02:00PM</h4> 
                        </div>
                        <div className={styles.row_items}>
                            <div className={styles.pack_status}>
                                <span className={styles.pointer}></span>
                                <h2>Order Confirmed</h2>
                            </div>
                            <h4>{order.date} | 05:00PM</h4> 
                        </div>                 
                    </div>
               </div>

               <div  className={styles.PackOrders} >
                <h4 className={styles.order_id}>Verify all the items - 06 Items</h4>
                <Formik initialValues={prepareditem}  enableReinitialize>
                  <Form className={styles.item_contain} >
                    <FormikControl  className={styles.item_name} optiondivname={styles.checkbox_option} control='checkbox' name='item' options={Checkoption}/>
                    <div className={styles.item_price}>
                      <p>100</p>
                      <p>100</p>
                    </div>
                  </Form>
               </Formik>        
               </div>

            </div>         
        </Modal>
    )
}

export default PreparedOrders