import { useState } from 'react';
import styles from'./index.module.css'
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { useEffect, } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TimePicker = () => {

 const [OpenTime,setOpenTime]=useState(null)
 const [closeTime, setCloseTime] = useState(null);
 const location=useLocation()
 const time=useSelector((state)=>state?.user?.user);  

useEffect(()=>{
      if(location.pathname==='/home/profile/shopdetail' && time){
      setOpenTime(new Date(time?.store?.openingTime))
      setCloseTime(new Date(time?.store?.closingTime))
      }
},[time])
  return (
    <div className={styles.TimePicker_container}>

      <div className={styles.Time}>
         <TimePickerComponent 
          placeholder='Open Time' 
          format={'HH:mm'} 
          value={OpenTime}
          onChange={(e)=>setOpenTime(e.target.value)} 
          step={20}>
         </TimePickerComponent>AM
      </div>

      <div className={styles.Time}>
          <TimePickerComponent 
          placeholder='Close Time'
          format={'HH:mm'}
          value={closeTime}
          min={OpenTime}
          step={5}>
         </TimePickerComponent>PM
      </div>
    </div>  
);
};

export default TimePicker;
