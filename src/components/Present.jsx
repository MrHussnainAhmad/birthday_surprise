import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import "../assets/css/present.css";

function Present() {
  // State to manage the text
  const [text, setText] = useState("Gift Chahyy? Tu Dabby py Click kro💝");
  // State to track whether the box is open or closed
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  // Function to handle the checkbox click event
  const handleCheckboxClick = () => {
    if (isBoxOpen) {
      // If the box is already open and the user closes it
      setText("Nhi Cahyy Gift, To Btado, Box Q bnd kr rhy ho?😾😾");
    } else {
      // If the box is closed and the user opens it
      setText("Whatsapp Py Bta Do :)🎗️");
    }
    // Toggle the state of the box (open/close)
    setIsBoxOpen(!isBoxOpen);
  };

  return (
    <SectionWrapper>
      <div className='mb-64'>
        {/* Dynamically display the text based on state */}
        <h1 className="absolute -top-[7rem] left-0 right-0 text-center flex items-center justify-center text-xl font-extrabold text-customBlue drop-shadow-lg">
          {text}
        </h1>
      </div>
      <div className="birthday-gift">
        {/* Add onChange event to the checkbox */}
        <input id='click' type='checkbox' onChange={handleCheckboxClick} />
        <label className='gift' htmlFor='click'>
          <div className="gift-top"></div>
          <div className="gift-bottom"></div>
          <div id="raffle-red" className="entry raffle raffle-1">
            <div className="no-scale">
              <span className="ticket-text">UC<br/>360</span>
            </div>
          </div>
          <div id="raffle-red" className="entry raffle raffle-2">
            <div className="no-scale">
              <span className="ticket-text">A<br/>Gift</span>
            </div>
          </div>
          <div id="raffle-red" className="entry raffle raffle-3">
            <div className="no-scale">
              <span className="ticket-text">Large<br/>Pizza</span>
            </div>
          </div>
        </label>
      </div>
    </SectionWrapper>
  );
}

export default Present;