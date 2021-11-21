import React, { useState, useEffect, useRef } from 'react';
import { Grid, Card, Icon, Image } from 'semantic-ui-react';
import { getSeveralBrowseCategories } from '../../api';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

const SeveralBrowseCategories = () => {
    const [content, setContent] = useState(<></>);
    useEffect(() => {
        getSeveralBrowseCategories().then(({ categories }) => {
            debugger;
            const columns = categories.items?.map(item =>
                <Grid.Column key={uniqid()} celled>

                    <Card>
                        <Image src={item.icons?.[0].url} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{item.name}</Card.Header>
                            <Card.Meta>
                                <span className='date'></span>
                            </Card.Meta>
                            <Card.Description>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            {/* <a href={item.href} > {"discover"} </a> */}
                            {/* <Link to={`category?${item.href}&${item.id}`} key={uniqid()}> discover </Link> */}
                            <Link to={`category/${item.id}`} key={uniqid()}>
                                discover <Icon name='arrow right' />
                            </Link>
                        </Card.Content>
                    </Card>

                </Grid.Column>
            );
            setContent(<Grid columns={8} celled>{columns}</Grid>);
        }).catch(error => setContent(<div>Unexpected Error! Details : {error}</div>))

    }, []);

    return content;
}

export default SeveralBrowseCategories;
