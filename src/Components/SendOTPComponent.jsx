import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { listOfSendOTP } from "./Constants";

export const SendOTPComponent = () => {
    let { selectApplication, mobileNumber, setMobileNumber, isRandomSelect, setSelectApplication } = useContext(AppContext);
    // let selctedApp = (listOfSendOTP || []).find(app => app.unique == selectApplication);
    const [isSendinginProcess, setIsSendinginProcess] = useState(false);
    const validateMobileNumber = () => {
        if (!!mobileNumber && mobileNumber.length == 10 && (!isNaN(mobileNumber))) {
            let selctedApp = {};
            if (!!isRandomSelect) {
                let randomIndex = Math.round((Math.random() * 10) % Math.abs((listOfSendOTP?.length || 0) - 1))
                selctedApp = (listOfSendOTP || []).find((app, index) => index == randomIndex);
            } else {
                selctedApp = (listOfSendOTP || []).find(app => app.unique == selectApplication)
            }
            if (!!selctedApp) {
                alert("IsValid");
                selctedApp.RequestObject = selctedApp.RequestObject.replace('{phoneNbr}', mobileNumber)
                console.log(selctedApp, "selctedApp");
                sendOtp(false, selctedApp.EndpointUrl, selctedApp.RequestObject);
                setIsSendinginProcess(true);
            }
            else {
                alert("IsInValid Data");
            }
        } else {
            setMobileNumber('');
            alert("IsInValid");
        }
    }
    useEffect(() => {
        if (!!isSendinginProcess) {
            setTimeout(() => {
                setIsSendinginProcess(false);
            }, 1000);
        }
    }, [isSendinginProcess])

    const sendOtp = (isGet, EndpointUrl, RequestObject) => {
        var config = {
            headers:
            {
                "Origin": "https://unacademy.com",
                "Referer": "https://unacademy.com/",
                "Access-Control-Allow-Origin":"*"
            }
        }
        console.log(isGet, EndpointUrl, RequestObject);
        if (!!isGet) {
            axios.get().then().catch()
        } else {
            axios.post(EndpointUrl, { ...JSON.parse(RequestObject) }, config)
                .then((resp) => { console.log(resp) })
                .catch((err) => { console.log(err) })
        }
    }
    return (
        <>
            <input type={"text"} maxLength={10} value={mobileNumber || ''}
                onChange={(ev) => { setMobileNumber(ev.target.value) }} />
            <button type="button" onClick={() => { validateMobileNumber() }}>Submit</button>

            {
                (isSendinginProcess) &&
                <p>
                    Sending in Process
                </p>
            }
        </>
    )
}