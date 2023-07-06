import React from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import CircleBar from "../components/CircleBar";
import Faqpython from "../components/Faqpython";

function Python() {
  const [sidebarToggle] = useOutletContext();
  return (
    <>
      <main className="courseContentMain">
        
        <div className="courseleft">
          <div className="progressCircle">
          <CircleBar percentage={20} />
          <div className="title_progress">

          <span className="textCourseProgress course_text">course</span>
          <br />
          <span className="textCourseProgress">progress</span>
          </div>

          <p className="course_title">Learn python programming  and <br />   {'        '}practice as you progress</p>

          <p className="course_description">
        This Python For Beginners Course Teaches You The Python <br /> Language Fast. Includes Python Online Training With Python 3
      </p>

      <div className="faq">

      <Faqpython  />
      <Link to="/PythonInstance">
      <button className="next">Launch Instance</button>
          </Link>
      
      </div>
        


          </div>
          <div></div>
          <div></div>



        </div>
        <div className="courseRight">

        <div ><img src="https://i.ytimg.com/vi/WGJJIrtnfpk/maxresdefault.jpg" alt="Avatar" className="course_cover" /></div>
        <br/>

        <div>
        <ul className='fd'>
            what you will learn
  <li>-Learn the basics of Python programming language.</li>
  <li>-Understand fundamental concepts such as variables, data types, and control structures.</li>
  <li>-Explore advanced topics like object-oriented programming (OOP) and functional programming.</li>
  <li>-Learn how to write and execute Python scripts.</li>
  <li>-Gain proficiency in using Python libraries and modules for various tasks.</li>
  <li>-Develop skills in handling file input/output operations.</li>
  <li>-Learn how to work with databases using Python.</li>
</ul>

      </div>
        </div>

        
        
        
      </main>
    </>
  );
}

export default Python;
