import React, {useState} from 'react'
import './Card.css'  
const Card = (props) => {
const [isOpen, setIsOpen] = useState(false);

return (
  <div>
    <button id='btn1' onClick={() => setIsOpen(!isOpen)} >
      {props.name}
    </button>

    {isOpen && (
      <div>
        {props.children}
      </div>
    )}
  </div>
);
}

export default Card
