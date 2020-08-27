import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://swapi.dev/api/'
})

export const getFilmsAPI = () => {
    return instance.get('films/')
}
export const getSomethingAPI = (url) => {
    const endpoint = url.substring(21, 40)
    return instance.get(endpoint)
}