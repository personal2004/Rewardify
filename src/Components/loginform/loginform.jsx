import {LoginLogo} from '../../img/images';
import './index.css';
import {Formik,Form} from 'formik';
import FormikControl from '../../Components/formikComponent/formikControl';
import * as Yup from 'yup';

const LoginForm=()=>{
    const initialValues={
        email:'',
    }
    const validationSchema=Yup.object({
        email:Yup.string()
               .required('Required !')
               .email('Provide Correct email !')
    })
    const onSubmit=(values)=>(console.log(values));

    return(
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}> 
    {(formik)=>{
        return(
            <Form  className='login_form'>
                    <img src={LoginLogo} alt='Loading...'/>
                    <h6>Get started with REWARDIFY</h6>
                    <p>Enter your mobile number or Shop ID to get started</p>
                    <div className='login_form_input'><FormikControl control='input'name='email' label=''placeholder='Enter shop ID / Mobile Number'/>                    </div>
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