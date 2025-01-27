import React from 'react'
import { useSearchBar } from '../contexts/SearchBarDialogueContext';

const SearchBarDialogue = () => {
    const { CloseSearchBar, isSearchBarOpen, dialogSearchRef} = useSearchBar();

    const handleOnCloseDialog = (e) =>{
        if(e.target.id==="SearchBar-Overlay"){
            CloseSearchBar();
        };
    };



  return (
    isSearchBarOpen && (
        <div onClick={handleOnCloseDialog}  id="SearchBar-Overlay">
            <div className="Searchbar-d-content">
                <input placeholder='Search Articles...' type="text" name="searchbar" ref={dialogSearchRef} id="search-d-bar" className="searchbar-dashboard" />
            </div>
        </div>
    )
  )
}

export default SearchBarDialogue;
