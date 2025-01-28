import React, { useState } from 'react'
import Logo from './Logo';
import Sidebar from './Sidebar';
import { useNavToggle } from '../contexts/NavbartoggleContext';
import { useSettingDialogue } from '../contexts/SettingDialogue';

const Navbar = () => {
    const [logoTitle, setLogoTitle] = useState("DashBoard");
    const {isSidebar, ToggleSidebar} = useNavToggle();
        const {OpenSetting} = useSettingDialogue();
    const handleNavbarClick = (title) =>{
        setLogoTitle(title);
    };
  return (
    <div className='navbar'>
      <header className="header">
      <Logo title={logoTitle} />
      <ul className="nav-icons">
        <li className="nav-icons-items"><i className='bx bx-bookmarks'></i></li>
        <li onClick={OpenSetting} className="nav-icons-items"><i className='bx bx-cog'></i></li>
        <li className="nav-icons-items-t" onClick={ToggleSidebar} ><i className={`bx bx-${isSidebar ? "x": "menu"}`}></i></li>
      </ul>
      </header>
      <Sidebar OnItemsClick={handleNavbarClick} />
    </div>
  )
}

export default Navbar;
