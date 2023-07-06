import React, { useState } from 'react';
import ChatUI from "../components/ChatUI";

const Accpython = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      <div className="accordion__titles">
        <h3 className={`accordion__title ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleClick(0)}>Progress</h3>
        <h3 className={`accordion__title ${activeIndex === 1 ? 'active' : ''}`} onClick={() => handleClick(1)}>Chatbot</h3>
      </div>
      <div className="accordion__contents">
        <div className={`accordion__content cord ${activeIndex === 0 ? 'active' : ''}`}>
          <div className='Greneto'><span className='Valide'>V</span>open Editor</div>
          <div className='Greneto'><span className='Valide'>V</span>Declare a variable number and give it a value of 5</div>
          <div className='Greneto'><span className='Valide'>V</span>test if number is positive number</div>
          <div className='Greneto'><span className='Valide'>V</span>print output</div>
          
          <div className='Greneto'><span className='Valide'>V</span>Clear Editor</div>

          <div className='Greneto'><span className='Valide'>X</span>Close terminal</div>
        </div>
        <div className={`accordion__content ${activeIndex === 1 ? 'active' : ''}`}>
        <ChatUI />
        </div>
      </div>
    </div>
  );
};

export default Accpython;
