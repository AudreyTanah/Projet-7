import { useState } from "react"
import { Link } from "react-router-dom"
import Lodgings from "../../data/lodgings.json"
import "../Card/index.css"

function Card() {
    const [lodgings] = useState(Lodgings)
    return (
    <section className="allCards">
        {lodgings.map((lodging) => (
            <Link to={`/lodgings/${lodging.id}`} key={lodging.id}>  
            <article key={lodging.id} className="card">
                <img src={lodging.cover} alt={lodging.title} className="imgCard"/>
                <div className="titleCard">{lodging.title}</div>
            </article>
        </Link>
        ))}
    </section>
    )
}
export default Card