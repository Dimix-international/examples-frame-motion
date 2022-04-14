import axios from "axios";

const configOMB = {
    baseURL: 'https://www.omdbapi.com/',
};
 const key = '?apikey=b4ae785f';
 const axiosInstance = axios.create(configOMB);

export const API = {
    searchFilmsByTitle: (title) => {
        return axiosInstance.get(`${key}&s=${title}&page=10`)
            .then(response => response.data)
            .catch(error => error.message)
    },
    searchFilmsByType: (title, type) => {
        return axiosInstance.get(`${key}&s=${title}&type=${type}`)
            .then(response => {
                return response.data
            })
            .catch(error => {
                return error.message
            })
    }
};