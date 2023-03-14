import { useState } from "react";
import iconCollapse from "../../assets/icon-collapse.svg";
import "../Collapse/index.css";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false); //C'est à dire fermé état initial
  return isOpen ? (
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
