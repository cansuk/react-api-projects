import React, { useState, useEffect, useRef } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
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
            setContent(<Segment inverted>
                <Grid inverted columns={8} celled>{columns}</Grid>
            </Segment>);
        }).catch(error => setContent(<div>Unexpected Error! Details : {error}</div>))

    }, []);

    return content;
}

export default AvailableGenreSeeds;
