import React, { useState, useEffect, useRef } from 'react';
import { Grid } from 'semantic-ui-react';
import { getAvailableGenreSeeds } from '../../api';
import uniqid from 'uniqid';

const AvailableGenreSeeds = () => {
    const [content, setContent] = useState(<></>);
    useEffect(() => {
        getAvailableGenreSeeds().then(({ genres }) => {
            const columns = genres?.map(genre =>
                <Grid.Column key={uniqid()} celled>
                    {genre}
                </Grid.Column>
            );
            setContent(<Grid columns={8} celled>{columns}</Grid>);
        }).catch(error => setContent(<div>Unexpected Error! Details : {error}</div>))

    }, []);

    return content;
}

export default AvailableGenreSeeds;
