import './index.css';
import { LoginLogo} from '../../img/images';
// import { useNavigate } from 'react-router-dom';
import { Formik,Form } from 'formik';
import FormikControl from '../formikComponent/formikControl';
import * as Yup from 'yup';

const VerifyOtp=()=>{
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
      const onSubmit=values => {
        alert(JSON.stringify(values, null, 2));
      }
    // const navigate=useNavigate();
    return(
        <div className='login_verify'>
            <img src={LoginLogo} alt='icon'/>
            <h6>Verify your details</h6>
            <p>Enter OTP number below</p>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
              {(formik)=>(
                 <>       
                <div className='login_verify_content'>
                            <Form className='login_verify_content_input'>
                            <FormikControl control='input' name='otp1' maxLength='1'type="text"/>
                            <FormikControl control='input' name='otp2' maxLength='1'type="text"/>
                            <FormikControl control='input' name='otp3' maxLength='1'type="text"/>
                            <FormikControl control='input' name='otp4' maxLength='1'type="text"/>
                            </Form>
                </div>
                <div className='login_verify_content_button'>
                    <button>Verify and Continue</button>
                    <div className='login_verify_resend'>Didn’t receive OTP?  Resend in 0:55</div>
                </div>
                </>
                )}
            </Formik>
        </div>
    );
}

export default VerifyOtp;
