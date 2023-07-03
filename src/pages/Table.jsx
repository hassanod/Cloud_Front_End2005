import React from "react";

import { FaPerbyte } from "react-icons/fa";
import Accordion from "../components/Accordion";
import FAQQ from "../components/FAQQ";


function Table() {

  return (
    <>
      <main className="main_practise">
        <div className="terminal_space">
          <div className="full_screen"> 
          <div class></div>
          <FaPerbyte className="cona"/> 
          </div>
          <div className="terminal"></div>
          <div className="terminal_title">Practice in the linux instance </div>
          <div className="nav_bottom">
            <Accordion />
          </div>


        </div>


        <div className = "video_space">
          <div className="video_icon">
          
          <FaPerbyte className="cona"/> 

          </div>
          <div className="video_containter">
          <iframe width="450" height="280" src="https://www.youtube-nocookie.com/embed/gd7BXuUQ91w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
          <div className="title_video">
          Video : Navigating the file system
          </div>

          <div className="navigo">
          <FAQQ />

          </div>

          <button className="next">NEXT</button>



        </div>
       
    
      </main>
    </>
  );
}

export default Table;
