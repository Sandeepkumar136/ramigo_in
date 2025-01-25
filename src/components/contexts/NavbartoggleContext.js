import { createContext, useContext, useState } from "react";

const NavbarToggleContext = createContext();

export const NavbarToggleContextProvider = ({children})=>{
    const [isSidebar, setIsSidebar] = useState(false);
    const ToggleSidebar = ()=>{
        setIsSidebar(!isSidebar);
    };
    return(
        <NavbarToggleContext.Provider value={{isSidebar, setIsSidebar, ToggleSidebar}} >
            {children}
        </NavbarToggleContext.Provider>
    )
}
export const useNavToggle = ()=> useContext(NavbarToggleContext);