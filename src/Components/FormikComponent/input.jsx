import { ErrorMessage, Field } from "formik";
import TextError from "./texterror";
import style from './index.module.css'
const Input=(props)=>{
    const{label,name,className,legend,...rest}=props;
    return(
        <div className={className}>
            <label htmlFor={name}>{label}</label>
             {legend && <legend className={style.legend}><span>{legend}</span></legend>} 
             <Field id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={TextError}/>
        </div>

    )
}
export default Input;