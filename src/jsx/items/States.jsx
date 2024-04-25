/****************************************************************************
**
**
**
**
****************************************************************************/

import React, { createContext, useContext, useState } from "react";

const Context = createContext();


const GlobalStates = ({ children }) => {
    const [defaultCity, setDefaultCity] = useState(null);
    const [isCelsius, setIsCelsius] = useState(true);
    const [lastCity, setLastCity] = useState(null);
    return (
        <Context.Provider
            value={{
                defaultCity, setDefaultCity,
                isCelsius, setIsCelsius,
                lastCity, setLastCity
            }}
        >
            {children}
        </Context.Provider >
    );
};

const useGlobalStates = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalItemStateProvider');
    }
    return context;
};

export { useGlobalStates, GlobalStates };
