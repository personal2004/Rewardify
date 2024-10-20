import { Formik,Form } from "formik";
import styles from './index.module.css' 
import FormikControl from "../../formikComponent/formikControl";
import * as Yup from 'yup';
import { useSelector } from "react-redux";
// import api from "../../../utils/apiinstance";
const ProfileDetail=()=>{
    const profile=useSelector((state)=>state.user.user)
    const profileDetailValues={
        ownerName:profile?.name ,
        ownerEmail:profile?.email,
        ownerphonenu:profile?.contactNo,
    }
    const storeInfovalidationSchema=Yup.object({
        ownerName:Yup.string().required('Required !'),
        ownerEmail:Yup.string().required('Required !'),
        ownerphonenu:Yup.string().required('Required !'),
    });

// const handleSaveChanges = async (values) => {
//   try {
//     const response = await api.patch(`/v1/store-user/store/user/${profile?._id}`, {
//       name: values.ownerName,
//       email: values.ownerEmail,
//     });
//     console.log('Profile updated successfully:', response.data);
//   } catch (error) {
//     console.error('Error updating profile:', error);
//   }
// }
    return(
        <Formik initialValues={profileDetailValues} validationSchema={storeInfovalidationSchema} >
        {(formik)=>{
          return(
            <Form className={styles.profile_Form} >
                    <h3 className={styles.profile_header} >Profile Details</h3>
                    <p className={styles.profile_para}>Here you can view and edit your details.</p>
                    <FormikControl className={styles.form_control} control='input' placeholder='Owner’s Name' name='ownerName'/>
                    <div className={styles.input_with_button}>
                        <FormikControl className={styles.form_control} control='input' placeholder='Email Address' name='ownerEmail'/>
                        <span className={styles.email_change_button}  >Change</span>
                    </div>
                    <FormikControl className={styles.form_control} control='input' placeholder='Mobile Number' name='ownerphonenu' />
                    <button 
                    // onClick={()=>handleSaveChanges(formik.values)}
                        >Save Changes</button>
                    <note className={styles.note}>*Note: After changing the details, the REWARDIFY admin team will need to verify and approve the change. 
                        Once approved, the updated Changes will be reflected here.</note>
            </Form>)
              }}
            </Formik>
    )
}

export default ProfileDetail;