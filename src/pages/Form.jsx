import React from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import CircleBar from "../components/CircleBar";
import FAQ from "../components/FAQ";

function Form() {
  const [sidebarToggle] = useOutletContext();
  return (
    <>
      <main className="courseContentMain">
        
        <div className="courseleft">
          <div className="progressCircle">
          <CircleBar percentage={66} />
          <div className="title_progress">

          <span className="textCourseProgress course_text">course</span>
          <br />
          <span className="textCourseProgress">progress</span>
          </div>

          <p className="course_title">Learn Linux commands and  <br />   {'        '}practice as you progress</p>

          <p className="course_description">
        This linux For Beginners Course Teaches You The linux <br /> termianl Fast. Includes linux Online Training With Linux instance
      </p>

      <div className="faq">

      <FAQ  />
      <Link to="/table">
      <button className="next">Launch Instance</button>
          </Link>
      
      </div>
        


          </div>
          <div></div>
          <div></div>



        </div>
        <div className="courseRight">

        <div ><img src="assets/linux.png" alt="Avatar" className="course_cover" /></div>
        <br/>

        <div>
        <ul className='fd'>
              What you'll learn
          <li>-Quickly Learn the Linux Command Line <br />from Scratch!</li>
          <li>-Use Bash Scripts and Cron Scheduling <br />Software to Automate Boring Tasks!</li>
          <li>-Become an Independent User of the Linux <br />Operating System!</li>
          <li>-Learn how to Search for, Customise, Install<br /> and Manage Open Source Software with <br />Package Managers!</li>
          <li>-Operate a Linux Computer Entirely from the <br />Command Line!</li>
          <li>-Gain a Complete Understanding of Linux & fill <br />in any existing knowledge gaps!</li>
        </ul>
      </div>
        </div>

        
        
        
      </main>
    </>
  );
}

export default Form;
