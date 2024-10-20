import styles from './index.module.css';
import {Formik } from 'formik';
import{ storeCreateValues,storeCreatevalidationSchema} from '../../../utils/formcons';
import StoreScanCard from '../storescancard/storeScancard';
import Ownerinfo from './ownerinfo/ownerinfo';
import StoreInfoForm from './storeinfoform/storeinfoForm';
import WorkdayForm from './workingdayform/workingdayForm';
import StoreTime from './storetime/storeTime';
import { useNavigate } from 'react-router-dom';

const StoreInfo=()=>{
    const navigate=useNavigate();
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
                    <button className={styles.continue_button} onClick={()=>navigate('/storeCreation/storedocs')}>Continue</button>
                  </div>
                )
              }}
            </Formik>
        </>
    )
}

export default StoreInfo