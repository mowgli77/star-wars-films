import React, {useEffect} from 'react';
import EpisodeItem from "./EpisodeItems";

const FilmItem = ({film, ...props}) => {

    useEffect(() => {
        film.planets.map(u => props.getEpisodePlanetsThunk(u))
        film.characters.map(u => props.getEpisodeCharactersThunk(u))
        film.starships.map(u => props.getEpisodeStarshipsThunk(u))
        film.vehicles.map(u => props.getEpisodeVehiclesThunk(u))
        film.species.map(u => props.getEpisodeSpeciesThunk(u))
    }, [])


    const provideAddInfo = (id) => {
        props.getFilmInfo(id)
    }
    const endProvideAddInfo = () => {
        props.getFilmInfo(null)
    }


    return (
       <div className={"films-list__item"}>
           <div className={"films-list__photo"}>
               {props.images.filter(f => f.id === film.episode_id).map(p => <img src={p.src} />)}
               </div>
           {props.addInfoId !== film.episode_id ?
               <div className={"films-list__title"}><span onClick={() => provideAddInfo(film.episode_id)}>{film.title}</span></div>
           : <div className={"films-list__title"}><span onClick={(endProvideAddInfo)}>{film.title}</span></div>}
           {props.addInfoId === film.episode_id ?
               <EpisodeItem film={film}/>
           : undefined}
       </div>
    );
}

export default FilmItem;

