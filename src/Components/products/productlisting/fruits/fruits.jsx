import style from './index.module.css';
import icons from '../../../../icons/icons'
import { useState } from 'react';
const Fruits=()=>{
  const [showlist,setshowlist]=useState(false)
    return(
        <div className={style.Fruits}>
          <h4>Fruits & Vegetable's</h4>
          {showlist? <span onClick={()=>setshowlist(!showlist)}>{icons.deopuparrow}</span>: <span onClick={()=>setshowlist(!showlist)}>{icons.dropdownarrow}</span>}
        </div>
    )
}

export default Fruits