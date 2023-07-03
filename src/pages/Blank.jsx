import React from "react";

import { useOutletContext } from "react-router-dom";

function Blank() {
  const [sidebarToggle] = useOutletContext();
  return (
    <>
      <main className="main">
      

    <div className="top">


    <button className="close_button">X Join a Class</button>
      <button className="join_button">
        Join the Class
      </button>
    </div>

    
    <div className="mid">
    <p className="e">You are logged in as</p>
      <div className="person">
        

        <div className="left">

        <span className="e1">hassan oudrar</span>
        <span className="e2">hassan111@gmail.com</span>

        </div>
        <div className="right"><img src="assets/pr.jpg" alt="Avatar" className="e11" /></div>
        
      </div>
      
      <a className="e3">class code</a>
      <a className="e4">Ask your teacher for the course code, then enter it here.</a>
      <input className="f" type="text" name="pseudo" placeholder="Enter code here" />
      <ul className="list-disc ml-6">
        <li className="l11">Use a course code consisting of 5 to 7 letters or numbers, without spaces or symbols</li>
        <li className="l22">The code will expire in 48 hours</li>
      </ul>
    </div>

    
        
      </main>
    </>
  );
}

export default Blank;
