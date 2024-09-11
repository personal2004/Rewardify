import Checkbox from "./checkbox"
import DatePicker from "./datepicker"
import Input from "./input"
import RadioButtons from "./radio"
import Select from "./select"
import TextArea from "./textArea"

const FormikControl=(props)=>{
 const {control,...rest}=props 
 switch(control){
    case 'input': 
      return <Input {...rest} />
    case 'textarea':
        return <TextArea {...rest}/>
    case 'select':
        return <Select {...rest}/>
    case 'radio':
        return <RadioButtons {...rest}/>
    case 'checkbox':
        return <Checkbox {...rest}/>
    case 'date':
        return <DatePicker {...rest}/>
    default:return null
 }
    
}
export default FormikControl;