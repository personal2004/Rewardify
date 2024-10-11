import styles from './index.module.css';
import { Form,Formik } from 'formik';
import FormikControl from '../../../formikComponent/formikControl';
import { storeCreateValues,storeCreatevalidationSchema } from '../../../../utils/formcons';
import icons from '../../../../icons/icons'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ProShopDetailCard=()=>{
    const shop=useSelector((state)=>state.user.user);
    const location=useLocation()
    useEffect(()=>{
        if(location.pathname==='/home/profile/shopdetail' && shop){
        storeCreateValues.storeName=shop?.store?.name;
        const address = shop?.store?.address;
        if (address) {
            storeCreateValues.storeaddress = `${address.line1}, ${address.line2}, ${address.city}, ${address.state}, ${address.pincode}, ${address.country}`;
        }       
        storeCreateValues.storenum=shop?.store?.contactNo;
        }
    },[location.pathname,shop])
    return(
        <div className={styles.ProShopDetailCard}>
        <h4 className={styles.pocard_header}>Shop Details</h4>
        <p className={styles.po_para}>Here you can view and edit your details.</p>
        <Formik initialValues={storeCreateValues} validationSchema={storeCreatevalidationSchema} >
            {(formik)=>{
            return(
                <Form className={styles.storeinfo_Form} >
                    <FormikControl className={styles.form_control} control='input' placeholder='Store Name' name='storeName'/>
                    <FormikControl className={styles.form_control} control='input' placeholder='Store Full Address' name='storeaddress'/>
                    <FormikControl className={styles.form_control} control='input' placeholder='Store Contact Number' name='storenum'/>
                    <h3>Map Location <span>{icons.rightpointarrow}</span></h3>
                </Form>                
            )}}
        </Formik>
        </div>
    )

}

export default ProShopDetailCard