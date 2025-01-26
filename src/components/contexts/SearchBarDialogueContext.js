import { createContext, useContext, useState } from "react";

const SearchBarDialogueContext = createContext();

export const SearchBarDialogueProvider = ({children})=>{
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const OpenSearchBar = () => setIsSearchBarOpen(true);
    const CloseSearchBar = () => setIsSearchBarOpen(false);

    return (
        <SearchBarDialogueContext.Provider value={{OpenSearchBar, CloseSearchBar, isSearchBarOpen}}>
        {children}
        </SearchBarDialogueContext.Provider>
    );
};

export const useSearchBar = () =>{
   return useContext(SearchBarDialogueContext);
}