import { Form,Formik } from "formik"
import { storeCreateValues,storeCreatevalidationSchema,WorkdaysCheckOption } from "../../../../constant/formcons"
import styles from './index.module.css';
import FormikControl from "../../../formikComponent/formikControl";

const WorkdayForm=()=>{
    return(
        <Formik initialValues={storeCreateValues} validationSchema={storeCreatevalidationSchema} >
        {(formik)=>{
          return(
            <Form className={styles.workingdaysinfo_Form} >
                <div className={styles.workingdays_header} >
                <h3 className={styles.docinfocard_header} >Working Days</h3>
                <h4>Select All</h4>
                </div>
                <FormikControl className={styles.checkbox_control} optiondivname={styles.checkbox_option} control='checkbox' options={WorkdaysCheckOption} name='workingdays'/>
            </Form> )
        }}
        </Formik>
    )
}

export default WorkdayForm