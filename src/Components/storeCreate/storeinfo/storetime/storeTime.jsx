import React from 'react';
import styles from './index.module.css';
import { Form,Formik } from 'formik';
import { storeCreateValues,storeCreatevalidationSchema } from '../../../../utils/formcons';
import TimePicker from '../../../timePicker/TimePicker';
const StoreTime=()=>{


    return(
        <Formik initialValues={storeCreateValues} validationSchema={storeCreatevalidationSchema} >
        {(formik)=>{
          return(
                <Form className={styles.storeTime_Form} >
                <h3 className={styles.storeTimecard_header} >Working Time</h3>
                <h5>Select the Opening & Closing Time</h5>
                <TimePicker/>
                </Form>)
                }}
        </Formik>
    )
}

export default StoreTime;

