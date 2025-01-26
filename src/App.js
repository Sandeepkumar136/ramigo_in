import React from 'react';
import '../src/components/ui/Style.css';
import Navbar from './components/contents/Navbar';
import { NavbarToggleContextProvider } from './components/contexts/NavbartoggleContext';
import DashBoard from './components/pages/DashBoard';

const App = () => {
  return (
    <NavbarToggleContextProvider>
    <div>
      <Navbar/>
      <DashBoard/>
    </div>
    </NavbarToggleContextProvider>
  )
}

export default App;
