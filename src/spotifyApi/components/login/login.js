import React, { useEffect } from 'react';
import { authorize } from '../../api';
import { Segment, Icon, Button, Header } from 'semantic-ui-react';

export const Login = () => {
    const host = "https://accounts.spotify.com";

    const clientId = "[your_client_id]";

    const scopes = 'user-library-read playlist-modify-public';
    const redirectUri = `${window.location.protocol}//${window.location.host}/auth`;
    debugger;
    const authUrl = `${host}/authorize?response_type=token` +
        `&redirect_uri=${encodeURIComponent(redirectUri)}` +
        `&client_id=${clientId}` +
        `&scope=${encodeURIComponent(scopes)}`

    return (
        <Segment inverted placeholder style={{ height: '100%' }}>
            <Header icon>
                <Icon name='spotify outline' />
                Sign in with your Spotify account
            </Header>
            <Button primary href={authUrl}>Sign into Spotify
            </Button>

        </Segment>

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
