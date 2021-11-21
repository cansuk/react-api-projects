import React, { useState, useEffect, useRef } from 'react';
import { Grid } from 'semantic-ui-react';
import { getSeveralBrowseCategories } from '../../api';
import uniqid from 'uniqid';

const SeveralBrowseCategories = () => {
    const [content, setContent] = useState(<></>);
    useEffect(() => {
        getSeveralBrowseCategories().then(({ categories }) => {
            debugger;
            const columns = categories.items?.map(item =>
                <Grid.Column key={uniqid()} celled>
                    {item.name}
                </Grid.Column>
            );
            setContent(<Grid columns={8} celled>{columns}</Grid>);
        }).catch(error => setContent(<div>Unexpected Error! Details : {error}</div>))

    }, []);

    return content;
}

export default SeveralBrowseCategories;
