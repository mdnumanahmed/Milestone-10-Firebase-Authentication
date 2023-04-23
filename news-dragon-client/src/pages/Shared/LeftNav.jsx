import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import { Link, NavLink } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <h4>All Caterogy</h4>
            <div>
            <ListGroup as="ul">
                {
                    categories.map(category => <ListGroup.Item 
                        key={category.id} as="li">
                        <NavLink to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</NavLink>
                    </ListGroup.Item>
                    )
                }
                </ListGroup>
            </div>
        </div>
    );
};

export default LeftNav;