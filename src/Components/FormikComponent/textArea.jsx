import { ErrorMessage, Field } from "formik";
import TextError from "./texterror";
import style from './index.module.css';
const TextArea=(props)=>{
    const{label,name,legend,...rest}=props;
    return(
        <div>
          <label htmlFor={name}>{label}</label>
          {legend && <legend className={style.legend}><span>{legend}</span></legend>} 
          <Field as='textarea' id={name} name={name} {...rest}/>
          <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}
export default TextArea;