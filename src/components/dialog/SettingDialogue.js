import React, { useState } from 'react';
import Switch from 'react-switch';
import { useSettingDialogue } from '../contexts/SettingDialogue';

const SettingDialogue = () => {
    const { CloseSetting, isSettingOpen } = useSettingDialogue();

    const HandleSettingDialogue = (e) => {
        if (e.target.id === "Setting-Overlay") {
            CloseSetting();
        }
    };

    // Temporary configurations for the switches
    const [settings, setSettings] = useState({
        themeMode: false, // Switch 1: Light/Dark Mode
        notifications: false, // Switch 2: Enable/Disable Notifications
        priceAlerts: false, // Switch 3: Price Alerts
        ipTracking: false, // Switch 4: IP Address Tracking
        twoFactorAuth: false // Switch 5: Two-Factor Authentication
    });

    // Handle toggle for switches
    const toggleSwitch = (settingKey) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [settingKey]: !prevSettings[settingKey]
        }));
    };

    return (
        isSettingOpen && (
            <div onClick={HandleSettingDialogue} id="Setting-Overlay">
                <div>
                    <h2>Settings</h2>
                    {/* Switch 1: Light/Dark Mode */}
                    <div>
                        <Switch
                            checked={settings.themeMode}
                            onChange={() => toggleSwitch('themeMode')}
                            />
                            <span>Theme Mode</span>
                    </div>
                    {/* Switch 2: Enable/Disable Notifications */}
                    <div>
                        <Switch
                            checked={settings.notifications}
                            onChange={() => toggleSwitch('notifications')}
                            />
                            <span>Notifications</span>
                    </div>
                    {/* Switch 3: Price Alerts */}
                    <div>
                        <Switch
                            checked={settings.priceAlerts}
                            onChange={() => toggleSwitch('priceAlerts')}
                            />
                            <span>Price Alerts</span>
                    </div>
                    {/* Switch 4: IP Address Tracking */}
                    <div>
                        <Switch
                            checked={settings.ipTracking}
                            onChange={() => toggleSwitch('ipTracking')}
                            />
                            <span>IP Address Tracking</span>
                    </div>
                    {/* Switch 5: Two-Factor Authentication */}
                    <div>
                        <Switch
                            checked={settings.twoFactorAuth}
                            onChange={() => toggleSwitch('twoFactorAuth')}
                            />
                            <span>Two-Factor Authentication</span>
                    </div>
                </div>
            </div>
        )
    );
};

export default SettingDialogue;
