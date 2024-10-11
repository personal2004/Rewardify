import style from './index.module.css';
import { useState } from 'react';
import icons from '../../../../icons/icons';

const Coffee=()=>{
  const [showlist,setshowlist]=useState(false)

    return(
        <div className={style.Coffee}>
          <h4>Tea, Coffee and more</h4>
          {showlist? <span onClick={()=>setshowlist(!showlist)}>{icons.deopuparrow}</span>: <span onClick={()=>setshowlist(!showlist)}>{icons.dropdownarrow}</span>}

        </div>
    )
}

export default Coffee

