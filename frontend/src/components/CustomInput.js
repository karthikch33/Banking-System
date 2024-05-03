import React from 'react'

const CustomInput = (props) => {
    const {type,name,placeholder,className,value,onChange,onBlur,disabled=false} = props
  return (
    <div className='form-floating gap-15'>
        <input type={type} name={name} placeholder={placeholder} className={`form-control glowing-input ${className}`} value={value} onChange={onChange} onBlur={onBlur} disabled={disabled} />
        <label className='form-label'>{placeholder}</label>
    </div>
  )
}

export default CustomInput