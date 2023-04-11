import { createContext, useContext, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [equipments, setEquipments] = useState([])

    return (
        <AppContext.Provider value={{equipments, setEquipments}}>
            { children }
        </AppContext.Provider>
    )
}