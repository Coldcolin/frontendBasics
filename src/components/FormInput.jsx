import { useState } from "react";
import "./FormInput.css"

const FormInput = (props) => {
    const [focused, setFocused]= useState(false);
    const handleFocused=(e)=>{
      setFocused(true)
    }
    const {label, onChange, id, errorMessage, value, ...inputProps}= props
  return (
    <div className="FormInput">
        <label>{label}</label>
        <input {...inputProps} 
        defaultValue=""
        value={value}
        onChange={onChange} 
        onBlur={handleFocused}
        onFocus={()=> inputProps.name === 'confirm' && setFocused(true)} 
        focused={focused.toString()}/>
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput