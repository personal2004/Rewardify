import { useState } from 'react';
import styles from'./index.module.css'
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
const TimePicker = () => {
 const [OpenTime,setOpenTime]=useState(new Date('10:00 AMM'))

  return (
    <div className={styles.TimePicker_container}>
          <div className={styles.Time}><TimePickerComponent placeholder='Open Time' format={'HH:mm'} onChange={(e)=>setOpenTime(e.target.value)} step={20}></TimePickerComponent>AM</div>
          <div className={styles.Time}><TimePickerComponent placeholder='Close Time' format={'HH:mm'} min={OpenTime} step={20}></TimePickerComponent>PM</div>
    </div>  
);
};

export default TimePicker;
