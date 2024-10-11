import style from './index.module.css';
import { useState } from 'react';
import icons from '../../../../icons/icons';

const Dairy=()=>{
    const [showlist,setshowlist]=useState(false)
    return(
        <div className={style.Dairy}>
         <h4>Dairy, Bread and Eggs</h4>
         {showlist? <span onClick={()=>setshowlist(!showlist)}>{icons.deopuparrow}</span>: <span onClick={()=>setshowlist(!showlist)}>{icons.dropdownarrow}</span>}

        </div>
    )
}

export default Dairy

