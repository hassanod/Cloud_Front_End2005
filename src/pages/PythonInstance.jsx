import React from "react";

import { FaPerbyte } from "react-icons/fa";
import Accpython from "../components/Accpython";
import Bifaq from "../components/Bifaq";


function PythonInstance() {

  return (
    <>
      <main className="main_practise">
        <div className="terminal_space">
          <div className="full_screen"> 
          <div class></div>
          <FaPerbyte className="cona"/> 
          </div>
          <div className="terminal">
          
      <iframe
        src="https://www.programiz.com/python-programming/online-compiler/"
        title="Embedded Content"
        style={{ width: '100%', height: '100%' }}
        
      ></iframe>
    
          </div>
          <div className="terminal_title">Practice in the linux instance </div>
          <div className="nav_bottom">
            <Accpython />
          </div>


        </div>


        <div className = "video_space">
          <div className="video_icon">
          
          <FaPerbyte className="cona"/> 

          </div>
          <div className="video_containter">
          <iframe width="500" height="280" src="https://www.youtube-nocookie.com/embed/rfscVS0vtbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
          <div className="title_video">
          Video : Navigating the file system
          </div>

          <div className="navigo">
          <Bifaq />

          </div>

          



        </div>
       
    
      </main>
    </>
  );
}

export default PythonInstance;
