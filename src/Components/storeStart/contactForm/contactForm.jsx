import FormikControl from '../../formikComponent/formikControl';
import styles from './index.module.css';
import { Form,Formik } from 'formik';
import { useState } from 'react';
import Modal from '../../modal/modal';
import { handshake } from '../../../img/images';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import api from '../../../utils/apiinstance';
import { POST_CONTACT_FORM } from '../../../utils/api';
const ContactForm=()=>{

  const [showModal, setShowModal] = useState(false);
  const navigate=useNavigate();

  const initialvalues={
     ownername:'',
     shopname:'',
     location:'',
     phonenumber:'',
  }
  const validationSchema=Yup.object({
    ownername:Yup.string().required('Required !'),
    shopname:Yup.string().required('Required !'),
    location:Yup.string().required('Required !'),
    phonenumber:Yup.string().required('Required !')
  })
  const onsubmit=async(values,{resetForm})=>{
    try{
      const response=await api.post(POST_CONTACT_FORM, {
        contactNo:Number(values.phonenumber),
        dialCode: 91,
        location:values.location,
        ownerName:values.ownername,
        shopName:values.shopname
      });
      if(response?.data.message){
        setShowModal(true);
        resetForm();
      }
  }catch(error){
    console.error('Error Submitting Contactform:', error);

  }
  }
  const onClose=(e)=>{
    setShowModal(false)
    navigate('/storestart/contactids')
  }
    return(
        < >
            <Formik initialValues={initialvalues} validationSchema={validationSchema} onSubmit={onsubmit}>
              {(formik)=>{
                return(
                  <Form className={styles.Contact_Form} >
                  <FormikControl className={styles.form_control} control='input' label='Owner Name' placeholder='Enter Your Full Name' name='ownername'/>
                  <FormikControl className={styles.form_control} control='input' label='Shop Name' placeholder='Enter the Shop Name' name='shopname'/>
                  <FormikControl className={styles.form_control} control='input' label='Location' placeholder='Enter your Location(eg: Indiranagar, Bangalore)' name='location'/>
                  <FormikControl className={styles.form_control} control='input' label='Phone number' placeholder='Enter your Phone Number' name='phonenumber'/>
                  <button className={styles.Contact_Form_button_submit}>Submit</button>
                  </Form>
                )
              }}
            </Formik>
            <Modal show={showModal} onClose={onClose} buttonStyle={styles.modalbutton_style} button_text='Continue'>
              <div className={styles.imageContainer}><img src={handshake} alt="Handshake" style={{width:'70px',height:'50px'}}/></div>         
              <div className={styles.popup_header}>Thanks For Submitting the Contact Form</div>
              <div className={styles.popup_para}>We will get back to you Shortly</div>
            </Modal>
        </>
    );
}

export default ContactForm;