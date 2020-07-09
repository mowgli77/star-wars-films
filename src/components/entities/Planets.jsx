import React, {useState} from 'react';
import ItemOk from "../common/ItemOk";
import {connect} from "react-redux";


const Planets = ({film, ...props}) => {

    const [isPlanets, setPlanetsInfo] = useState(false)
    const [planetName, setPlanetName] = useState("")
    const [hiddenPlanetName, setHidePlanetName] = useState(false)

    const providePlanets = () => {
        setPlanetsInfo(!isPlanets)
    }
    const viewPlanet = (planetName) => {
        setPlanetName(planetName)
        setHidePlanetName(!hiddenPlanetName)
    }

    return (
            <div className={"entity-item"}>
                <span onClick={providePlanets}>Planets </span>
                {isPlanets && <ul className={"entity-item__list"}>
                    {props.episodePlanets.filter(p => film.planets.includes(p.url)).map(p =>
                        <li><span onClick={() => viewPlanet(p.name)}>
                                    {p.name}
                                </span>{planetName === p.name && hiddenPlanetName && <ItemOk p={p}/>}
                        </li>)}
                </ul>}
            </div>
    );
}


const mapStateToProps = (state) => ({
    episodePlanets: state.star.episodePlanets
})

export default connect(mapStateToProps, {})(Planets)
