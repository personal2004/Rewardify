import { Form,Formik } from "formik";
import styles from './index.module.css';
import { storeCreateValues,storeCreatevalidationSchema } from "../../../../constant/formcons";
import FormikControl from "../../../formikComponent/formikControl";
const StoreInfoForm=()=>{
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
        <span className={styles.phone_verify_button}>Verify</span>
        </div>
        <h3>Add Store Location </h3>
         </Form>                
         )}}
            </Formik>
    )
}
export default StoreInfoForm