import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppContextProvider = (props) => {

    const [isRandomSelect, setRadomSelection] = useState(false);
    const [selectApplication, setSelectApplication] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    return (
        <AppContext.Provider value={{
            isRandomSelect, setRadomSelection,
            selectApplication, setSelectApplication,
            mobileNumber, setMobileNumber
        }}>
        {props.children}
        </AppContext.Provider>
    )
}

