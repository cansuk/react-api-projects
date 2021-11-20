import React, { useState, useEffect, Suspense } from 'react';
import { Menu, Grid, Segment } from 'semantic-ui-react';
import { getAvailableGenreSeeds } from './api'
//import * as apiCall from './api'; // todo cansu 
const AvailableGenreSeeds = React.lazy(() => import('./components/browse/AvailableGenreSeeds'));

export const SpotifyApi = () => {



    // todo cansu later :
    // const currentMenuComp = {
    //     getAvailableGenreSeeds: AvailableGenreSeeds
    // }

    return (
        <div>please login</div>
    )
}


