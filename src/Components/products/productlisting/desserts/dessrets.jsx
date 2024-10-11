import style from './index.module.css';
import { useState } from 'react';
import icons from '../../../../icons/icons';
const Desserts=()=>{
    const [showlist,setshowlist]=useState(false)

    return(
        <div className={style.Desserts}>
           <h4>Chocolate and Desserts</h4>
           {showlist? <span onClick={()=>setshowlist(!showlist)}>{icons.deopuparrow}</span>: <span onClick={()=>setshowlist(!showlist)}>{icons.dropdownarrow}</span>}

        </div>
    )
}

export default Desserts