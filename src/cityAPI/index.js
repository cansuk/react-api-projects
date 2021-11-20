import React from 'react';
// import { spotify } from "./config";

export const CityApi = () => {

    //    const auth = Buffer.from(`${spotify.client_id}:${spotify.client_secret}`).toString('base64');

    fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds').then((result) => {

    })


    return (
        <div>
            geodb city api
        </div>
    )
}
