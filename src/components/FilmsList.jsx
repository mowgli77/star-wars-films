import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import FilmItem from "./FilmItem";
import {getFilmsThunk, sortFilmsByABC, sortFilmsByZYX} from "../redux/actions";
import Header from "./Header";


const FilmsList = (props) => {

    const [currentFilms, setCurrentFilms] = useState(props.films)
    const [addInfoId, setAddInfo] = useState(null)

    useEffect(() => {
        props.getFilmsThunk()
    }, [])

    const filterFunction = (text) => {
        let filtredFilms = props.films.filter(s => s.title.toUpperCase().includes(text))
        if (text.trim().length === 0) {
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
            <Header searchText={searchText}
                    sortFilmsByABC={props.sortFilmsByABC}
                    sortFilmsByZYX={props.sortFilmsByZYX}
                    getFilmsThunk={props.getFilmsThunk}

            />
            <div className={"films-list"}>
                {currentFilms.map(f => <FilmItem key={f.episode_id}
                                                 film={f}
                                                 addInfoId={addInfoId}
                                                 getFilmInfo={getFilmInfo}
                                                 images={props.images}
                />)}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    films: state.star.films,
    images: state.star.images
})

export default connect(mapStateToProps,
    {getFilmsThunk, sortFilmsByABC, sortFilmsByZYX}
)(FilmsList);