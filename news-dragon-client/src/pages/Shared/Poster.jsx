import React from 'react';
import Button from "react-bootstrap/esm/Button";
import bg from '../../assets/bg.png'

const Poster = () => {
    return (
        <div  style={{backgroundImage: `url(${bg})`, padding:'50px', textAlign:'center'}}>
            {/* <img src={bg} alt="" /> */}
            <div className='text-white '>
                <h4>Create an Amazing Newspaper</h4>
                <p><small>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</small></p>
                <Button variant="danger">Learn More</Button>
            </div>
        </div>
    );
};

export default Poster;