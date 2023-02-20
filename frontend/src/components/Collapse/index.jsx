import { useState } from "react"
import iconCollapse from "../../assets/icon-collapse.svg"
import  "../Collapse/index.css"

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ? (
        <div className={"containerCollapse"}>
            <div className={"titleCollapse"} onClick={() => setIsOpen(false)}>
            {title}
            <img src={iconCollapse} className={"iconOpen"} alt="" />
            </div>
        <div className={"contentCollapse"}>{content}</div>
        </div>
    ) : (
    <div className={"containerCollapse"}>
        <div className={"titleCollapse"} onClick={() => setIsOpen(true)}>
        {title}
        <img src={iconCollapse} className={"icon"} alt="icône Collapse"/>
        </div>
    </div>
    )
}
export default Collapse