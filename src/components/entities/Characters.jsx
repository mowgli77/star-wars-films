import React, {useState} from 'react';
import ItemOk from "../common/ItemOk";
import {connect} from "react-redux";


const Characters = ({film, ...props}) => {

    const [isCharacter, setCharactersInfo] = useState(false)
    const [characterName, setCharacterName] = useState("")
    const [hiddenCharacterName, setHiddenCharacterName] = useState(false)

    const provideCharacters = () => {
        setCharactersInfo(!isCharacter)
    }
    const viewCharacter = (characters) => {
        setCharacterName(characters)
        setHiddenCharacterName(!hiddenCharacterName)
    }

    return (
            <div className={"entity-item"}>
                <span onClick={provideCharacters}>Characters </span>
                {isCharacter && <ul className={"entity-item__list"}>
                    {props.episodeCharacters.filter(p => film.characters.includes(p.url)).map(p =>
                        <li><span onClick={() => viewCharacter(p.name)}>
                                    {p.name}
                                </span>{characterName === p.name && hiddenCharacterName && <ItemOk p={p}/>}
                        </li>)}
                </ul>}
            </div>
    );
}
const mapStateToProps = (state) => ({
    episodeCharacters: state.star.episodeCharacters
})

export default connect(mapStateToProps, {})(Characters)
