import { config } from "./constants/config";

const { endpoint } = config;

const spotify = JSON.parse(window.localStorage.getItem('spotify'));

const token = spotify?.["spotify-token"];

export const getAvailableGenreSeeds = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch("https://api.spotify.com/v1/recommendations/available-genre-seeds", requestOptions)
        .then(response => response.text())
        .then(result => JSON.parse(result))
        .catch(error => { console.log('error', error) });

}

export const getSeveralBrowseCategories = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`${endpoint}/browse/categories`, requestOptions)
        .then(response => response.text())
        .then(result => JSON.parse(result))
        .catch(error => { console.log('error', error) });

}