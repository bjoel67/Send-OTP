import React,{useContext} from "react";
import { AppContext } from "../Context/AppContext";
import { HeaderComponent } from "./HeaderComponent";
import { SendOTPComponent } from "./SendOTPComponent";

export const HomeComponent = () => {
    let { isRandomSelect, selectApplication } = useContext(AppContext);
    return (
        <>
            <HeaderComponent />
            <br />
            {
                (!!isRandomSelect || 
               (!!selectApplication && selectApplication?.trim()?.length > 0)) &&
                <SendOTPComponent />
            }
        </>
    )
}