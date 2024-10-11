import style from './index.module.css';
import { useState } from 'react';
import icons from '../../../../icons/icons';

const Rice=()=>{
  const [showlist,setshowlist]=useState(false)

    return(
        <div className={style.Rice}>
          <h4>Atta, Dal and Rice</h4>
          {showlist? <span onClick={()=>setshowlist(!showlist)}>{icons.deopuparrow}</span>: <span onClick={()=>setshowlist(!showlist)}>{icons.dropdownarrow}</span>}

        </div>
    )
}

export default Rice