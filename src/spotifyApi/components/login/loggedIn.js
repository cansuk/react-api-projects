import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../loader';

const LoggedIn = () => {
    let navigate = useNavigate();
    let params = useParams();

    const hash = window.location.hash;
    const parts = hash.split('&');
    const prefix = 'access_token=';
    const tokenPart = parts.filter(str => str.indexOf(prefix))[0];
    const index = tokenPart.indexOf(prefix);
    const token = tokenPart.slice(index + prefix.length);

    const storageToken = JSON.parse(window.localStorage.getItem('spotify')) || {};

    storageToken['spotify-token'] = token;
    window.localStorage.setItem('spotify', JSON.stringify(storageToken));

    setTimeout(() => {
        navigate(`/home`);
    }, 3000);


    return (
        <div>
            You are logged in... <Loading />
        </div>
    )
}

export default LoggedIn
