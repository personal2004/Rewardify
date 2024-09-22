import styles from './index.module.css';
import { Form,Formik } from 'formik';
import{ storeCreateValues,storeCreatevalidationSchema} from '../../../constant/formcons';
import StoreScanCard from '../storescancard/storeScancard';
import Ownerinfo from './ownerinfo/ownerinfo';
import StoreInfoForm from './storeinfoform/storeinfoForm';
import WorkdayForm from './workingdayform/workingdayForm';
import StoreTime from './storetime/storeTime';

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
                    <StoreTime/>
                    <StoreScanCard/>
                  </div>
                )
              }}
            </Formik>
        </>
    )
}

export default StoreInfo