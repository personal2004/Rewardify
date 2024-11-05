import style from './index.module.css';
import WorkdayForm from '../../storeCreate/storeinfo/workingdayform/workingdayForm';
import StoreTime from '../../storeCreate/storeinfo/storetime/storeTime';
import ProShopDetailCard from './pshopdetail/pshopDetail';
import EditStoreImage from './editstoreImage/editImage';
import * as Yup from 'yup';
import { useEffect,useState } from 'react';
import { Formik } from 'formik';

const ProfileShopDetail=()=>{
    
    const storeCreateValues={
        storeName:'',
        storeaddress:'',
        storenum:'',
        workingdays:[],
        openingTime: '', 
        closingTime: '',
        storeOwnerPan:'',
        GSTIN:'',
        GSTINStatus:[],
        bankname:'',
        bankAccountNumber:'',
        bankIFSCCode:'',
        selectoption:'',
        radiooption:'',
        birthdate:null,
        ownerName:'',
        ownerEmail:'',
        ownerphonenu:'',
        whatsappnumber:[],
    };
     const storeCreatevalidationSchema=Yup.object({
        storeName:Yup.string().required('Required !'),
        storeaddress:Yup.string().required('Required !'),
        storenum:Yup.string().required('Required !'),
        workingdays:Yup.array().required('Required !'),
        openingTime: Yup.string()
            .required('Opening time is required')
            .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format'), 
        closingTime: Yup.string()
            .required('Closing time is required')
            .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format'),
        storeOwnerPan:Yup.string().required('Required !'),
        GSTIN:Yup.string().required('Required !'),
        GSTINStatus:Yup.array().required('Required !'),
        bankname:Yup.string().required('Required !'),
        bankAccountNumber:Yup.string().required('Required !'),
        bankIFSCCode:Yup.string().required('Required !'),
        selectoption:Yup.string().required('Required !'),
        radiooption:Yup.string().required('Required !'),
        birthdate:Yup.date().required('Required !').nullable(),
        ownerName:Yup.string().required('Required !'),
        ownerEmail:Yup.string().required('Required !'),
        ownerphonenu:Yup.string().required('Required !'),
        whatsappnumber:Yup.array().required('Required !'),
    });
    const [formValues, setFormValues] = useState(storeCreateValues);
  
    const handleFormChange = (values) => {
      setFormValues(values);
    };
  
    useEffect(() => {
      handleFormChange(formValues);
    }, [formValues]);
    return(
        <Formik initialValues={formValues} validationSchema={storeCreatevalidationSchema} enableReinitialize >

        <div className={style.ProfileShopDetail}>

            <ProShopDetailCard/>
            <WorkdayForm  storeCreateValues={formValues}/>
            <StoreTime/>
            <EditStoreImage/>
            <button>Save Changes</button>
            <p className={style.note}>*Note: After changing the details, the REWARDIFY admin team will need to verify and approve the change. 
                Once approved, the updated Changes will be reflected here.</p>
                 
        </div>
        </Formik>

    )
}

export default ProfileShopDetail