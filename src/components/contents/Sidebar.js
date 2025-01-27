import React from 'react'
import { useNavToggle } from '../contexts/NavbartoggleContext';
import { Link } from 'react-router-dom';

const Sidebar = ({ OnItemsClick }) => {
    const { isSidebar, ToggleSidebar } = useNavToggle();
    const Navitems = [
        {
            "title": "Cryptocurrency",
            "icon": "bx bx-bitcoin",
            path: "/crypto"
        },
        {
            "title": "Forex",
            "icon": "bx bx-line-chart",
            path: "/forex"

        },
        {
            "title": "Cybersecurity News",
            "icon": "bx bx-news",
            path: "/cnews"
        },
        {
            "title": "IP Address Tools",
            "icon": "bx bx-map",
            path: "/iptool"
        },
        {
            "title": "Network and Port Tools",
            "icon": "bx bx-network-chart",
            path: "/networktool"
        },
        {
            "title": "Threat Intelligence Tools",
            "icon": "bx bx-shield",
            path: "/thread"
        },
        {
            "title": "Password Security Tools",
            "icon": "bx bx-lock-alt",
            path: "/password"
        },
        {
            "title": "Domain Tools",
            "icon": "bx bx-globe",
            path: "/domain"
        },
        {
            "title": "Data and Log Analysis Tools",
            "icon": "bx bx-data",
            path: "/datalog"
        },
        {
            "title": "Vulnerability Scanning Tools",
            "icon": "bx bx-bug",
            path: "/vuln"
        },
    ]
    return (
        <div>
            <div className={`sidebar ${isSidebar ? "open" : ""}`}>
                {
                    Navitems.map((item, index) => (
                        <div key={index} onClick={() => { OnItemsClick(item.title); }} className="sidebar-list">
                            <Link to={item.path} onClick={()=>{ToggleSidebar();}} className="sidebar-items">
                                <span className="sidebar-icons"><i className={item.icon}></i></span> <span className="sidebar-item-title">{item.title}</span>
                            </Link>
                        </div>
                    ))
                }
                <div className="sidebar-list">
                    <li onClick={ToggleSidebar} className="sidebar-items">
                        <span className="sidebar-icons"><i className="bx bx-bookmarks"></i></span> <span className="sidebar-item-title">Saved</span>
                    </li>
                </div>
                <div className="sidebar-list">
                    <li onClick={ToggleSidebar} className="sidebar-items">
                        <span className="sidebar-icons"><i className="bx bx-cog"></i></span> <span className="sidebar-item-title">Settings</span>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;