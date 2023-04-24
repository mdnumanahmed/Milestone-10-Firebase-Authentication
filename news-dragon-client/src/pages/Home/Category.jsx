import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const Category = () => {
    const {categoryId} = useParams()
    const categorizedNews = useLoaderData()
    return (
        <div>
            <h4>This is Category: {categorizedNews.length}</h4>
            {
                categorizedNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;