import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './texterror'

function Checkbox (props) {
  const { label, name,className,optiondivname,options, ...rest } = props
  return (
    <div className={className}>
      <label>{label}</label>
      <Field name={name} >
        {({ field }) => {
          return options.map(option => {
            return (
              <div className={optiondivname} key={option.key}>
                  <input
                    type='checkbox'
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
              </div>
            )
          })
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Checkbox