import { ErrorMessage, Field } from "formik";
import TextError from "./texterror";

const TextArea=(props)=>{
    const{label,name,...rest}=props;
    return(
        <div>
          <label htmlFor={name}>{label}</label>
          <Field as='textarea' id={name} name={name} {...rest}/>
          <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}
export default TextArea;