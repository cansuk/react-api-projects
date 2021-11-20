import React, { useState, useEffect, Suspense } from 'react';
import { Menu, Grid, Segment } from 'semantic-ui-react';

//import * as apiCall from './api'; // todo cansu 
const AvailableGenreSeeds = React.lazy(() => import('../components/browse/AvailableGenreSeeds.js'));
const Home = () => {
    const [activeItem, setActiveItem] = useState("getAvailableGenreSeeds");
    const [content, setContent] = useState(<></>);
    const handleItemClick = (e, { name }) => setActiveItem(name);

    // useEffect(() => {
    //     let result = getAvailableGenreSeeds(activeItem);

    // }, [activeItem]);

    return (
        <div>
            <Grid>
                <Grid.Column width={4}>
                    <Menu vertical>
                        <Menu.Item>
                            <Menu.Header>Browse</Menu.Header>
                            <Menu.Menu>
                                <Menu.Item
                                    name='getAvailableGenreSeeds'
                                    active={activeItem === 'getAvailableGenreSeeds'}
                                    onClick={handleItemClick}
                                >Get Available Genre Seeds
                                </Menu.Item>
                                <Menu.Item
                                    name='getSeveralBrowseCategories'
                                    active={activeItem === 'getSeveralBrowseCategories'}
                                    onClick={handleItemClick}
                                >Get Several Browse Categories
                                </Menu.Item>
                                <Menu.Item
                                    name='getSingleBrowseCategory'
                                    active={activeItem === 'getSingleBrowseCategory'}
                                    onClick={handleItemClick}
                                >Get Single Browse Category
                                </Menu.Item>
                                <Menu.Item
                                    name='getCategoryPlaylists'
                                    active={activeItem === 'getCategoryPlaylists'}
                                    onClick={handleItemClick}
                                >Get Category's Playlists
                                </Menu.Item>
                                <Menu.Item
                                    name='getFeaturedPlaylists'
                                    active={activeItem === 'getFeaturedPlaylists'}
                                    onClick={handleItemClick}
                                >Get Featured Playlists
                                </Menu.Item>
                                <Menu.Item
                                    name='getNewReleases'
                                    active={activeItem === 'getNewReleases'}
                                    onClick={handleItemClick}
                                >Get New Releases
                                </Menu.Item>
                                <Menu.Item
                                    name='getRecommendations'
                                    active={activeItem === 'getRecommendations'}
                                    onClick={handleItemClick}
                                >Get Recommendations
                                </Menu.Item>

                            </Menu.Menu>
                        </Menu.Item>

                        <Menu.Item>
                            <Menu.Header>Albums</Menu.Header>
                            <Menu.Menu>
                                <Menu.Item
                                    name='getAlbumTracks'
                                    active={activeItem === 'getAlbumTracks'}
                                    onClick={handleItemClick}
                                >
                                    Get Album Tracks
                                </Menu.Item>
                                <Menu.Item
                                    name='getAlbum'
                                    active={activeItem === 'getAlbum'}
                                    onClick={handleItemClick}
                                >	Get Album </Menu.Item>
                                <Menu.Item
                                    name='getSeveralAlbums'
                                    active={activeItem === 'getAlbum'}
                                    onClick={handleItemClick}
                                >	Get Several Albums
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu.Item>

                        <Menu.Item>
                            <Menu.Header>Artists</Menu.Header>
                            <Menu.Menu>
                                <Menu.Item
                                    name='getArtistAlbums'
                                    active={activeItem === 'getArtistAlbums'}
                                    onClick={handleItemClick}
                                >Get Artist's Albums </Menu.Item>
                                <Menu.Item
                                    name='getArtistRelatedAlbums'
                                    active={activeItem === 'getArtistRelatedAlbums'}
                                    onClick={handleItemClick}
                                >Get Artist's Related Artists
                                </Menu.Item>
                                <Menu.Item
                                    name='getArtistTopTracks'
                                    active={activeItem === 'getArtistTopTracks'}
                                    onClick={handleItemClick}
                                >Get Artist's Top Tracks
                                </Menu.Item>
                                <Menu.Item
                                    name='getArtist'
                                    active={activeItem === 'getArtist'}
                                    onClick={handleItemClick}
                                >Get Artist
                                </Menu.Item>
                                <Menu.Item
                                    name='getSeveralArtists'
                                    active={activeItem === 'getSeveralArtists'}
                                    onClick={handleItemClick}
                                >Get Several Artists
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu.Item>

                        <Menu.Item>
                            <Menu.Header>Player</Menu.Header>
                            <Menu.Menu>
                                <Menu.Item
                                    name='getRecentlyPlayedTracks'
                                    active={activeItem === 'getRecentlyPlayedTracks'}
                                    onClick={handleItemClick}
                                >Get Recently Played Tracks </Menu.Item>
                                <Menu.Item
                                    name='togglePlaybackShuffle'
                                    active={activeItem === 'togglePlaybackShuffle'}
                                    onClick={handleItemClick}
                                >Toggle Playback Shuffle </Menu.Item>
                                <Menu.Item
                                    name='skipToNext'
                                    active={activeItem === 'skipToNext'}
                                    onClick={handleItemClick}
                                >Skip To Next </Menu.Item>
                            </Menu.Menu>
                        </Menu.Item>

                    </Menu>
                </Grid.Column>
                <Grid.Column stretched width={4}>
                    <Segment>
                        This is an stretched grid column. This segment will always match the
                        tab height
                        <Suspense fallback={<div>Loading...</div>}>
                            <AvailableGenreSeeds />
                        </Suspense>

                    </Segment>
                </Grid.Column>
            </Grid>

        </div>
    )
}

export default Home
