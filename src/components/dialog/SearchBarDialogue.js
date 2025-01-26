import React from 'react'
import { useSearchBar } from '../contexts/SearchBarDialogueContext';

const SearchBarDialogue = () => {
    const { CloseSearchBar, isSearchBarOpen} = useSearchBar();

    const handleOnCloseDialog = (e) =>{
        if(e.target.id==="SearchBar-Overlay"){
            CloseSearchBar();
        };
    };



  return (
    isSearchBarOpen && (
        <div onClick={handleOnCloseDialog} id="SearchBar-Overlay">
            <div className="Searchbar-d-content">
                <input type="text" name="searchbar" id="search-d-bar" className="input-d-search" />
            </div>
        </div>
    )
  )
}

export default SearchBarDialogue;
