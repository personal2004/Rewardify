import './index.css';
import { LoginLogo} from '../../img/images';
import { useNavigate } from 'react-router-dom';
import { Formik,Form } from 'formik';
import FormikControl from '../formikComponent/formikControl';
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';

const VerifyOtp=()=>{
  const location=useLocation()
  const navigate=useNavigate();
  const generatedOtp = location.state?.otp;
   const initialValues={
        otp1: '',
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
 console.log(generatedOtp)
      const onSubmit=(values) => {
        const enteredOtp = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}`;
        if (enteredOtp === generatedOtp) {
            alert('OTP verified successfully!');
            localStorage.setItem('isVerified', 'true');
            navigate('/stores')

        } else {
            alert('Invalid OTP. Please try again.');
        }     
       }

    return(
        <div className='login_verify'>
            <img src={LoginLogo} alt='icon'/>
            <h6>Verify your details</h6>
            <p>Enter OTP number below</p>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
              {(formik)=>(
                <Form className='login_verify_content'>
       
                <div className='login_verify_content_input'>
                            <FormikControl control='input' name='otp1' maxLength='1'type="text"/>
                            <FormikControl control='input' name='otp2' maxLength='1'type="text"/>
                            <FormikControl control='input' name='otp3' maxLength='1'type="text"/>
                            <FormikControl control='input' name='otp4' maxLength='1'type="text"/>
                </div>
                <div className='login_verify_content_button'>
                    <button type='submit'>Verify and Continue</button>
                    <div className='login_verify_resend'>Didn’t receive OTP?  Resend in 0:55</div>
                </div>
                </Form>

                )}
            </Formik>
        </div>
    );
}

export default VerifyOtp;
