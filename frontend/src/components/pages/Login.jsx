import React from "react";
import { Headerlogin } from "../login-element/Headerlogin";
import { Loginbody } from "../login-element/Loginbody";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export function Login(props){

   let state_headerlogin = Object.values(Object.values(Object.entries(props)[0][1])[4])[0];
   let state_textboxs = Object.values(Object.values(Object.entries(props)[0][1])[4])[0];
    return(
        <>
            <Headerlogin properties={state_headerlogin}/>
            <Loginbody properties={state_textboxs} />
        </>
    );

}