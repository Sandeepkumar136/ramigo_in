import React, { useState } from "react";
import Switch from "react-switch";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import { useSettingDialogue } from "../contexts/SettingDialogue";

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
    twoFactorAuth: false, // Switch 5: Two-Factor Authentication
  });

  // Handle toggle for switches
  const toggleSwitch = (settingKey) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [settingKey]: !prevSettings[settingKey],
    }));
  };

  // Animation variants for the dialogue box
  const dialogueVariants = {
    hidden: { opacity: 0, y: -50 }, // Initial state
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Enter animation
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } }, // Exit animation
  };

  // Animation variants for individual switch content
  const switchVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5, type: "spring" },
    }),
    exit: { opacity: 0, x: -30, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isSettingOpen && (
        <div onClick={HandleSettingDialogue} id="Setting-Overlay">
          {/* Animated dialogue box */}
          <motion.div
            className="setting-box-content"
            variants={dialogueVariants} // Apply animation variants to the dialogue box
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h2 className="setting-heading">Settings</h2>
            <div className="setting-box-container">
              {/* Switch 1: Theme */}
              <motion.div
                className="switch-setting-contain"
                variants={switchVariants}
                custom={0}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="setting-text-content">
                  <i className="bx bx-moon"></i>
                  <p className="setting-text">Theme</p>
                </div>
                <div className="setting-switch-content">
                  <Switch
                    checked={settings.themeMode}
                    onChange={() => toggleSwitch("themeMode")}
                  />
                </div>
              </motion.div>

              {/* Switch 2: Notifications */}
              <motion.div
                className="switch-setting-contain"
                variants={switchVariants}
                custom={1}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="setting-text-content">
                  <i className="bx bx-moon"></i>
                  <p className="setting-text">Notifications</p>
                </div>
                <div className="setting-switch-content">
                  <Switch
                    checked={settings.notifications}
                    onChange={() => toggleSwitch("notifications")}
                  />
                </div>
              </motion.div>

              {/* Switch 3: Price Alerts */}
              <motion.div
                className="switch-setting-contain"
                variants={switchVariants}
                custom={2}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="setting-text-content">
                  <i className="bx bx-moon"></i>
                  <p className="setting-text">Price Alerts</p>
                </div>
                <div className="setting-switch-content">
                  <Switch
                    checked={settings.priceAlerts}
                    onChange={() => toggleSwitch("priceAlerts")}
                  />
                </div>
              </motion.div>

              {/* Switch 4: IP Tracking */}
              <motion.div
                className="switch-setting-contain"
                variants={switchVariants}
                custom={3}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="setting-text-content">
                  <i className="bx bx-moon"></i>
                  <p className="setting-text">IP Tracking</p>
                </div>
                <div className="setting-switch-content">
                  <Switch
                    checked={settings.ipTracking}
                    onChange={() => toggleSwitch("ipTracking")}
                  />
                </div>
              </motion.div>

              {/* Switch 5: Two-Factor Authentication */}
              <motion.div
                className="switch-setting-contain"
                variants={switchVariants}
                custom={4}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="setting-text-content">
                  <i className="bx bx-moon"></i>
                  <p className="setting-text">Two-Factor Authentication</p>
                </div>
                <div className="setting-switch-content">
                  <Switch
                    checked={settings.twoFactorAuth}
                    onChange={() => toggleSwitch("twoFactorAuth")}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SettingDialogue;
