import { ErrorMessage, Field } from "formik";
import TextError from "./texterror";
import style from './index.module.css';

const Select=(props)=>{
    const{label,name,options,placeholder,legend,...rest}=props;
    return(
        <div>
          <label htmlFor={name}>{label}</label>
          {legend && <legend className={style.legend}><span>{legend}</span></legend>} 
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