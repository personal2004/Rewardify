import { Formik,Form } from "formik";
import styles from './index.module.css' 
import FormikControl from "../../../formikComponent/formikControl";
import { storeinfoValues,storeInfovalidationSchema,WhatsappCheckOption } from "../../../../utils/formcons";
import { useEffect, useState } from "react";
import api from "../../../../utils/apiinstance";
import {NUMBER_OTP_GENERATE } from "../../../../utils/api";
const Ownerinfo=()=>{
     const [verifyOtp,setverifyOtp]=useState(false);

     const sendOtpToMoblile=async(number)=>{
      try{
        const response=await api.post(NUMBER_OTP_GENERATE,{
           dialCode:91,
           contactNo:number,
        });
        console.log(response?.data.message)
      }catch(error){
        console.log(`Error Sending OTP To Mobile ${error}`)
      }
    }
    return(
        <Formik initialValues={storeinfoValues} validationSchema={storeInfovalidationSchema} >
        {(formik)=>{
          return(
            <Form className={styles.OwnerInfo_Form} >
                    <h3 className={styles.docinfocard_header} >Owner Information</h3>
                    <FormikControl className={styles.form_control} control='input' placeholder='Owner’s Name' name='ownerName'/>
                    <FormikControl className={styles.form_control} control='input' placeholder='Email Address' name='ownerEmail'/>
                    <div className={styles.input_with_button}>
                    <FormikControl className={styles.phonenu_control} control='input' placeholder='Mobile Number' name='ownerphonenu' />
                    <span className={styles.phone_verify_button} 
                    onClick={()=>{
                      setverifyOtp(!verifyOtp)
                      sendOtpToMoblile(formik.values.ownerphonenu)
                    }
                    } >Verify</span>
                    {verifyOtp &&  
                    <> 
                          <p>Verification code has send to your mobile number</p>      
                          <div className={styles.phone_verify_content_input}>
                            <FormikControl className={styles.otp_control} control='input' name='otp1' maxLength='1'type="text"/>
                            <FormikControl className={styles.otp_control} control='input' name='otp2' maxLength='1'type="text"/>
                            <FormikControl className={styles.otp_control} control='input' name='otp3' maxLength='1'type="text"/>
                            <FormikControl className={styles.otp_control} control='input' name='otp4' maxLength='1'type="text"/>
                          </div>
                          <h6>Didn’t receive OTP?  Resend in 0:55</h6>
                    </>
                     }
                    </div>
                    <hr className={styles.dotted_Line}/>
                    <FormikControl className={styles.checkbox_control} optiondivname={styles.checkbox_option} control='checkbox' 
                    name='whatsappnumber' options={WhatsappCheckOption}
                    label={<span>By providing your <strong>Whatsapp Number</strong> to get updates on payments, order confirmation etc</span>}  />
            </Form>)
              }}
            </Formik>
    )
}

export default Ownerinfo