import React from 'react';
import '../src/components/ui/Style.css';
import Navbar from './components/contents/Navbar';
import { NavbarToggleContextProvider } from './components/contexts/NavbartoggleContext';

const App = () => {
  return (
    <NavbarToggleContextProvider>
    <div>
      <Navbar/>
      <div className="content"></div>
    </div>
    </NavbarToggleContextProvider>
  )
}

export default App;
