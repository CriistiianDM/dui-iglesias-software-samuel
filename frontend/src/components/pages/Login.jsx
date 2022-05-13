import React from "react";
import { Headerlogin } from "../login-element/Headerlogin";
import { TextBoxs } from "../login-element/TextBoxs";

export function Login(props){

   let state_headerlogin = Object.values(Object.values(Object.entries(props)[0][1])[2])[0];
   let state_textboxs = Object.values(Object.values(Object.entries(props)[0][1])[2])[0];
    return(
        <>
            <Headerlogin properties={state_headerlogin}/>
            <TextBoxs properties={state_textboxs} />
        </>
    );

}