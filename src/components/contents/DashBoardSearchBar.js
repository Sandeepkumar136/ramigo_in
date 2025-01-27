import React, { useEffect } from 'react';
import { useSearchBar } from '../contexts/SearchBarDialogueContext';
import { animate } from '@motionone/dom';

const DashBoardSearchBar = () => {
  const { OpenSearchBar } = useSearchBar();

  useEffect(() => {
    animate('.searchbar-dashboard', { opacity: [0, 1], translateY: [50, 0] }, { duration: 1 });
  }, []);

  return (
    <div className="search-bar">
      <input
        onClick={OpenSearchBar}
        placeholder="Search Articles..."
        type="text"
        name="Search"
        id="Searchbar"
        className="searchbar-dashboard" disabled
      />
    </div>
  );
};

export default DashBoardSearchBar;
