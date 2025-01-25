import React from 'react'
import { useNavToggle } from '../contexts/NavbartoggleContext';

const Sidebar = ({ OnItemsClick }) => {
        const {isSidebar, ToggleSidebar} = useNavToggle();
    const Navitems = [
        {
            "title": "Cryptocurrency",
            "icon": "bx bx-bitcoin"
        },
        {
            "title": "Forex",
            "icon": "bx bx-line-chart"
        },
        {
            "title": "Cybersecurity News",
            "icon": "bx bx-news"
        },
        {
            "title": "IP Address Tools",
            "icon": "bx bx-map"
        },
        {
            "title": "Network and Port Tools",
            "icon": "bx bx-network-chart"
        },
        {
            "title": "Threat Intelligence Tools",
            "icon": "bx bx-shield"
        },
        {
            "title": "Password Security Tools",
            "icon": "bx bx-lock-alt"
        },
        {
            "title": "Domain Tools",
            "icon": "bx bx-globe"
        },
        {
            "title": "Data and Log Analysis Tools",
            "icon": "bx bx-data"
        },
        {
            "title": "Vulnerability Scanning Tools",
            "icon": "bx bx-bug"
        },
        {
            "title": "Saved",
            "icon": "bx bx-bookmark"
        }
        ,{
            "title": "Settings",
            "icon": "bx bx-cog"
        }
    ]
    return (
        <div>
            <div className={`sidebar ${isSidebar ? "open": ""}`}>
                {
                    Navitems.map((item, index) => (
                        <div key={index} onClick={()=>{OnItemsClick(item.title);}} className="sidebar-list">
                            <li className="sidebar-items">
                                <span className="sidebar-icons"><i className={item.icon}></i></span> <span className="sidebar-item-title">{item.title}</span>
                            </li>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar;