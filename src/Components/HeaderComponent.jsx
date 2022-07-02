import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { listOfSendOTP } from "./Constants";

export const HeaderComponent = () => {
    const { isRandomSelect, setRadomSelection, setSelectApplication} = useContext(AppContext);
    return (
        <>
            <p>Select Random Application
                <input type={"checkbox"} onClick={(ev) => { setRadomSelection(ev.target.checked) }} value={isRandomSelect || false} />

                {(!isRandomSelect) &&
                    <select onClick={(ev) => {
                        setSelectApplication(ev.target.value)
                    }} style={{ marginLeft: "2%" }}>
                        <option value="" >Select Application</option>
                        {(listOfSendOTP || []).map
                            ((app, index) => {
                                return (
                                    <option key={app.unique} value={app.unique}>
                                        {app.DisplayName || ''}
                                    </option>
                                )
                            })}
                    </select>
                }
            </p>
        </>
    )
}