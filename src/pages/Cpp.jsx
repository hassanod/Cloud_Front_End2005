import React from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



function Cpp() {
  const [sidebarToggle] = useOutletContext();
  return (
    <>
      <main className="courseContentMain">
        
      <div className="soon">Coming Soon ! ! ! </div>
        
      </main>
    </>
  );
}

export default Cpp;
