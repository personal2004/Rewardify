import style from './index.module.css';
import { useState } from 'react';
import icons from '../../../../icons/icons';

const Snacks=()=>{
    const [showlist,setshowlist]=useState(false)

    return(
        <div className={style.Snacks}>
           <h4>Snacks and Biscuits</h4>
           {showlist? <span onClick={()=>setshowlist(!showlist)}>{icons.deopuparrow}</span>: <span onClick={()=>setshowlist(!showlist)}>{icons.dropdownarrow}</span>}
        </div>
    )
}

export default Snacks