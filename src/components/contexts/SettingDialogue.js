import { createContext, useContext, useState } from "react";

const SettingDialogueContext = createContext();

export const SettingDialogueContextProvider = ({children})=>{
    const [isSettingOpen, setIsSettingOpen] = useState(false);
    const OpenSetting = ()=>{
        setIsSettingOpen(true);
    };
    const CloseSetting = ()=>{
        setIsSettingOpen(false);
    };
    return(
        <SettingDialogueContext.Provider value={{OpenSetting, CloseSetting, isSettingOpen}}>
            {children}
        </SettingDialogueContext.Provider>
    );
};

export const useSettingDialogue = ()=>{
    return useContext(SettingDialogueContext);
};