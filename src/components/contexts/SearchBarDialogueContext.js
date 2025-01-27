import React, { createContext, useContext, useState, useRef, useEffect } from "react";

// Create the context
const SearchBarDialogueContext = createContext();

// Context Provider
export const SearchBarDialogueProvider = ({ children }) => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false); // State to manage dialog visibility
  const dialogSearchRef = useRef(null); // Ref for dialog search bar

  // Open search bar and focus the dialog search bar
  const OpenSearchBar = () => {
    setIsSearchBarOpen(true);
  };

  // Close the search bar
  const CloseSearchBar = () => {
    setIsSearchBarOpen(false);
  };

  // Focus the search bar inside the dialog
  useEffect(() => {
    if (isSearchBarOpen) {
      const timeout = setTimeout(() => {
        dialogSearchRef.current?.focus();
      }, 0); // Ensure focus is applied after render
      return () => clearTimeout(timeout); // Clean up
    }
  }, [isSearchBarOpen]);

  return (
    <SearchBarDialogueContext.Provider
      value={{ OpenSearchBar, CloseSearchBar, isSearchBarOpen, dialogSearchRef }}
    >
      {children}
    </SearchBarDialogueContext.Provider>
  );
};

// Custom Hook to use the context
export const useSearchBar = () => {
  return useContext(SearchBarDialogueContext);
};
