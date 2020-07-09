import React, {useState} from 'react';
import ItemOk from "../common/ItemOk";
import {connect} from "react-redux";


const Vehicles = ({film, ...props}) => {

    const [isVehicles, setVehiclesInfo] = useState(false)
    const [vehiclesName, setVehiclesName] = useState("")
    const [hiddenVehiclesName, setHiddenVehiclesName] = useState(false)

    const provideCharacters = () => {
        setVehiclesInfo(!isVehicles)
    }
    const viewCharacter = (characters) => {
        setVehiclesName(characters)
        setHiddenVehiclesName(!hiddenVehiclesName)
    }

    return (
            <div className={"entity-item"}>
                <span onClick={provideCharacters}>Vehicles </span>
                {isVehicles && <ul className={"entity-item__list"}>
                    {props.episodeVehicles.filter(p => film.vehicles.includes(p.url)).map(p =>
                        <li><span onClick={() => viewCharacter(p.name)}>
                                    {p.name}
                                </span>{vehiclesName === p.name && hiddenVehiclesName && <ItemOk p={p}/>}
                        </li>)}
                </ul>}
            </div>
    );
}
const mapStateToProps = (state) => ({
    episodeVehicles: state.star.episodeVehicles
})

export default connect(mapStateToProps, {})(Vehicles);
