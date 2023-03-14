import { useState } from "react";
import iconCollapse from "../../assets/icon-collapse.svg";
import "../Collapse/index.css";

function Collapse({ title, content }) {//Props title - content dans pages About.jsx
  const [isOpen, setIsOpen] = useState(false);//isOpen - état initial - false - celui-ci ne change jamais
  return isOpen ? (//setIsOpen - mis à jour de l'état local, peut planifier un nouveau rendu avec le true 
    <div className="containerCollapse">        
      <div className="titleCollapse" onClick={() => setIsOpen(false)}>
        {title}
        <img src={iconCollapse} className="iconOpen" alt="icône Collapse" />
      </div>
      <div className="contentCollapse">{content}</div>
    </div>
  ) : (
    <div className="containerCollapse">
      <div className="titleCollapse" onClick={() => setIsOpen(true)}>
        {title}
        <img src={iconCollapse} className="iconClose" alt="icône Collapse" />
      </div>
    </div>
  );
}
export default Collapse;
