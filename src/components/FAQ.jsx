import React, { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { FaStepBackward } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      title: 'Welcome to Linux course',
      content: ['Welcome', 'How to Install linux '],
    },
    {
      title: 'Navigating the linux File System',
      content: ['Navigate in the Terminal (pwd, ls, cd)','Tips: Autocompletion, History, Clear the Terminal','Linux File System Overview','Show Hidden Files'],
    },
    {
      title: 'Work with Files & Folders',
      content: ['Manage Files (touch, rm, cp, mv)', 'Create and Manage Directories (mkdir, rm -rf, ls -R, cp, mv)'],
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

export default FAQ;
