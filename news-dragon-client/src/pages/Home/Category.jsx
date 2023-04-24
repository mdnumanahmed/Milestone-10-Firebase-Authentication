import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    const {categoryId} = useParams()
    return (
        <div>
            <h4>This is Category: {categoryId}</h4>
        </div>
    );
};

export default Category;