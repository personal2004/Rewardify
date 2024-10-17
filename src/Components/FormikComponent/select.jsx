import { ErrorMessage, Field } from "formik";
import TextError from "./texterror";

const Select=(props)=>{
    const{label,name,options,placeholder,...rest}=props;
    return(
        <div>
          <label htmlFor={name}>{label}</label>
          <Field as='select' id={name} name={name}placeholder={placeholder} {...rest}>
           {
            options.map((option,index)=>{
                return(
                    <>
                    <option key={option.value} value={option.value} hidden={index === 0}>
                       {option.key}
                    </option>
                    </>
                   
                )
              })
           }
          </Field>
          <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}
export default Select;