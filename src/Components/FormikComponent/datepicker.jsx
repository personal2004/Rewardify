import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';
import TextError from './texterror';
import { Field} from 'formik';
import { ErrorMessage } from 'formik';

const DatePicker=(props)=>{
    const { label, name, ...rest } = props
    return (
      <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field name={name}>
          {({ form, field }) => {
            const { setFieldValue } = form
            const { value } = field
            return (
              <DateView
                type='date'
                id={name}
                {...field}
                {...rest}
                selected={value}
                onChange={val => setFieldValue(name, val)}
              />
            )
          }}
        </Field>
        <ErrorMessage component={TextError} name={name} />
      </div>
    )
}

export default DatePicker