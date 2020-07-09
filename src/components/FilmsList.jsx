import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {
    getEpisodeCharactersThunk,
    getEpisodePlanetsThunk,
    getEpisodeSpeciesThunk,
    getEpisodeStarshipsThunk,
    getEpisodeVehiclesThunk,
    getFilmsThunk
} from "../redux/reducer";
import FilmItem from "./FilmItem";

const FilmsList = (props) => {

    const [currentFilms, setCurrentFilms] = useState(props.films)
    const [addInfoId, setAddInfo] = useState(null)

    useEffect(() => {
        props.getFilmsThunk()
    }, [])

    useEffect(() => {
        props.films.map(p => p.planets.map(u => props.getEpisodePlanetsThunk(u)))
        console.log(props.films.map(p => p.planets))
    }, [props.films])

    const filterFunction = (text) => {
        let filtredFilms = props.films.filter(s => s.title.toUpperCase().includes(text))
        if (text.trim().length == 0) {
            setCurrentFilms(props.films)
        } else {
            setCurrentFilms(filtredFilms)
        }
    }

    const searchText = (e) => {
        let text = e.currentTarget.value.toUpperCase();
        filterFunction(text)
    }

    const getFilmInfo = (id) => setAddInfo(id)

    useEffect(() => {
        setCurrentFilms(props.films)
    }, [props.films])

    return (
        <div>
            <header className="header">
                <div className={"header__search"}>
                    <input placeholder={'Search film'} type={'text'} onKeyUp={searchText} />
                </div>
            </header>
            <div className={"films-list"}>
                {currentFilms.map(f => <FilmItem key={f.episode_id}
                                                 film={f}
                                                 addInfoId={addInfoId}
                                                 getFilmInfo={getFilmInfo}
                                                 images={props.images}
                                                 getEpisodePlanetsThunk={props.getEpisodePlanetsThunk}
                                                 getEpisodeCharactersThunk={props.getEpisodeCharactersThunk}
                                                 getEpisodeStarshipsThunk={props.getEpisodeStarshipsThunk}
                                                 getEpisodeVehiclesThunk={props.getEpisodeVehiclesThunk}
                                                 getEpisodeSpeciesThunk={props.getEpisodeSpeciesThunk}
                />)}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    films: state.star.films,
    images: state.star.images
})


export default connect(mapStateToProps, {
    getFilmsThunk, getEpisodePlanetsThunk, getEpisodeCharactersThunk, getEpisodeStarshipsThunk, getEpisodeVehiclesThunk, getEpisodeSpeciesThunk
})(FilmsList);