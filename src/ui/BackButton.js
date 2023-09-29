import React from "react";
import {useNavigate} from 'react-router-dom';

export const BackButton=()=>{
    const hist=useNavigate();
    return (
    <button className="back-button" onClick={()=>hist(-1)}>Back</button>
    );
}