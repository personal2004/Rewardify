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
                {/* <div className="form-group">
      <label htmlFor="time">Time</label>
      <div className="input-group date" id="timePicker">
        <input type="text" className="form-control" />
        <span className="input-group-addon">
          <i className="fa fa-clock-o" aria-hidden="true"></i>
        </span>
      </div>
    </div> */}
                {/* <div className={styles.time_picker}>
                    <div class={styles.time_picker_item}>
                    <span class="icon">🕒</span>
                    <select class="hour-select">
                        <option value="12">12</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>                       
                        <option value="5">5</option>                       
                        <option value="6">6</option>                       
                        <option value="7">7</option>                        
                        <option value="8">8</option>                       
                        <option value="9">9</option>                        
                        <option value="10">10</option>
                        <option value='11'>11</option>
                    </select>
                    :
                    <select class="minute-select">
                        <option value="00">00</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="45">45</option>
                    </select>
                    <span class="icon">AM</span>
                    </div>
                    <div class={styles.time_picker_item}>
                    <span class="icon">🕒</span>
                    <select class="hour-select">
                        <option value="12">12</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>                       
                        <option value="5">5</option>                       
                        <option value="6">6</option>                       
                        <option value="7">7</option>                        
                        <option value="8">8</option>                       
                        <option value="9">9</option>                        
                        <option value="10">10</option>
                        <option value='11'>11</option>
                    </select>
                    :
                    <select class="minute-select">
                        <option value="00">00</option>
                        <option value="15">15</option>
                        <option value="30">30</option>
                        <option value="45">45</option>
                    </select>
                    <span class="icon">PM</span>
                    </div
                </div> 
                >*/}
                </Form>)
                }}
        </Formik>
    )
}

export default StoreTime;

