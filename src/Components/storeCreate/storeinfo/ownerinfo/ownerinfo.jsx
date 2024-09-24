import { Formik,Form } from "formik";
import styles from './index.module.css' 
import FormikControl from "../../../formikComponent/formikControl";
import { storeCreateValues,storeCreatevalidationSchema,WhatsappCheckOption } from "../../../../constant/formcons";
const Ownerinfo=()=>{
    return(
        <Formik initialValues={storeCreateValues} validationSchema={storeCreatevalidationSchema} >
        {(formik)=>{
          return(
            <Form className={styles.OwnerInfo_Form} >
                    <h3 className={styles.docinfocard_header} >Owner Information</h3>
                    <FormikControl className={styles.form_control} control='input' placeholder='Owner’s Name' name='ownerName'/>
                    <FormikControl className={styles.form_control} control='input' placeholder='Email Address' name='ownerEmail'/>
                    <div className={styles.input_with_button}>
                    <FormikControl className={styles.phonenu_control} control='input' placeholder='Mobile Number' name='ownerphonenu' />
                    <span className={styles.phone_verify_button}>Verify</span>
                    </div>
                    <hr className={styles.dotted_Line}/>
                    <FormikControl className={styles.checkbox_control} optiondivname={styles.checkbox_option} control='checkbox' 
                    name='whatsappnumber' options={WhatsappCheckOption}
                    label={<span>By providing your <strong>Whatsapp Number</strong> to get updates on payments, order confirmation etc</span>}  />
            </Form>)
              }}
            </Formik>
    )
}

export default Ownerinfo