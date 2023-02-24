import Carroussel from "../components/Carroussel"
import lodgings from "../data/lodgings.json"
import {useParams} from "react-router-dom"
import Error from "../components/Error"

function LodgingPage () {
  const {id} = useParams()
  const foundLodging = lodgings.find(lodging => {
    return lodging.id === id

  })

  if (foundLodging === undefined ) {
  return < Error />
}
  console.log(foundLodging)
    return (
        <>
        {foundLodging.pictures.length > 1 
        ? < Carroussel pictures={foundLodging.pictures}  />
        :<img src={foundLodging.pictures[0]}  alt="logement"/>
        }     
        </>
    )
}

export default LodgingPage