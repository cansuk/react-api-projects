import React, { useState, useEffect } from 'react'
import { getAvailableGenreSeeds } from '../../api';

const AvailableGenreSeeds = () => {
    const [content, setContent] = useState(<div>Loading...</div>)

    useEffect(() => {

        getAvailableGenreSeeds().then((result) => {
            setContent(<div>Result is {result}</div>)
        }).catch(error => setContent(<div>Unexpected Error! Details : {error}</div>))

    }, []);


    return content;
}

export default AvailableGenreSeeds

// todo later : with typescript
// import React from 'react'
// import { getAvailableGenreSeeds } from '../../api';

// interface AvailableGenreSeedsProps {
//     genres: object
// }

// export const AvailableGenreSeeds = (): JSX.Element => {
//     debugger;
//     let result = getAvailableGenreSeeds();

//     debugger;
//     return <div>{`HELLO AvailableGenreSeeds result is ${result}`}</div>;
// }
