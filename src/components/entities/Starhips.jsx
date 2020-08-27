import React, {useState} from 'react';
import ItemOk from "../common/ItemOk";
import {connect} from "react-redux";
import {getEpisodeStarshipsThunk} from "../../redux/actions";


const Starships = ({film, ...props}) => {

    const [isStarship, setStarshipInfo] = useState(false)
    const [starshipName, setStarshipName] = useState("")
    const [hiddenStarshipName, setHiddenStarshipName] = useState(false)

    const provideCharacters = () => {
        setStarshipInfo(!isStarship)
        film.starships.forEach(u => props.getEpisodeStarshipsThunk(u))
    }
    const viewCharacter = (characters) => {
        setStarshipName(characters)
        setHiddenStarshipName(!hiddenStarshipName)
    }

    return (
            <div className={"entity-item"}>
                <span onClick={provideCharacters}>Starships </span>
                {isStarship && <ul className={"entity-item__list"}>
                    {props.episodeStarships.filter(p => film.starships.includes(p.url)).map(p =>
                        <li><span onClick={() => viewCharacter(p.name)}>
                                    {p.name}
                                </span>{starshipName === p.name && hiddenStarshipName && <ItemOk p={p}/>}
                        </li>)}
                </ul>}
            </div>
    );
}
const mapStateToProps = (state) => ({
    episodeStarships: state.star.episodeStarships
})

export default connect(mapStateToProps, {getEpisodeStarshipsThunk})(Starships);
