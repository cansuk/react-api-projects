import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    debugger;
    let params = useParams();
    return (
        <div>
            params : {params.href} and {params.id}
        </div>
    )
}

export default Category;
