import {LoginLogo} from '../../../img/images';
import styles from './index.module.css';
import {Formik,Form} from 'formik';
import FormikControl from '../../../Components/formikComponent/formikControl';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import sendOtp from '../../../function/sendOtp';
import {GENERATE_OTP,BASE_URL} from '../../../constant/api';
import axios from 'axios';

const handleGenerateOtp = async (contactNo) => {
    try {
      const response = await axios.post(`${BASE_URL}+${GENERATE_OTP}`, {
        dialCode: 91,
        contactNo: contactNo
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error generating OTP:', error);
    }
  };

const LoginForm=()=>{
    const navigate=useNavigate();

    const initialPhoneValue={
        phnumber:'',
    }
    const validationSchema=Yup.object({
        phnumber:Yup.string()
               .required('Required !')

    })
 
   const onSubmit=async(values,onSubmitPropps)=>{
        onSubmitPropps.setSubmitting(false)
        onSubmitPropps.resetForm()
        handleGenerateOtp(values.phnumber)
        const otp=await sendOtp();
        navigate('/verify', { state: { otp } });       
       }

    return(
    <Formik 
    initialValues={initialPhoneValue}
    validationSchema={validationSchema}
    onSubmit={onSubmit}> 
    {(formik)=>{
        return(
            <Form  className={styles.login_form}>
                    <img src={LoginLogo} alt='Loading...'/>
                    <h6>Get started with REWARDIFY</h6>
                    <p>Enter your mobile number or Shop ID to get started</p>
                    <FormikControl  control='input' name='phnumber' label=''className={styles.form_control} placeholder='Enter shop ID / Mobile Number'/>
                    <div className={styles.login_submit_content}>
                        <button type='submit'>Send OTP</button>
                        <p>By clicking, you agree to our Terms & Conditions and Privacy Policy.</p>
                    </div>
            </Form>
        )
    }}
    </Formik>
    )
}

export default LoginForm