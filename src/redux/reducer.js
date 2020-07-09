import {getFilmsAPI, getSomethingAPI} from "../API/api";
import episode1 from "../images/episode1.jpg"
import episode2 from "../images/episode2.jpg"
import episode3 from "../images/episode3.jpg"
import episode4 from "../images/episode4.jpg"
import episode5 from "../images/episode5.jpg"
import episode6 from "../images/episode6.jpg"

const GET_FILMS = 'GET_FILMS';
const EPISODE_PLANETS = 'EPISODE_PLANETS'
const EPISODE_CHARACTERS = 'EPISODE_CHARACTERS'
const EPISODE_STARHIPS = 'EPISODE_STARHIPS'
const EPISODE_VEHICLE = 'EPISODE_VEHICLE'
const EPISODE_SPECIES = 'EPISODE_SPECIES'


let initialState = {
    films: [],
    episodePlanets: [],
    episodeCharacters: [],
    episodeStarships: [],
    episodeVehicles: [],
    episodeSpecies: [],
    images: [{id: 1, src: episode1},
        {id: 2, src: episode2},
        {id: 3, src: episode3},
        {id: 4, src: episode4},
        {id: 5, src: episode5},
        {id: 6, src: episode6}]
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILMS:
            return {
                ...state,
                films: action.films
            }
        case EPISODE_PLANETS:
            return {
                ...state,
                episodePlanets: state.episodePlanets.some(p => p.name === action.planet.name) ? state.episodePlanets :  [...state.episodePlanets, action.planet]
            }
        case EPISODE_CHARACTERS:
            return {
                ...state,
                episodeCharacters: state.episodeCharacters.some(p => p.name === action.character.name) ? state.episodeCharacters : [...state.episodeCharacters, action.character]
            }
        case EPISODE_STARHIPS:
            return {
                ...state,
                episodeStarships: state.episodeStarships.some(p => p.name === action.starship.name) ? state.episodeStarships : [...state.episodeStarships, action.starship]
            }
        case EPISODE_VEHICLE:
            return {
                ...state,
                episodeVehicles: state.episodeVehicles.some(p => p.name === action.vehicle.name) ? state.episodeVehicles : [...state.episodeVehicles, action.vehicle]
            }
        case EPISODE_SPECIES:
            return {
                ...state,
                episodeSpecies: state.episodeSpecies.some(p => p.name === action.species.name) ? state.episodeSpecies : [...state.episodeSpecies, action.species]
            }

        default:
            return state;
    }
}


export const actions = {
    getFilms: (films) => ({type: GET_FILMS, films}),
    getPlanets: (planet) => ({type: EPISODE_PLANETS, planet}),
    getCharacters: (character) => ({type: EPISODE_CHARACTERS, character}),
    getStarships: (starship) => ({type: EPISODE_STARHIPS, starship}),
    getVehicles: (vehicle) => ({type: EPISODE_VEHICLE, vehicle}),
    getSpecies: (species) => ({type: EPISODE_SPECIES, species}),
}

export const getFilmsThunk = () => async (dispatch) => {
    let result = await getFilmsAPI()
    let sortFilms = result.data.results.sort((film1, film2) => {
        if (film1.title > film2.title) {
            return 1
        }
        if (film1.title < film2.title) {
            return -1
        }
        return 0
    })
    dispatch(actions.getFilms(sortFilms))
}
export const getEpisodePlanetsThunk = (url) => async (dispatch) => {
    let result = await getSomethingAPI(url)
    dispatch(actions.getPlanets(result.data))
}
export const getEpisodeCharactersThunk = (url) => async (dispatch) => {
    let result = await getSomethingAPI(url)
    dispatch(actions.getCharacters(result.data))
}
export const getEpisodeStarshipsThunk = (url) => async (dispatch) => {
    let result = await getSomethingAPI(url)
    dispatch(actions.getStarships(result.data))
}
export const getEpisodeVehiclesThunk = (url) => async (dispatch) => {
    let result = await getSomethingAPI(url)
    dispatch(actions.getVehicles(result.data))
}
export const getEpisodeSpeciesThunk = (url) => async (dispatch) => {
    let result = await getSomethingAPI(url)
    dispatch(actions.getSpecies(result.data))
}
