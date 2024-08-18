import React from "react";
import { ItextAreaProps } from "../../models/ItextArea";

const TextArea: React.FC<ItextAreaProps> = ({ label, id, required, value, onChange}) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} 
                value={value} 
                required
                onChange={onChange} 
            />
        </div>
    );
}

export default TextArea;