import React from 'react';
import '../src/components/ui/Style.css';
import Navbar from './components/contents/Navbar';
import { NavbarToggleContextProvider } from './components/contexts/NavbartoggleContext';
import DashBoard from './components/pages/DashBoard';
import CoinHighlightProvider from './components/contexts/CoinHighLightContext';
import { SearchBarDialogueProvider } from './components/contexts/SearchBarDialogueContext';
import SearchBarDialogue from './components/dialog/SearchBarDialogue';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CryptoCoins from './components/pages/CryptoCoins';
import CyberSecurityNews from './components/pages/CyberSecurityNews';
import DataAndLogAnalysisTool from './components/pages/DataAndLogAnalysisTool';
import Domain from './components/pages/Domain';
import Forex from './components/pages/Forex';
import IpAdressTool from './components/pages/IpAdressTool';
import NetworkAndPortsTools from './components/pages/NetworkAndPortsTools';
import PasswordSecurity from './components/pages/PasswordSecurity';
import ThreadInteligenceTool from './components/pages/ThreadInteligenceTool';
import Vulneburity from './components/pages/Vulneburity';
import { SettingDialogueContextProvider } from './components/contexts/SettingDialogue';
import SettingDialogue from './components/dialog/SettingDialogue';
import { DarkModeProvider } from './components/contexts/DarkModeContext';

const App = () => {
  return (
    <Router>
    <DarkModeProvider>
    <NavbarToggleContextProvider>
      <SettingDialogueContextProvider>
      <SearchBarDialogueProvider>
      <CoinHighlightProvider>
          <Navbar />
          <SettingDialogue/>
          <SearchBarDialogue/>
        <Routes>
          <Route path='/' element={<DashBoard/>} />
          <Route path='/crypto' element={<CryptoCoins/>} />
          <Route path='/cnews' element={<CyberSecurityNews/>} />
          <Route path='/datalog' element={<DataAndLogAnalysisTool/>} />
          <Route path='/domain' element={<Domain/>} />
          <Route path='/forex' element={<Forex/>} />
          <Route path='/iptool' element={<IpAdressTool/>} />
          <Route path='/networktool' element={<NetworkAndPortsTools/>} />
          <Route path='/password' element={<PasswordSecurity/>} />
          <Route path='/thread' element={<ThreadInteligenceTool/>} />
          <Route path='/vuln' element={<Vulneburity/>} />

        </Routes>
      </CoinHighlightProvider>
      </SearchBarDialogueProvider>
      </SettingDialogueContextProvider>
    </NavbarToggleContextProvider>
    </DarkModeProvider>
    </Router>
  )
}

export default App;
