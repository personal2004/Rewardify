import './index.css'
import {storeStartLogo} from '../../img/images'
import { Outlet } from 'react-router-dom';

const StoresStartLayout=()=>{
    return(
        <div className='stores_start_layout'>
            <h1>REWARDIFY</h1>
            <img src={storeStartLogo} alt='Loading...'/>
            <div className="stores_start_Layout_Form">
              <div className='stores_start_form'>
              <Outlet/>
              </div>
              <div></div>
            </div>
        </div>
    )
}

export default StoresStartLayout;