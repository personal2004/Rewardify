import FormikControl from '../formikComponent/formikControl';
import './index.css';
import { Form,Formik } from 'formik';
import * as Yup from 'yup';
const ContactForm=()=>{
  const initialvalues={
     ownername:'',
     shopname:'',
     location:'',
     phonenumber:''
  }
  const validationSchema=Yup.object({
    ownername:Yup.string().required('Required !'),
    shopname:Yup.string().required('Required !'),
    location:Yup.string().required('Required !'),
    phonenumber:Yup.string().required('Required !')
  })
  const onsubmit=()=>{

  }
    return(
        < >
            <h3 className='Contact_Form_header'>Contact Form</h3>
            <p className='Contact_Form_para'>Fill the contact form, One of our executives will reach out to you Shortly</p>
            <Formik initialValues={initialvalues} validationSchema={validationSchema} onSubmit={onsubmit}>
              {(formik)=>{
                return(
                  <Form className="Contact_Form" >
                  <FormikControl control='input' label='Owner Name' placeholder='Enter Your Full Name' name='ownername'/>
                  <FormikControl control='input' label='Shop Name' placeholder='Enter the Shop Name' name='shopname'/>
                  <FormikControl control='input' label='Location' placeholder='Enter your Location(eg: Indiranagar, Bangalore)' name='location'/>
                  <FormikControl control='input' label='Phone number' placeholder='Enter your Phone Number' name='phonenumber'/>
                  <button className='Contact_Form_button_submit'>Submit</button>
                  </Form>
                )
              }}
            </Formik>
        </>
    );
}

export default ContactForm;