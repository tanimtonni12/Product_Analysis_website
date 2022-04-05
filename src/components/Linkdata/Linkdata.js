import React from 'react';
import { Link } from 'react-router-dom';

const Linkdata = (props) => {
    const { name, link } = props.route;
    return (
        <div>
            <li className='mr-16'>
                <Link to={link}>{name}</Link>
            </li>


        </div>
    );
};

export default Linkdata;