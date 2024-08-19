import React from "react";
import { IinputProps } from "../../types/Iinput";

const Input: React.FC<IinputProps> = ({  label, type, placeholder, required, id, value, onChange, className}) => {
    return (
        <div className={className}>
            <label>{label}
            <input 
                type={type} 
                placeholder={placeholder}
                id={id} 
                value={value} 
                onChange={onChange} 
                className="input-class"
                {...(required && { required })}  // Añadir required solo si es true
            /></label>
        </div>
    );
}

export default Input;