import style from './index.module.css';
import icons from '../../../../icons/icons';
import { useState } from 'react';

const Masalas=()=>{
    const [showlist,setshowlist]=useState(false)

    return(
        <div className={style.Masalas}>
         <h4>Dry fruits and Masala</h4>
         {showlist? <span onClick={()=>setshowlist(!showlist)}>{icons.deopuparrow}</span>: <span onClick={()=>setshowlist(!showlist)}>{icons.dropdownarrow}</span>}

         </div>
    )
}

export default Masalas