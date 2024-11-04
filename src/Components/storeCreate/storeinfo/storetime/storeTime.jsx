import React from 'react';
import styles from './index.module.css';
import { Form,Formik } from 'formik';
import TimePicker from '../../../timePicker/TimePicker';

const StoreTime=()=>{

    return(
        
                <Form className={styles.storeTime_Form} >
                <h3 className={styles.storeTimecard_header} >Working Time</h3>
                <h5>Select the Opening & Closing Time</h5>
                <TimePicker/>
                </Form>
    )
}

export default StoreTime;

