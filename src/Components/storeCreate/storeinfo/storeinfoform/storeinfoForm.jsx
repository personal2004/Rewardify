import { Form,Formik } from "formik";
import styles from './index.module.css';
import { storeCreateValues,storeCreatevalidationSchema } from "../../../../utils/formcons";
import FormikControl from "../../../formikComponent/formikControl";
import { useState } from "react";
const StoreInfoForm=()=>{
  const [verifystorenum,setStorenum]=useState(false);
    return(
        <Formik initialValues={storeCreateValues} validationSchema={storeCreatevalidationSchema} >
        {(formik)=>{
          return(
        <Form className={styles.storeinfo_Form} >
        <h3 className={styles.docinfocard_header} >Store Information</h3>
        <FormikControl className={styles.form_control} control='input' placeholder='Store Name' name='storename'/>
        <FormikControl className={styles.form_control} control='input' placeholder='Store Full Address' name='storeaddress'/>
        <div className={styles.store_num}><input type='checkbox' name='checkbox'/><label htmlFor='checkbox'>Same as my contact number</label></div>
        <div className={styles.input_with_button}>
        <FormikControl className={styles.phonenu_control} control='input' placeholder='Store Contact Number' name='storenum'/>
        <span className={styles.phone_verify_button} onClick={()=>setStorenum(!verifystorenum)}>Verify</span>
        {verifystorenum &&  
                    <> 
                          <p>Verification code has send to your mobile number</p>      
                          <div className={styles.phone_verify_content_input}>
                            <FormikControl className={styles.otp_control} control='input' name='otp1' maxLength='1'type="text"/>
                            <FormikControl className={styles.otp_control} control='input' name='otp2' maxLength='1'type="text"/>
                            <FormikControl className={styles.otp_control} control='input' name='otp3' maxLength='1'type="text"/>
                            <FormikControl className={styles.otp_control} control='input' name='otp4' maxLength='1'type="text"/>
                          </div>
                          <h6>Didn’t receive OTP?  Resend in 0:55</h6>
                    </>
          }
        </div>
        <h3>Add Store Location </h3>
         </Form>                
         )}}
            </Formik>
    )
}
export default StoreInfoForm