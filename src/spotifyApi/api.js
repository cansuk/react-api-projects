import { config } from "./constants/config";

const { endpoint, bearer_token } = config;
async function _callApi(url, options) {
    const requestOptions = {
        method: 'GET',
        headers: { "Authorization": `Bearer ${bearer_token}` }
    };
    let data;
    try {
        const response = await window.fetch(`${endpoint}/${url}`, requestOptions || options); if (!response.ok) {

            data = await response.json();
            return Promise.reject(data);
        }
        data = await response.json();
        return data;
    } catch (err) {
        return Promise.reject({ Message: err.message || "Connection Error" });
    }
}

export const authorize = () => {
    const endpoint = "https://accounts.spotify.com/authorize";
    const client_id = "84eab1864ed841fc87222b484226f350";
    const client_secret = "5f97b992eecf4a919289344e67aeabd5";
    const scopes = 'user-read-private user-read-email';
    const redirect_uri = '/loggedin';
    var myHeaders = new Headers();
    myHeaders.append("client_id", "84eab1864ed841fc87222b484226f350");
    myHeaders.append("response_type", "code");
    myHeaders.append("scope", "user-read-private user-read-email");
    myHeaders.append("redirect_uri", "/home");
    myHeaders.append('Content-Type', 'application/json');

    //   myHeaders.append("Cookie", "__Host-device_id=AQAJCMqcSEW2f_fWGeyixuYb9HHm0vY6wxb71V6V_P0HinZWT7QwnhWsWwdY7FEzhVQySSl3S7L09o2RZF3kvCidRNhE-TehelI; __Host-sp_csrf_sid=383013ab4950ef93071a8d8794470ac5fb88ca4b0b3ffbb9a0af4b642fe6aff1; __Secure-TPASESSION=AQDFgctZKZxHKME1vd56Q590NF5HqtxaioMs949CafhxMb/dlkmyUHozZ/M+l16DUnAiqOUgHXpeBZP3mqJXqhQdo+YuLOLle/E=; inapptestgroup=; sp_sso_csrf_token=013acda719be2bcfbd91348469022b2f933a41133431363337343238373534323537; sp_tr=false");

    //var urlencoded = new URLSearchParams();

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        mode: 'no-cors'
        //  body: urlencoded
    };
    debugger;

    fetch("https://accounts.spotify.com/authorize", requestOptions)
        .then(response => { debugger; response.text(); })
        .then(result => { debugger; console.log(result); })
        .catch(error => { debugger; console.log('error', error) });

    // JSON.stringify({
    //     response_type: 'code',
    //     client_id: client_id,
    //     scope: scopes,
    //     redirect_uri: redirect_uri
    // });
}

export const getAvailableGenreSeeds = async () => {
    //  const url = `recommendations/available-genre-seeds`;
    //  return _callApi(url);

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer BQA7JNkuqm-JW-pRaPE8it37QnxWkrdv0KqjzEQl4wF9TyODZRjbGARBR01CBUF6INwzYYp9wDBvyIm21Y1KV13Tq-DGGK8FRsJjFvHq30yMKdPPl8JTcrUZ-i49ujLY3iCMtazQdpCplU3HXAIQYrdYrJrZz9kATVU0");

    var raw = "";

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://api.spotify.com/v1/recommendations/available-genre-seeds", requestOptions)
        .then(response => { debugger; response.text() })
        .then(result => { debugger; console.log(result) })
        .catch(error => { debugger; console.log('error', error) });

}
