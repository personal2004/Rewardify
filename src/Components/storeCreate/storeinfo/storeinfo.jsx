import styles from './index.module.css';
import { Form,Formik } from 'formik';
import{ storeCreateValues,storeCreatevalidationSchema} from '../../../constant/formcons';
import StoreScanCard from '../storescancard/storeScancard';
import Ownerinfo from './ownerinfo/ownerinfo';
import StoreInfoForm from './storeinfoform/storeinfoForm';
import WorkdayForm from './workingdayform/workingdayForm';

const StoreInfo=()=>{

    return(
        <>
           <div className={styles.docinfoform_header} >Store Documents</div>
            <Formik initialValues={storeCreateValues} validationSchema={storeCreatevalidationSchema} >
              {(formik)=>{
                return(
                  <div className={styles.docinfoform_Container}>
                    <Ownerinfo/>
                    <StoreInfoForm/>
                    <WorkdayForm/>
                    {/* <Form className={styles.workingdaysinfo_Form} >
                        <div className={styles.workingdays_header} >
                        <h3 className={styles.docinfocard_header} >Working Days</h3>
                         <h4>Select All</h4>
                        </div>
                        <FormikControl className={styles.checkbox_control} optiondivname={styles.checkbox_option} control='checkbox' options={WorkdaysCheckOption} name='workingdays'/>
                    </Form> */}
                    <Form className={styles.workingdaysinfo_Form} >
                        <h3 className={styles.docinfocard_header} >Working Time</h3>
                         <h5>Select the Opening & Closing Time</h5>
                    </Form>
                    <StoreScanCard/>
                  </div>
                )
              }}
            </Formik>
        </>
    )
}

export default StoreInfo