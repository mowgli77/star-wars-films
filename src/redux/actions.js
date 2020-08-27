import {getFilmsAPI, getSomethingAPI} from "../API/api";
import {
    EPISODE_CHARACTERS,
    EPISODE_PLANETS,
    EPISODE_SPECIES,
    EPISODE_STARHIPS,
    EPISODE_VEHICLE,
    GET_FILMS,
    SORT_FILMS_BY_ABC,
    SORT_FILMS_BY_ZYX
} from "./types";

const getFilms = (films) => ({type: GET_FILMS, films})
const getPlanets = (planet) => ({type: EPISODE_PLANETS, planet})
const getCharacters = (character) => ({type: EPISODE_CHARACTERS, character})
const getStarships = (starship) => ({type: EPISODE_STARHIPS, starship})
const getVehicles = (vehicle) => ({type: EPISODE_VEHICLE, vehicle})
const getSpecies = (species) => ({type: EPISODE_SPECIES, species})
export const sortFilmsByABC = () => ({type: SORT_FILMS_BY_ABC})
export const sortFilmsByZYX = () => ({type: SORT_FILMS_BY_ZYX})


export const getFilmsThunk = () => async (dispatch) => {
    try {
        let result = await getFilmsAPI()
        dispatch(getFilms(result.data.results))
    } catch (e) {
        alert(e)
    }
}
export const getEpisodePlanetsThunk = (url) => async (dispatch, getState) => {
    if (getState().star.episodePlanets.some(p => p.url === url)) {
        return null
    } else {
        let result = await getSomethingAPI(url)
        dispatch(getPlanets(result.data))
    }
}
export const getEpisodeCharactersThunk = (url) => async (dispatch, getState) => {
    if (getState().star.episodeCharacters.some(p => p.url === url)) {
        return null
    } else {
        let result = await getSomethingAPI(url)
        dispatch(getCharacters(result.data))
    }
}
export const getEpisodeStarshipsThunk = (url) => async (dispatch, getState) => {
    if (getState().star.episodeStarships.some(p => p.url === url)) {
        return null
    } else {
        let result = await getSomethingAPI(url)
        dispatch(getStarships(result.data))
    }
}
export const getEpisodeVehiclesThunk = (url) => async (dispatch, getState) => {
    if (getState().star.episodeVehicles.some(p => p.url === url)) {
        return null
    } else {
        let result = await getSomethingAPI(url)
        dispatch(getVehicles(result.data))
    }
}
export const getEpisodeSpeciesThunk = (url) => async (dispatch, getState) => {
    if (getState().star.episodeSpecies.some(p => p.url === url)) {
        return null
    } else {
        let result = await getSomethingAPI(url)
        dispatch(getSpecies(result.data))
    }
}