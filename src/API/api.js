import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
})

export const getFilmsAPI = () => {
    return instance.get('films/')
}
export const getSomethingAPI = (url) => {
    const endpoint = url.split('').splice(21,30).join('')
    return instance.get(endpoint)
}