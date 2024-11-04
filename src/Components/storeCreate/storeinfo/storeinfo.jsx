import styles from './index.module.css';
import {Formik } from 'formik';
import StoreScanCard from '../storescancard/storeScancard';
import Ownerinfo from './ownerinfo/ownerinfo';
import StoreInfoForm from './storeinfoform/storeinfoForm';
import WorkdayForm from './workingdayform/workingdayForm';
import StoreTime from './storetime/storeTime';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useEffect,useState } from 'react';

const StoreInfo=()=>{
    const navigate=useNavigate();

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
        <>
           <div className={styles.docinfoform_header} >Store Documents</div>
            <Formik initialValues={formValues} validationSchema={storeCreatevalidationSchema} enableReinitialize >
            {/* {({ values, setFieldValue }) => { */}
                   {/* return( */}
                  <div className={styles.docinfoform_Container}>
                    <Ownerinfo/>
                    <StoreInfoForm/>
                    <WorkdayForm  storeCreateValues={formValues}/>
                    <StoreTime/>
                    <StoreScanCard/>
                    <button className={styles.continue_button} onClick={()=>navigate('/storeCreation/storedocs')}>Continue</button>
                  </div>
                {/* ) */}
              {/* }} */}
            </Formik>
        </>
    )
}

export default StoreInfo