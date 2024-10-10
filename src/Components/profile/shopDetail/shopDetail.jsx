import style from './index.module.css';
import WorkdayForm from '../../storeCreate/storeinfo/workingdayform/workingdayForm';
import StoreTime from '../../storeCreate/storeinfo/storetime/storeTime';
import ProShopDetailCard from './pshopdetail/pshopDetail';
import EditStoreImage from './editstoreImage/editImage';
const ProfileShopDetail=()=>{
    return(
        <div className={style.ProfileShopDetail}>
            <ProShopDetailCard/>
            <WorkdayForm/>
            <StoreTime/>
            <EditStoreImage/>
            <button>Save Changes</button>
            <p className={style.note}>*Note: After changing the details, the REWARDIFY admin team will need to verify and approve the change. 
                Once approved, the updated Changes will be reflected here.</p>
        </div>
    )
}

export default ProfileShopDetail