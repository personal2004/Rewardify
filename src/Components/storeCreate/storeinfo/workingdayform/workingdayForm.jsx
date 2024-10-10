import { Form,Formik } from "formik"
import { storeCreateValues,storeCreatevalidationSchema } from "../../../../utils/formcons"
import styles from './index.module.css';
import FormikControl from "../../../formikComponent/formikControl";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const WorkdayForm=()=>{
    
    const days=useSelector((state)=>state?.user?.user);
    const location=useLocation();
    useEffect(()=>{
        if(location.pathname==='/home/profile/shopdetail' && days)
            {
         storeCreateValues.workingdays=days?.store?.schedule;
        }
    },
    [days,location.pathname])

     const WorkdaysCheckOption=[
        {key:'Monday',value:1},
        {key:'Tuesday',value:2},
        {key:'Wednesday',value:3},
        {key:'Thursday',value:4},
        {key:'Friday',value:5},
        {key:'Saturday',value:6},
        {key:'Sunday',value:7}
    ]

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