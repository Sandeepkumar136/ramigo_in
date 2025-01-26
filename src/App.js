import React from 'react';
import '../src/components/ui/Style.css';
import Navbar from './components/contents/Navbar';
import { NavbarToggleContextProvider } from './components/contexts/NavbartoggleContext';
import DashBoard from './components/pages/DashBoard';
import CoinHighlightProvider from './components/contexts/CoinHighLightContext';
import { SearchBarDialogueProvider } from './components/contexts/SearchBarDialogueContext';
import SearchBarDialogue from './components/dialog/SearchBarDialogue';

const App = () => {
  return (
    <NavbarToggleContextProvider>
      <SearchBarDialogueProvider>
      <CoinHighlightProvider>
        <div>
          <Navbar />
          <DashBoard />
          <SearchBarDialogue/>
        </div>
      </CoinHighlightProvider>
      </SearchBarDialogueProvider>
    </NavbarToggleContextProvider>
  )
}

export default App;
