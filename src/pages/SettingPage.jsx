import React from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import Setting from "../components/Setting";


function SettingPage() {
  const [sidebarToggle] = useOutletContext();
  return (
    <main className="h-full">
      

      {/* Main Content */}
      <div className="mainCard">
        <Setting />
      </div>
    </main>
  );
}

export default SettingPage;