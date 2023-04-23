import React from 'react';
import { useSharedData } from '../../Context/context';

const Home = () => {
    const loadedPhones = useSharedData()
    return (
        <div>
            <h1>Loaded Phones using Context : {loadedPhones.length}</h1>
        </div>
    );
};

export default Home;