import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { FaStepBackward } from 'react-icons/fa';

const Faqpython = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      title: 'Welcome python course',
      content: ['Welcome', 'How to Install python '],
    },
    {
      title: 'Introduction',
      content: ['Keywords and identifiers','Variables & constants','Python datatypes','Python I/O and Imports'],
    },
    {
      title: 'Python Flow Control',
      content: ['Python if else', 'Python For Loop','Python While loop','Python While loop'],
    },
    {
      title: 'Course Conclusion',
      content: ['What we have seen So far', 'Extension'],
    },
  ];

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div>
      {faqData.map((faq, index) => (
        <div key={index}>
          <div onClick={() => handleToggle(index)} className='section_title'>
            <AiFillCaretDown style={{ marginRight: '0.5em' }} />
            {faq.title}
          </div>
          {activeIndex === index && (
            <div className='section_desc'>
              {faq.content.map((item, itemIndex) => (
                <div key={itemIndex} className='desc_item'>
                  <FaStepBackward style={{ marginLeft: '0.5em' }} />
                  {item}
                  
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faqpython;
