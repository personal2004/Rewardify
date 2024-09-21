import styles from './index.module.css';
import { Formik,Form } from 'formik';
import FormikControl from '../../formikComponent/formikControl';
import {storeCreateValues,storeCreatevalidationSchema,storeCreateCheckoption} from '../../../constant/formcons';
import StoreScanCard from '../storescancard/storeScancard';
const StoreDoc=()=>{

    return(
        <>
           <div className={styles.docstoreform_header} >Store Documents</div>
            <Formik initialValues={storeCreateValues} validationSchema={storeCreatevalidationSchema} >
              {(formik)=>{
                return(
                  <div className={styles.docform_Container}>
                    <Form className={styles.PanDetail_Form} >
                          <h3 className={styles.docstorecard_header} >Enter PAN & GSTIN details</h3>
                          <FormikControl className={styles.form_control} control='input' placeholder='Store/Owner PAN' name='storeOwnerPan'/>
                          <FormikControl className={styles.form_control} control='input' placeholder='GSTIN' name='GSTIN'/>
                          <FormikControl className={styles.checkbox_control} control='checkbox' name='GSTINStatus'options={storeCreateCheckoption}/>
                    </Form>
                    <Form className={styles.bankDetail_Form} >
                          <h3 className={styles.docstorecard_header} >Bank Details</h3>
                          <FormikControl className={styles.form_control} control='input' placeholder='Bank Name' name='bankname'/>
                          <FormikControl className={styles.form_control} control='input' placeholder='Bank Account Number' name='bankAccountNumber'/>
                          <FormikControl className={styles.form_control} control='input' placeholder='Bank IFSC Code' name='bankIFSCCode'/>
                    </Form>
                    <StoreScanCard/>
                  </div>
                )
              }}
            </Formik>
        </>
    )
}
export default StoreDoc