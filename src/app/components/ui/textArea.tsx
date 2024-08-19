import React from "react";
import { ItextAreaProps } from "../../types/ItextArea";

const TextArea: React.FC<ItextAreaProps> = ({ label, id, required, value, onChange}) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} 
                value={value} 
                onChange={onChange}
                {...(required && { required })}  // Añadir required solo si es true 
            />
        </div>
    );
}

export default TextArea;