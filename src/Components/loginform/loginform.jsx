import {LoginLogo} from '../../img/images';
import './index.css';
import {Formik,Form} from 'formik';
import FormikControl from '../../Components/formikComponent/formikControl';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import sendOtp from '../../function/sendOtp';
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
            <Form  className='login_form'>
                    <img src={LoginLogo} alt='Loading...'/>
                    <h6>Get started with REWARDIFY</h6>
                    <p>Enter your mobile number or Shop ID to get started</p>
                    <div className='login_form_input'><FormikControl control='input' name='phnumber' label='' placeholder='Enter shop ID / Mobile Number'/>                    </div>
                    <div className='login_submit_content'>
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