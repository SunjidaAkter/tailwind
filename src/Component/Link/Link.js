import React from 'react';
import './Link.css'


const Link = ({ route }) => {
    const { name, link } = route;
    return (
        <li className='mr-20 link'>
            <a href={link}>{name}</a>
        </li>
    );
};

export default Link;