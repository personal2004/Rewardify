import {LoginLogo} from '../../../img/images';
import styles from './index.module.css';
import {Formik,Form} from 'formik';
import FormikControl from '../../../Components/formikComponent/formikControl';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import {GENERATE_OTP_LOGIN} from '../../../utils/api';
import api from '../../../utils/apiinstance';

const LoginForm=()=>{
    const navigate=useNavigate();
    const initialPhoneValue={
        phnumber:'',
    }
    const validationSchema=Yup.object({
        phnumber:Yup.string()
               .required('Required !')
    })
    const handleGenerateOtp = async (contactNo) => {
      try {
        const response = await api.post(`${GENERATE_OTP_LOGIN}`, {
          dialCode: 91,
          contactNo: contactNo,
        });
      } catch (error) {
         console.error('Error generating OTP:', error);
      }
    };

    const onSubmit=async(values,onSubmitPropps)=>{
      onSubmitPropps.setSubmitting(false)
      onSubmitPropps.resetForm()
      handleGenerateOtp(values.phnumber)
      navigate('/verify', { state: {
        dialCode: 91,
        contactNo: values.phnumber
      }});       
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