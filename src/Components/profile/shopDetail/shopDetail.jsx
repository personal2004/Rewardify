import style from './index.module.css';
import WorkdayForm from '../../storeCreate/storeinfo/workingdayform/workingdayForm';
import StoreTime from '../../storeCreate/storeinfo/storetime/storeTime';
const ProfileShopDetail=()=>{
    return(
        <div className={style.ProfileShopDetail}>
            <WorkdayForm/>
            <StoreTime/>
            <button>Save Changes</button>
            <note className={style.note}>*Note: After changing the details, the REWARDIFY admin team will need to verify and approve the change. 
                Once approved, the updated Changes will be reflected here.</note>
        </div>
    )
}

export default ProfileShopDetail