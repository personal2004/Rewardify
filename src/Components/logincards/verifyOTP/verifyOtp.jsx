import styles from './index.module.css';
import { LoginLogo} from '../../../img/images';
import { useNavigate } from 'react-router-dom';
import { Formik,Form } from 'formik';
import FormikControl from '../../formikComponent/formikControl';
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';
import api from '../../../utils/apiinstance';
import {VERIFY_OTP_LOGIN} from '../../../utils/api';
// import { useSelector } from 'react-redux';

const VerifyOtp=()=>{
  const location=useLocation()
  const navigate=useNavigate();
  const dialCode = location.state?.dialCode;
  const phnumber=location.state?.contactNo;
  // const store=useSelector((state)=>state.user.user);
   const initialValues={
        otp1:'',
        otp2: '',
        otp3: '',
        otp4: '',
      }
      
    const validationSchema=Yup.object({
        otp1: Yup.string().required('Required').matches(/^\d$/, 'Must be a digit'),
        otp2: Yup.string().required('Required').matches(/^\d$/, 'Must be a digit'),
        otp3: Yup.string().required('Required').matches(/^\d$/, 'Must be a digit'),
        otp4: Yup.string().required('Required').matches(/^\d$/, 'Must be a digit'),
      })
       
      const handleVerifyOtp = async (enteredOtp) => {
        try {
          const response = await api.post(VERIFY_OTP_LOGIN, {
            dialCode: dialCode,
            contactNo: phnumber,
            type:1,
            otp:enteredOtp,
          });    
          localStorage.setItem('authToken', response?.data.token);
          localStorage.setItem('refreshToken',response?.data.refreshToken);
          navigate('/home')    
        }catch (error) {
            console.error('Error generating OTP:', error);
         }   
      };

      const onSubmit=(values) => {
        const enteredOtp = parseInt(`${values.otp1}${values.otp2}${values.otp3}${values.otp4}`,10);
        handleVerifyOtp(enteredOtp)
       }

    return(
        <div className={styles.login_verify}>
            <img src={LoginLogo} alt='icon'/>
            <h6>Verify your details</h6>
            <p>Enter OTP number below</p>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
              {(formik)=>(
                <Form className={styles.login_verify_content}>
                <div className={styles.login_verify_content_input}>
                            <FormikControl className={styles.form_control} control='input' name='otp1' maxLength='1'type="text"/>
                            <FormikControl className={styles.form_control} control='input' name='otp2' maxLength='1'type="text"/>
                            <FormikControl className={styles.form_control} control='input' name='otp3' maxLength='1'type="text"/>
                            <FormikControl className={styles.form_control} control='input' name='otp4' maxLength='1'type="text"/>
                </div>
                <div className={styles.login_verify_content_button}>
                    <button type='submit'>Verify and Continue</button>
                    <div className={styles.login_verify_resend}>Didn’t receive OTP?  Resend in 0:55</div>
                </div>
                </Form>
                )}
            </Formik>
        </div>
    );
}

export default VerifyOtp;
