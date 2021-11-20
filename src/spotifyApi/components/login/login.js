import React, { useEffect } from 'react';
import { authorize } from '../../api';

export const Login = () => {
    const host = "https://accounts.spotify.com";
    const clientId = "84eab1864ed841fc87222b484226f350";
    const scopes = 'user-library-read playlist-modify-public';
    const redirectUri = `${window.location.protocol}//${window.location.host}/auth`;
    debugger;
    const authUrl = `${host}/authorize?response_type=token` +
        `&redirect_uri=${encodeURIComponent(redirectUri)}` +
        `&client_id=${clientId}` +
        `&scope=${encodeURIComponent(scopes)}`

    return (
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <h2 className="subtitle">
                        Sign in with your Spotify account to see trends about your saved songs.
                    </h2>
                    <p>
                        <a
                            href={authUrl}
                            className="spotify-button is-primary button is-large"
                        >Sign into Spotify</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Login;

// const Login = () => {
//     useEffect(() => {
//         debugger;

//         authorize();

//     }, [])

//     return (
//         <div>
//             Welcome this is Login page
//         </div>
//     )
// }
