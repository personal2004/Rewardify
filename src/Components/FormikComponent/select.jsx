import { ErrorMessage, Field } from "formik";
import TextError from "./texterror";

const Select=(props)=>{
    const{label,name,options,placeholder,...rest}=props;
    return(
        <div>
          <label htmlFor={name}>{label}</label>
          <Field as='select' id={name} name={name} {...rest}>
           {
            options.map((option)=>{
                return(
                    <>
                    <option value="" disabled>{placeholder}</option>
                    <option key={option.value} value={option.value}>
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