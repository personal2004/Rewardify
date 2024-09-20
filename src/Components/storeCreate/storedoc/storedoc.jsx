import styles from './index.module.css';
import { Formik,Form } from 'formik';
import FormikControl from '../../formikComponent/formikControl';

const StoreDoc=()=>{
    return(
        <>
           <div className={styles.docstorform_header} >Store Documents</div>
            <Formik >
              {(formik)=>{
                return(
                  <Form className={styles.PanDetail_Form} >
                  <FormikControl className={styles.form_control} control='input' placeholder='Store/Owner PAN' name='ownername'/>
                  <FormikControl className={styles.form_control} control='input' placeholder='GSTIN' name='shopname'/>
                  {/* <FormikControl className={styles.form_control} control='checkbox' label='I don’t have a GSTIN'/> */}
                  </Form>
                )
              }}
            </Formik>
        </>
    )
}
export default StoreDoc