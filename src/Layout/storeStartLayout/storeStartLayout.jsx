import './index.css'
import {storeStartLogo,rightIndicateArrow} from '../../img/images'
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
              <div className='stores_details_card_layout'>
                    <div className='stores_details_child header'>Enter Store details</div>
                    <div className='stores_details_child para'>Enter details Manually to get started into REWARDIFY</div>
                    <div className='stores_details_child button'>
                            <button>Get Started</button>
                            <img src={rightIndicateArrow} alt='->'/>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default StoresStartLayout;