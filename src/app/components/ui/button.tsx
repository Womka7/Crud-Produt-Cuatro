import React from "react";
import { IbuttonProps } from "../../models/Ibutton";

const Button:React.FC<IbuttonProps>=({onClick, label, className})=>{
    return (
        <button  onClick={onClick} className={className}>{label}</button>
    );
}
export default  Button 