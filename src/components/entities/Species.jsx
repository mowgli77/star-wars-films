import React, {useState} from 'react';
import ItemOk from "../common/ItemOk";
import {connect} from "react-redux";
import {getEpisodeSpeciesThunk} from "../../redux/reducer";


const Species = ({film, ...props}) => {

    const [isSpecies, setSpeciessInfo] = useState(false)
    const [speciesName, setSpeciesName] = useState("")
    const [hiddenSpeciesName, setHiddenSpeciesName] = useState(false)

    const provideCharacters = () => {
        setSpeciessInfo(!isSpecies)
        film.species.map(u => props.getEpisodeSpeciesThunk(u))
    }
    const viewCharacter = (characters) => {
        setSpeciesName(characters)
        setHiddenSpeciesName(!hiddenSpeciesName)
    }

    return (
            <div className={"entity-item"}>
                <span onClick={provideCharacters}>Spacies </span>
                {isSpecies && <ul className={"entity-item__list"}>
                    {props.episodeSpecies.filter(p => film.species.includes(p.url)).map(p =>
                        <li><span onClick={() => viewCharacter(p.name)}>
                                    {p.name}
                                </span>{speciesName === p.name && hiddenSpeciesName && <ItemOk p={p}/>}
                        </li>)}
                </ul>}
            </div>
    );
}
const mapStateToProps = (state) => ({
    episodeSpecies: state.star.episodeSpecies
})

export default connect(mapStateToProps, {getEpisodeSpeciesThunk})(Species);
